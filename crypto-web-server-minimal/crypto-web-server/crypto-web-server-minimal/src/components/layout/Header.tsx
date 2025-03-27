import React from 'react';
import Link from 'next/link';
import WalletConnectButton from '../wallet/WalletConnectButton';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-purple-900 to-blue-900 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center mb-4 md:mb-0">
          <Link href="/" className="text-2xl font-bold">
            Solana Token Creator
          </Link>
        </div>
        
        <nav className="flex flex-wrap items-center justify-center md:justify-end space-x-4">
          <Link href="/" className="px-3 py-2 rounded hover:bg-purple-700 transition-colors">
            Home
          </Link>
          <Link href="/create-token" className="px-3 py-2 rounded hover:bg-purple-700 transition-colors">
            Create Token
          </Link>
          <Link href="/liquidity-pool" className="px-3 py-2 rounded hover:bg-purple-700 transition-colors">
            Liquidity Pool
          </Link>
          <Link href="/manage-tokens" className="px-3 py-2 rounded hover:bg-purple-700 transition-colors">
            Manage Tokens
          </Link>
          <Link href="/help" className="px-3 py-2 rounded hover:bg-purple-700 transition-colors">
            Help
          </Link>
          <WalletConnectButton />
        </nav>
      </div>
    </header>
  );
};

export default Header;
