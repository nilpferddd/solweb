'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, Transaction } from '@solana/web3.js';

interface TokenData {
  tokenAddress: string;
  name: string;
  symbol: string;
  decimals: number;
  supply: string;
  createdAt: string;
  network: string;
  extensions: string[];
}

interface WalletContextType {
  connected: boolean;
  publicKey: string | null;
  network: 'mainnet' | 'devnet' | 'custom';
  customRpcUrl: string;
  tokens: TokenData[];
  isLoading: boolean;
  error: string | null;
  setNetwork: (network: 'mainnet' | 'devnet' | 'custom') => void;
  setCustomRpcUrl: (url: string) => void;
  refreshTokens: () => Promise<void>;
}

const WalletContext = createContext<WalletContextType | undefined>(undefined);

export const useWalletContext = () => {
  const context = useContext(WalletContext);
  if (!context) {
    throw new Error('useWalletContext must be used within a WalletProvider');
  }
  return context;
};

interface WalletProviderProps {
  children: ReactNode;
}

export const WalletProvider = ({ children }: WalletProviderProps) => {
  const { connected, publicKey } = useWallet();
  const [network, setNetwork] = useState<'mainnet' | 'devnet' | 'custom'>('devnet');
  const [customRpcUrl, setCustomRpcUrl] = useState<string>('');
  const [tokens, setTokens] = useState<TokenData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const refreshTokens = async () => {
    if (!connected || !publicKey) {
      setTokens([]);
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`/api/token/list?wallet=${publicKey.toString()}`);
      const data = await response.json();

      if (data.success) {
        setTokens(data.tokens);
      } else {
        setError(data.error || 'Failed to fetch tokens');
        setTokens([]);
      }
    } catch (err) {
      console.error('Error fetching tokens:', err);
      setError('Failed to fetch tokens. Please try again.');
      setTokens([]);
    } finally {
      setIsLoading(false);
    }
  };

  // Refresh tokens when wallet connection changes or network changes
  useEffect(() => {
    if (connected && publicKey) {
      refreshTokens();
    } else {
      setTokens([]);
    }
  }, [connected, publicKey, network, customRpcUrl]);

  const value = {
    connected,
    publicKey: publicKey ? publicKey.toString() : null,
    network,
    customRpcUrl,
    tokens,
    isLoading,
    error,
    setNetwork,
    setCustomRpcUrl,
    refreshTokens,
  };

  return <WalletContext.Provider value={value}>{children}</WalletContext.Provider>;
};
