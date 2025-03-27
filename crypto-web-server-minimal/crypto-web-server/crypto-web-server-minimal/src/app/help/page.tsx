import React from 'react';
import Layout from '@/components/layout/Layout';

export default function HelpPage() {
  return (
    <Layout>
      <div className="py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Help & Documentation</h1>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white shadow-md rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">Getting Started</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-gray-900">1. Connect Your Wallet</h3>
                <p className="mt-1 text-gray-600">
                  Click the "Connect Wallet" button in the top right corner to connect your Phantom or Solflare wallet. 
                  Make sure you have the wallet extension installed in your browser.
                </p>
              </div>
              
              <div>
                <h3 className="font-medium text-gray-900">2. Create a Token</h3>
                <p className="mt-1 text-gray-600">
                  Navigate to the "Create Token" page and fill out the form with your token details. 
                  You'll need to provide basic information, optional image and social links, and configure any extensions you want to use.
                </p>
              </div>
              
              <div>
                <h3 className="font-medium text-gray-900">3. Create a Liquidity Pool</h3>
                <p className="mt-1 text-gray-600">
                  After creating your token, you can create a liquidity pool to enable trading. 
                  Navigate to the "Liquidity Pool" page and follow the instructions.
                </p>
              </div>
              
              <div>
                <h3 className="font-medium text-gray-900">4. Manage Your Tokens</h3>
                <p className="mt-1 text-gray-600">
                  Use the "Manage Tokens" page to view and manage all your created tokens. 
                  You can mint additional tokens, update metadata, and configure token settings.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white shadow-md rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">Token Extensions</h2>
            <p className="text-gray-600 mb-4">
              Solana's Token-2022 program supports various extensions that add functionality to your token:
            </p>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-gray-900">Non-Transferable</h3>
                <p className="mt-1 text-gray-600">
                  Makes tokens impossible to transfer between wallets. Useful for identification, membership, or credentials.
                </p>
              </div>
              
              <div>
                <h3 className="font-medium text-gray-900">Permanent Delegate</h3>
                <p className="mt-1 text-gray-600">
                  Allows a designated address to transfer or burn tokens from any wallet. Useful for stablecoins or recovering stolen tokens.
                </p>
              </div>
              
              <div>
                <h3 className="font-medium text-gray-900">Confidential Transfer</h3>
                <p className="mt-1 text-gray-600">
                  Hides transfer amounts in transactions. Only the sender and recipient can see the amount.
                </p>
              </div>
              
              <div>
                <h3 className="font-medium text-gray-900">Transfer Fee</h3>
                <p className="mt-1 text-gray-600">
                  Automatically collect a fee on each token transfer. Useful for revenue generation or community treasuries.
                </p>
              </div>
              
              <div>
                <h3 className="font-medium text-gray-900">Transfer Hook</h3>
                <p className="mt-1 text-gray-600">
                  Execute custom program logic on each transfer. Requires a deployed Solana program.
                </p>
              </div>
              
              <div>
                <h3 className="font-medium text-gray-900">Interest-Bearing</h3>
                <p className="mt-1 text-gray-600">
                  Automatically increase token balances over time based on an interest rate.
                </p>
              </div>
              
              <div>
                <h3 className="font-medium text-gray-900">Default Account State</h3>
                <p className="mt-1 text-gray-600">
                  Set whether new token accounts start in a frozen or initialized state.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Frequently Asked Questions</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-gray-900">How much does it cost to create a token?</h3>
                <p className="mt-1 text-gray-600">
                  Creating a token on the Solana mainnet requires SOL to pay for transaction fees. The exact amount depends on the token configuration and current network conditions, but it's typically less than 0.1 SOL. Creating tokens on devnet is free but they have no real value.
                </p>
              </div>
              
              <div>
                <h3 className="font-medium text-gray-900">Can I modify my token after creation?</h3>
                <p className="mt-1 text-gray-600">
                  Some aspects of your token can be modified after creation, such as minting additional tokens if you retain mint authority. However, core properties like decimals and extensions cannot be changed after creation.
                </p>
              </div>
              
              <div>
                <h3 className="font-medium text-gray-900">How do I add my token to a wallet?</h3>
                <p className="mt-1 text-gray-600">
                  Most Solana wallets automatically display tokens in your wallet. If not, you can manually add the token by entering the token mint address in your wallet's "Add Token" feature.
                </p>
              </div>
              
              <div>
                <h3 className="font-medium text-gray-900">What's the difference between devnet and mainnet?</h3>
                <p className="mt-1 text-gray-600">
                  Devnet is a test network where you can create tokens for free to test functionality. Mainnet is the production network where real-value tokens are created and traded. Always test on devnet before deploying to mainnet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
