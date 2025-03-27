'use client';

import React, { useEffect, useState } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { useWalletContext } from './WalletContext';
import Button from '@/components/forms/Button';

interface WalletStatusProps {
  showDetails?: boolean;
}

const WalletStatus: React.FC<WalletStatusProps> = ({ showDetails = true }) => {
  const { connected, publicKey, disconnect } = useWallet();
  const { network, tokens, isLoading, refreshTokens } = useWalletContext();
  const [copied, setCopied] = useState(false);

  // Format wallet address for display
  const formatAddress = (address: string) => {
    if (!address) return '';
    return `${address.slice(0, 4)}...${address.slice(-4)}`;
  };

  // Copy address to clipboard
  const copyAddress = () => {
    if (publicKey) {
      navigator.clipboard.writeText(publicKey.toString());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  // Refresh tokens when wallet connects
  useEffect(() => {
    if (connected && publicKey) {
      refreshTokens();
    }
  }, [connected, publicKey]);

  if (!connected) {
    return (
      <div className="bg-gray-100 rounded-lg p-4 text-center">
        <p className="text-gray-600">Wallet not connected</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-medium">Wallet Connected</h3>
        <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
          {network.charAt(0).toUpperCase() + network.slice(1)}
        </span>
      </div>
      
      <div className="flex items-center space-x-2 mb-4">
        <span className="text-gray-600 text-sm">
          {publicKey ? formatAddress(publicKey.toString()) : ''}
        </span>
        <button 
          onClick={copyAddress}
          className="text-xs text-blue-600 hover:text-blue-800"
        >
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
      
      {showDetails && (
        <>
          <div className="border-t border-gray-200 pt-3 mb-3">
            <h4 className="text-sm font-medium mb-2">Your Tokens</h4>
            {isLoading ? (
              <p className="text-sm text-gray-500">Loading tokens...</p>
            ) : tokens.length > 0 ? (
              <ul className="space-y-2">
                {tokens.map((token) => (
                  <li key={token.tokenAddress} className="text-sm">
                    <div className="flex justify-between">
                      <span className="font-medium">{token.symbol}</span>
                      <span>{token.supply}</span>
                    </div>
                    <div className="text-xs text-gray-500">{token.name}</div>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-gray-500">No tokens found</p>
            )}
          </div>
          
          <div className="flex justify-between">
            <Button 
              size="sm" 
              variant="outline" 
              onClick={refreshTokens}
            >
              Refresh
            </Button>
            <Button 
              size="sm" 
              variant="secondary" 
              onClick={() => disconnect()}
            >
              Disconnect
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default WalletStatus;
