import React from 'react';
import Layout from '@/components/layout/Layout';

export default function ManageTokensPage() {
  return (
    <Layout>
      <div className="py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Manage Your Tokens</h1>
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-green-100 to-blue-100 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold mb-3">Token Management Dashboard</h2>
            <p className="mb-4">
              View and manage all your created tokens. Update metadata, mint additional tokens, and configure token settings.
            </p>
            <div className="bg-white bg-opacity-50 p-4 rounded-md">
              <p className="text-green-800 font-medium">Connect your wallet to view your tokens</p>
            </div>
          </div>
          
          <div className="bg-white shadow-md rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">Your Tokens</h2>
            <p className="text-gray-600 mb-6">
              View all tokens created by your connected wallet.
            </p>
            
            <div className="p-8 text-center border-2 border-dashed border-gray-300 rounded-lg">
              <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="mt-2 text-sm font-medium text-gray-900">No tokens found</h3>
              <p className="mt-1 text-sm text-gray-500">
                Connect your wallet to view your tokens or create a new token
              </p>
              <div className="mt-6">
                <a href="/create-token" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700">
                  Create New Token
                </a>
              </div>
            </div>
          </div>
          
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Token Actions</h2>
            <p className="text-gray-600 mb-6">
              Common token management actions you can perform.
            </p>
            
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="border border-gray-200 rounded-md p-4 hover:bg-gray-50 cursor-not-allowed opacity-50">
                <h3 className="font-medium text-gray-900">Mint Additional Tokens</h3>
                <p className="mt-1 text-sm text-gray-500">
                  Increase the supply of your token by minting additional tokens
                </p>
              </div>
              
              <div className="border border-gray-200 rounded-md p-4 hover:bg-gray-50 cursor-not-allowed opacity-50">
                <h3 className="font-medium text-gray-900">Update Metadata</h3>
                <p className="mt-1 text-sm text-gray-500">
                  Update token metadata including image and social links
                </p>
              </div>
              
              <div className="border border-gray-200 rounded-md p-4 hover:bg-gray-50 cursor-not-allowed opacity-50">
                <h3 className="font-medium text-gray-900">Freeze/Unfreeze Accounts</h3>
                <p className="mt-1 text-sm text-gray-500">
                  Freeze or unfreeze token accounts if you have freeze authority
                </p>
              </div>
              
              <div className="border border-gray-200 rounded-md p-4 hover:bg-gray-50 cursor-not-allowed opacity-50">
                <h3 className="font-medium text-gray-900">Revoke Authority</h3>
                <p className="mt-1 text-sm text-gray-500">
                  Permanently revoke mint or freeze authority
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
