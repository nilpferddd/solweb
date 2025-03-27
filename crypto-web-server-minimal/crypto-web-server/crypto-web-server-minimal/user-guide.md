# Solana Token Creator Web Interface - User Guide

## Overview

The Solana Token Creator Web Interface is a user-friendly application that allows you to create and manage Solana tokens without any coding knowledge. This guide will walk you through all the features and functionality of the application.

## Accessing the Application

The application is currently running at:
https://3000-iueuqp8y3j210dof6miim-853b7697.manus.computer

## Features

- Create custom Solana tokens with configurable parameters
- Support for both Phantom and Solflare wallets
- Configure token extensions like transfer fees, permanent delegate, etc.
- Manage your created tokens
- Create and manage liquidity pools

## Getting Started

### Connecting Your Wallet

1. Click the "Select Wallet" button in the top-right corner of the application
2. Choose either Phantom or Solflare wallet from the dropdown
3. Approve the connection request in your wallet extension
4. Once connected, your wallet address will be displayed

### Creating a Token

1. Navigate to the "Create Token" page
2. Fill out the Basic Info form:
   - Token Name: The full name of your token
   - Token Symbol: A short identifier (max 8 characters)
   - Decimals: Number of decimal places (0-10)
   - Supply: Total number of tokens to create
   - Description: Information about your token

3. Add Images and Social Links (optional):
   - Token Icon: Upload an image for your token
   - Website URL: Your project's website
   - Twitter: Your project's Twitter handle
   - Telegram: Your project's Telegram group
   - Discord: Your project's Discord server

4. Configure Token Extensions (optional):
   - Non-Transferable: Tokens cannot be transferred between wallets
   - Permanent Delegate: Allows a designated address to transfer tokens from any wallet
   - Confidential Transfer: Hides transfer amounts in transactions
   - Transfer Fee: Automatically collect a fee on each token transfer
   - Transfer Hook: Custom logic for token transfers
   - Interest-Bearing: Token automatically accrues interest
   - Default Account State: Set initial state for new token accounts

5. Advanced Options (optional):
   - Network: Choose between Mainnet, Testnet, or Devnet
   - Mint Authority: Address with permission to mint new tokens
   - Freeze Authority: Address with permission to freeze token accounts

6. Review your settings and click "Create Token"
7. Approve the transaction in your wallet
8. Wait for confirmation and receive your new token address

### Managing Tokens

1. Navigate to the "Manage Tokens" page
2. Connect your wallet if not already connected
3. View a list of tokens created by your wallet
4. For each token, you can:
   - View token details
   - Mint additional tokens
   - Freeze/thaw accounts
   - Revoke authorities
   - Update metadata

### Creating Liquidity Pools

1. Navigate to the "Liquidity Pool" page
2. Connect your wallet if not already connected
3. Select the token you want to create a pool for
4. Choose the pairing token (SOL, USDC, etc.)
5. Enter the amount of each token to add to the pool
6. Click "Create Pool" and approve the transaction in your wallet

## Token Extensions Explained

### Non-Transferable
Tokens cannot be transferred between wallets. Useful for identification, membership, or credentials.

### Permanent Delegate
Allows a designated address to transfer or burn tokens from any wallet. Useful for stablecoins or recovering stolen tokens.

### Confidential Transfer
Hides transfer amounts in transactions. Only the sender and recipient can see the amount.

### Transfer Fee
Automatically collect a fee on each token transfer. Useful for revenue generation or community treasuries.

### Transfer Hook
Custom logic for token transfers. Enables advanced functionality like whitelisting, blacklisting, or custom transfer rules.

### Interest-Bearing
Token automatically accrues interest. Useful for staking or savings applications.

### Default Account State
Set initial state for new token accounts. Can be initialized or frozen.

## Troubleshooting

### Wallet Connection Issues
- Make sure your wallet extension is installed and unlocked
- Try refreshing the page
- Check that you're on the correct network (Devnet/Testnet/Mainnet)

### Transaction Failures
- Ensure you have enough SOL to pay for transaction fees
- Check that you have the necessary permissions for the operation
- Verify that your wallet is connected to the correct network

### Token Not Appearing
- Token may still be processing; wait a few minutes
- Check that you're viewing the correct network
- Try refreshing the token list

## Support

For additional help or to report issues, please refer to the GitHub repository:
https://github.com/tm01013/how-to-make-your-own-crypto/
