'use client';

import React from 'react';
import { useWalletContext } from './WalletContext';
import { useWallet } from '@solana/wallet-adapter-react';
import Button from '@/components/forms/Button';

interface TokenTransactionProps {
  onSuccess?: () => void;
  onError?: (error: string) => void;
}

const TokenTransaction: React.FC<TokenTransactionProps> = ({ 
  onSuccess, 
  onError 
}) => {
  const { publicKey, connected, signTransaction } = useWallet();
  const { network } = useWalletContext();
  
  const handleTransaction = async (endpoint: string, data: any) => {
    if (!connected || !publicKey || !signTransaction) {
      onError?.('Wallet not connected');
      return;
    }
    
    try {
      // Add wallet and network information to the request
      const requestData = {
        ...data,
        walletAddress: publicKey.toString(),
        network
      };
      
      // Send request to API endpoint
      const response = await fetch(`/api/${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      });
      
      const result = await response.json();
      
      if (result.success) {
        onSuccess?.();
        return result;
      } else {
        onError?.(result.error || 'Transaction failed');
        return null;
      }
    } catch (error) {
      console.error('Transaction error:', error);
      onError?.('Transaction failed. Please try again.');
      return null;
    }
  };
  
  // Helper functions for common transactions
  const createToken = async (tokenData: any) => {
    return handleTransaction('token/create', tokenData);
  };
  
  const mintTokens = async (tokenAddress: string, amount: string) => {
    return handleTransaction('token/mint', {
      tokenAddress,
      amount
    });
  };
  
  const createLiquidityPool = async (tokenAddress: string, amount: string) => {
    return handleTransaction('liquidity/create', {
      tokenAddress,
      amount
    });
  };
  
  const freezeAccount = async (tokenAddress: string, accountAddress: string) => {
    return handleTransaction('token/account', {
      tokenAddress,
      accountAddress,
      action: 'freeze'
    });
  };
  
  const thawAccount = async (tokenAddress: string, accountAddress: string) => {
    return handleTransaction('token/account', {
      tokenAddress,
      accountAddress,
      action: 'thaw'
    });
  };
  
  const revokeAuthority = async (tokenAddress: string, authority: 'mint' | 'freeze') => {
    return handleTransaction('token/revoke', {
      tokenAddress,
      authority
    });
  };
  
  // Return transaction functions
  return {
    createToken,
    mintTokens,
    createLiquidityPool,
    freezeAccount,
    thawAccount,
    revokeAuthority,
    isReady: connected && !!publicKey && !!signTransaction
  };
};

export default TokenTransaction;
