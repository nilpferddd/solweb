import React from 'react';
import Layout from '@/components/layout/Layout';
import TokenCreationForm from '@/components/token/TokenCreationForm';

export default function CreateTokenPage() {
  return (
    <Layout>
      <div className="py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Create Your Solana Token</h1>
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-purple-100 to-blue-100 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold mb-3">How to Create a Solana Token</h2>
            <p className="mb-4">
              Creating your own Solana token is simple with our easy-to-use interface. Follow these steps:
            </p>
            <ol className="list-decimal list-inside space-y-2 ml-4">
              <li>Connect your Solana wallet (Phantom or Solflare)</li>
              <li>Fill in the basic information for your token</li>
              <li>Upload an image and add social links (optional)</li>
              <li>Configure any token extensions you need</li>
              <li>Review and submit</li>
            </ol>
            <p className="mt-4 text-sm">
              Note: Token creation on mainnet requires SOL to pay for transaction fees. Devnet tokens are free but have no real value.
            </p>
          </div>
          
          <TokenCreationForm />
        </div>
      </div>
    </Layout>
  );
}
