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
      basicInfo,
      imageSocial,
      extensions,
      advancedOptions
    } = data;
    
    // Create command with all parameters
    let command = 'bash /home/ubuntu/crypto-web-server/how-to-make-your-own-crypto/solana-token-creator.sh';
    
    // Add basic info parameters
    command += ` --token-name "${basicInfo.tokenName}"`;
    command += ` --symbol "${basicInfo.tokenSymbol}"`;
    command += ` --decimals ${basicInfo.decimals}`;
    command += ` --supply ${basicInfo.supply}`;
    command += ` --description "${basicInfo.description}"`;
    
    // Add network parameter
    if (advancedOptions.network === 'mainnet') {
      command += ' --mainnet';
    } else if (advancedOptions.network === 'devnet') {
      command += ' --devnet';
    } else if (advancedOptions.network === 'custom' && advancedOptions.customRpcUrl) {
      command += ` --url "${advancedOptions.customRpcUrl}"`;
    }
    
    // Add recipient wallet if provided
    if (advancedOptions.recipientWallet) {
      command += ` --recipient "${advancedOptions.recipientWallet}"`;
    }
    
    // Add custom keypair if enabled
    if (advancedOptions.useCustomKeypair && advancedOptions.keypairPath) {
      command += ` --keypair "${advancedOptions.keypairPath}"`;
    }
    
    // Add mint authority if provided
    if (advancedOptions.mintAuthority) {
      command += ` --mint-authority "${advancedOptions.mintAuthority}"`;
    }
    
    // Add freeze authority if provided
    if (advancedOptions.freezeAuthority) {
      command += ` --freeze-authority "${advancedOptions.freezeAuthority}"`;
    }
    
    // Add image and social links if provided
    if (imageSocial.website) {
      command += ` --website "${imageSocial.website}"`;
    }
    
    if (imageSocial.twitter) {
      command += ` --twitter "${imageSocial.twitter}"`;
    }
    
    if (imageSocial.telegram) {
      command += ` --telegram "${imageSocial.telegram}"`;
    }
    
    if (imageSocial.discord) {
      command += ` --discord "${imageSocial.discord}"`;
    }
    
    // Handle image file if uploaded
    let imageUrl = '';
    if (imageSocial.imageFile) {
      // In a real implementation, we would save the uploaded file and get its URL
      // For now, we'll just use a placeholder
      imageUrl = 'https://example.com/token-image.png';
      command += ` --icon-url "${imageUrl}"`;
    }
    
    // Add token extensions
    if (extensions.nonTransferable) {
      command += ' --non-transferable';
    }
    
    if (extensions.permanentDelegate && extensions.permanentDelegateAddress) {
      command += ` --permanent-delegate "${extensions.permanentDelegateAddress}"`;
    }
    
    if (extensions.confidentialTransfer) {
      command += ' --confidential-transfer';
      if (extensions.confidentialTransferPolicy === 'auto') {
        command += ' --auto-approve';
      }
    }
    
    if (extensions.transferFee && extensions.transferFeePercentage && extensions.transferFeeMaxAmount) {
      command += ` --transfer-fee ${extensions.transferFeePercentage} ${extensions.transferFeeMaxAmount}`;
    }
    
    if (extensions.transferHook && extensions.transferHookProgramId) {
      command += ` --transfer-hook "${extensions.transferHookProgramId}"`;
    }
    
    if (extensions.interestBearing && extensions.interestRate) {
      command += ` --interest-rate ${extensions.interestRate}`;
    }
    
    if (extensions.defaultAccountState) {
      command += ` --default-account-state ${extensions.defaultAccountStateValue}`;
    }
    
    // Create a log directory if it doesn't exist
    const logDir = path.join(process.cwd(), 'logs');
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
    
    // Generate a unique log file name
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const logFile = path.join(logDir, `token-creation-${timestamp}.log`);
    
    // Execute the command and log output
    command += ` > ${logFile} 2>&1`;
    
    console.log(`Executing command: ${command}`);
    
    // In a real implementation, we would execute the command
    // For now, we'll simulate success
    // const { stdout, stderr } = await execPromise(command);
    
    // Simulate token creation result
    const tokenResult = {
      success: true,
      tokenAddress: 'FakeTokenAddressXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
      transactionId: 'FakeTransactionIdXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
      network: advancedOptions.network,
      logFile: logFile
    };
    
    return NextResponse.json(tokenResult);
  } catch (error) {
    console.error('Error creating token:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to create token' },
      { status: 500 }
    );
  }
}
