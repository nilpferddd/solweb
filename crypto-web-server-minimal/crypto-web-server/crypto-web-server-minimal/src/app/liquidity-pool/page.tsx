import React from 'react';
import Layout from '@/components/layout/Layout';

export default function LiquidityPoolPage() {
  return (
    <Layout>
      <div className="py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Liquidity Pool</h1>
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-100 to-purple-100 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold mb-3">Create and Manage Liquidity Pools</h2>
            <p className="mb-4">
              Liquidity pools allow users to trade your token by providing liquidity. Create a pool to enable trading of your token.
            </p>
            <div className="bg-white bg-opacity-50 p-4 rounded-md">
              <p className="text-blue-800 font-medium">Connect your wallet to create or manage liquidity pools</p>
            </div>
          </div>
          
          <div className="bg-white shadow-md rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">Create Liquidity Pool</h2>
            <p className="text-gray-600 mb-6">
              Select a token and pair it with SOL or another token to create a liquidity pool.
            </p>
            
            <div className="p-8 text-center border-2 border-dashed border-gray-300 rounded-lg">
              <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              <h3 className="mt-2 text-sm font-medium text-gray-900">Connect wallet to create a liquidity pool</h3>
              <p className="mt-1 text-sm text-gray-500">
                You need to connect your wallet first to access this feature
              </p>
            </div>
          </div>
          
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Your Liquidity Pools</h2>
            <p className="text-gray-600 mb-6">
              View and manage your existing liquidity pools.
            </p>
            
            <div className="p-8 text-center border-2 border-dashed border-gray-300 rounded-lg">
              <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              <h3 className="mt-2 text-sm font-medium text-gray-900">No liquidity pools found</h3>
              <p className="mt-1 text-sm text-gray-500">
                Connect your wallet to view your liquidity pools
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
