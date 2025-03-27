'use client';

import React from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { useWalletContext } from './WalletContext';

const WalletConnectButton: React.FC = () => {
  const { connected, publicKey } = useWallet();
  const { network } = useWalletContext();
  
  // Custom styling to match our app's design
  const buttonStyle = {
    background: 'linear-gradient(to right, #8b5cf6, #6366f1)',
    color: 'white',
    fontWeight: 'medium',
    borderRadius: '0.375rem',
    padding: '0.5rem 1rem',
    fontSize: '0.875rem',
    lineHeight: '1.25rem',
    boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.2s',
  };

  return (
    <div className="wallet-adapter-dropdown">
      <WalletMultiButton className="wallet-adapter-button-custom" style={buttonStyle} />
      
      {connected && publicKey && (
        <div className="text-xs text-gray-500 mt-1 text-center">
          {network.charAt(0).toUpperCase() + network.slice(1)}
        </div>
      )}
    </div>
  );
};

export default WalletConnectButton;
