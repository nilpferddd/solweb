import { NextRequest, NextResponse } from 'next/server';
import { exec } from 'child_process';
import { promisify } from 'util';
import fs from 'fs';
import path from 'path';

const execPromise = promisify(exec);

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    
    // Extract form data
    const {
      tokenAddress,
      walletAddress,
      amount,
      network
    } = data;
    
    if (!tokenAddress || !walletAddress) {
      return NextResponse.json(
        { success: false, error: 'Token address and wallet address are required' },
        { status: 400 }
      );
    }
    
    // Create command to mint additional tokens
    let command = 'bash /home/ubuntu/crypto-web-server/how-to-make-your-own-crypto/solana-token-creator.sh';
    
    // Add mint parameters
    command += ` --mint-additional "${tokenAddress}" --recipient "${walletAddress}"`;
    
    // Add amount if provided
    if (amount) {
      command += ` --amount ${amount}`;
    }
    
    // Add network parameter
    if (network === 'mainnet') {
      command += ' --mainnet';
    } else if (network === 'devnet') {
      command += ' --devnet';
    } else if (network === 'custom' && data.customRpcUrl) {
      command += ` --url "${data.customRpcUrl}"`;
    }
    
    // Create a log directory if it doesn't exist
    const logDir = path.join(process.cwd(), 'logs');
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
    
    // Generate a unique log file name
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const logFile = path.join(logDir, `mint-additional-${timestamp}.log`);
    
    // Execute the command and log output
    command += ` > ${logFile} 2>&1`;
    
    console.log(`Executing command: ${command}`);
    
    // In a real implementation, we would execute the command
    // For now, we'll simulate success
    // const { stdout, stderr } = await execPromise(command);
    
    // Simulate mint result
    const mintResult = {
      success: true,
      tokenAddress: tokenAddress,
      transactionId: 'FakeTransactionIdXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
      amount: amount || 'default amount',
      network: network,
      logFile: logFile
    };
    
    return NextResponse.json(mintResult);
  } catch (error) {
    console.error('Error minting additional tokens:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to mint additional tokens' },
      { status: 500 }
    );
  }
}
