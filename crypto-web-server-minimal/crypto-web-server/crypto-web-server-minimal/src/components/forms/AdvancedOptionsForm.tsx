'use client';

import React, { useState } from 'react';
import FormField from './FormField';
import Input from './Input';
import Radio from './Radio';
import Button from './Button';
import Select from './Select';

interface AdvancedOptionsFormProps {
  onPrevious: () => void;
  onSubmit: () => void;
  formData: {
    network: 'mainnet' | 'devnet' | 'custom';
    customRpcUrl: string;
    recipientWallet: string;
    useCustomKeypair: boolean;
    keypairPath: string;
    mintAuthority: string;
    freezeAuthority: string;
  };
  setFormData: React.Dispatch<React.SetStateAction<{
    network: 'mainnet' | 'devnet' | 'custom';
    customRpcUrl: string;
    recipientWallet: string;
    useCustomKeypair: boolean;
    keypairPath: string;
    mintAuthority: string;
    freezeAuthority: string;
  }>>;
}

const AdvancedOptionsForm: React.FC<AdvancedOptionsFormProps> = ({
  onPrevious,
  onSubmit,
  formData,
  setFormData
}) => {
  const [errors, setErrors] = useState<{
    customRpcUrl?: string;
    recipientWallet?: string;
    keypairPath?: string;
    mintAuthority?: string;
    freezeAuthority?: string;
  }>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user types
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: checked }));
  };

  const handleNetworkChange = (value: string) => {
    setFormData(prev => ({ 
      ...prev, 
      network: value as 'mainnet' | 'devnet' | 'custom' 
    }));
  };

  const validateForm = () => {
    const newErrors: {
      customRpcUrl?: string;
      recipientWallet?: string;
      keypairPath?: string;
      mintAuthority?: string;
      freezeAuthority?: string;
    } = {};
    
    if (formData.network === 'custom' && !formData.customRpcUrl.trim()) {
      newErrors.customRpcUrl = 'Custom RPC URL is required when using custom network';
    }
    
    if (formData.recipientWallet.trim() && !formData.recipientWallet.match(/^[1-9A-HJ-NP-Za-km-z]{32,44}$/)) {
      newErrors.recipientWallet = 'Invalid Solana wallet address format';
    }
    
    if (formData.useCustomKeypair && !formData.keypairPath.trim()) {
      newErrors.keypairPath = 'Keypair path is required when using custom keypair';
    }
    
    if (formData.mintAuthority.trim() && !formData.mintAuthority.match(/^[1-9A-HJ-NP-Za-km-z]{32,44}$/)) {
      newErrors.mintAuthority = 'Invalid Solana wallet address format';
    }
    
    if (formData.freezeAuthority.trim() && !formData.freezeAuthority.match(/^[1-9A-HJ-NP-Za-km-z]{32,44}$/)) {
      newErrors.freezeAuthority = 'Invalid Solana wallet address format';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="bg-yellow-50 p-4 rounded-md mb-6">
        <h3 className="text-yellow-800 font-medium mb-2">Advanced Options</h3>
        <p className="text-yellow-700 text-sm">
          These settings are optional and intended for advanced users. If you're unsure, you can leave them at their default values.
        </p>
      </div>
      
      <FormField 
        label="Network" 
        helpText="Select which Solana network to use for token creation"
      >
        <div className="space-y-2">
          <Radio
            id="networkMainnet"
            name="network"
            value="mainnet"
            checked={formData.network === 'mainnet'}
            onChange={() => handleNetworkChange('mainnet')}
            label="Mainnet (Production network, requires SOL for fees)"
          />
          <Radio
            id="networkDevnet"
            name="network"
            value="devnet"
            checked={formData.network === 'devnet'}
            onChange={() => handleNetworkChange('devnet')}
            label="Devnet (Test network, free to use)"
          />
          <Radio
            id="networkCustom"
            name="network"
            value="custom"
            checked={formData.network === 'custom'}
            onChange={() => handleNetworkChange('custom')}
            label="Custom RPC URL"
          />
        </div>
      </FormField>
      
      {formData.network === 'custom' && (
        <FormField 
          label="Custom RPC URL" 
          required
          helpText="Enter the URL of your custom Solana RPC endpoint"
        >
          <Input
            type="url"
            id="customRpcUrl"
            name="customRpcUrl"
            value={formData.customRpcUrl}
            onChange={handleInputChange}
            placeholder="https://your-rpc-endpoint.com"
            required
          />
          {errors.customRpcUrl && (
            <p className="mt-1 text-sm text-red-600">{errors.customRpcUrl}</p>
          )}
        </FormField>
      )}
      
      <FormField 
        label="Recipient Wallet" 
        helpText="Wallet to receive the tokens (if different from connected wallet)"
      >
        <Input
          type="text"
          id="recipientWallet"
          name="recipientWallet"
          value={formData.recipientWallet}
          onChange={handleInputChange}
          placeholder="Enter Solana wallet address"
        />
        {errors.recipientWallet && (
          <p className="mt-1 text-sm text-red-600">{errors.recipientWallet}</p>
        )}
      </FormField>
      
      <div className="space-y-4">
        <div className="flex items-center">
          <input
            type="checkbox"
            id="useCustomKeypair"
            name="useCustomKeypair"
            checked={formData.useCustomKeypair}
            onChange={handleCheckboxChange}
            className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
          />
          <label htmlFor="useCustomKeypair" className="ml-2 block text-sm text-gray-700">
            Use Custom Token Keypair
          </label>
        </div>
        <p className="text-sm text-gray-500 ml-6">
          Advanced: Use a custom keypair file for the token mint. Leave unchecked to generate a new keypair.
        </p>
        
        {formData.useCustomKeypair && (
          <FormField
            label="Keypair Path"
            required
            helpText="Path to the keypair file on the server"
          >
            <Input
              type="text"
              id="keypairPath"
              name="keypairPath"
              value={formData.keypairPath}
              onChange={handleInputChange}
              placeholder="/path/to/keypair.json"
              required
            />
            {errors.keypairPath && (
              <p className="mt-1 text-sm text-red-600">{errors.keypairPath}</p>
            )}
          </FormField>
        )}
      </div>
      
      <FormField 
        label="Mint Authority" 
        helpText="Address that can mint new tokens (leave empty to use connected wallet)"
      >
        <Input
          type="text"
          id="mintAuthority"
          name="mintAuthority"
          value={formData.mintAuthority}
          onChange={handleInputChange}
          placeholder="Enter Solana wallet address"
        />
        {errors.mintAuthority && (
          <p className="mt-1 text-sm text-red-600">{errors.mintAuthority}</p>
        )}
      </FormField>
      
      <FormField 
        label="Freeze Authority" 
        helpText="Address that can freeze token accounts (leave empty to use connected wallet)"
      >
        <Input
          type="text"
          id="freezeAuthority"
          name="freezeAuthority"
          value={formData.freezeAuthority}
          onChange={handleInputChange}
          placeholder="Enter Solana wallet address"
        />
        {errors.freezeAuthority && (
          <p className="mt-1 text-sm text-red-600">{errors.freezeAuthority}</p>
        )}
      </FormField>
      
      <div className="flex justify-between">
        <Button 
          type="button" 
          variant="outline" 
          onClick={onPrevious}
        >
          Previous
        </Button>
        <Button type="submit">
          Create Token
        </Button>
      </div>
    </form>
  );
};

export default AdvancedOptionsForm;
