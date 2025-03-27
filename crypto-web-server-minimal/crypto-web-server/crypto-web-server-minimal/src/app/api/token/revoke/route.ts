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
      authority, // 'mint' or 'freeze'
      network
    } = data;
    
    if (!tokenAddress || !walletAddress || !authority) {
      return NextResponse.json(
        { success: false, error: 'Token address, wallet address, and authority type are required' },
        { status: 400 }
      );
    }
    
    if (authority !== 'mint' && authority !== 'freeze') {
      return NextResponse.json(
        { success: false, error: 'Authority must be either "mint" or "freeze"' },
        { status: 400 }
      );
    }
    
    // Create command to revoke authority
    let command = 'bash /home/ubuntu/crypto-web-server/how-to-make-your-own-crypto/solana-token-creator.sh';
    
    // Add revoke parameters
    if (authority === 'mint') {
      command += ` --revoke-mint-authority "${tokenAddress}"`;
    } else {
      command += ` --revoke-freeze-authority "${tokenAddress}"`;
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
    const logFile = path.join(logDir, `revoke-${authority}-authority-${timestamp}.log`);
    
    // Execute the command and log output
    command += ` > ${logFile} 2>&1`;
    
    console.log(`Executing command: ${command}`);
    
    // In a real implementation, we would execute the command
    // For now, we'll simulate success
    // const { stdout, stderr } = await execPromise(command);
    
    // Simulate result
    const result = {
      success: true,
      tokenAddress: tokenAddress,
      authority: authority,
      transactionId: 'FakeTransactionIdXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
      network: network,
      logFile: logFile
    };
    
    return NextResponse.json(result);
  } catch (error) {
    console.error(`Error revoking ${data?.authority} authority:`, error);
    return NextResponse.json(
      { success: false, error: `Failed to revoke ${data?.authority} authority` },
      { status: 500 }
    );
  }
}
