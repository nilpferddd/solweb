'use client';

import React, { useState } from 'react';
import FormField from './FormField';
import Checkbox from './Checkbox';
import Input from './Input';
import Radio from './Radio';
import Button from './Button';

interface ExtensionsFormProps {
  onNext: () => void;
  onPrevious: () => void;
  formData: {
    nonTransferable: boolean;
    permanentDelegate: boolean;
    permanentDelegateAddress: string;
    confidentialTransfer: boolean;
    confidentialTransferPolicy: 'auto' | 'manual';
    transferFee: boolean;
    transferFeePercentage: string;
    transferFeeMaxAmount: string;
    transferHook: boolean;
    transferHookProgramId: string;
    interestBearing: boolean;
    interestRate: string;
    defaultAccountState: boolean;
    defaultAccountStateValue: 'initialized' | 'frozen';
  };
  setFormData: React.Dispatch<React.SetStateAction<{
    nonTransferable: boolean;
    permanentDelegate: boolean;
    permanentDelegateAddress: string;
    confidentialTransfer: boolean;
    confidentialTransferPolicy: 'auto' | 'manual';
    transferFee: boolean;
    transferFeePercentage: string;
    transferFeeMaxAmount: string;
    transferHook: boolean;
    transferHookProgramId: string;
    interestBearing: boolean;
    interestRate: string;
    defaultAccountState: boolean;
    defaultAccountStateValue: 'initialized' | 'frozen';
  }>>;
}

const ExtensionsForm: React.FC<ExtensionsFormProps> = ({
  onNext,
  onPrevious,
  formData,
  setFormData
}) => {
  const [errors, setErrors] = useState<{
    permanentDelegateAddress?: string;
    transferFeePercentage?: string;
    transferFeeMaxAmount?: string;
    transferHookProgramId?: string;
    interestRate?: string;
  }>({});

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: checked }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user types
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleRadioChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const newErrors: {
      permanentDelegateAddress?: string;
      transferFeePercentage?: string;
      transferFeeMaxAmount?: string;
      transferHookProgramId?: string;
      interestRate?: string;
    } = {};
    
    if (formData.permanentDelegate && !formData.permanentDelegateAddress.trim()) {
      newErrors.permanentDelegateAddress = 'Permanent delegate address is required';
    }
    
    if (formData.transferFee) {
      if (!formData.transferFeePercentage.trim()) {
        newErrors.transferFeePercentage = 'Transfer fee percentage is required';
      } else {
        const feePercent = parseFloat(formData.transferFeePercentage);
        if (isNaN(feePercent) || feePercent < 0 || feePercent > 100) {
          newErrors.transferFeePercentage = 'Fee percentage must be between 0 and 100';
        }
      }
      
      if (!formData.transferFeeMaxAmount.trim()) {
        newErrors.transferFeeMaxAmount = 'Maximum fee amount is required';
      } else {
        const maxFee = parseFloat(formData.transferFeeMaxAmount);
        if (isNaN(maxFee) || maxFee <= 0) {
          newErrors.transferFeeMaxAmount = 'Maximum fee must be a positive number';
        }
      }
    }
    
    if (formData.transferHook && !formData.transferHookProgramId.trim()) {
      newErrors.transferHookProgramId = 'Transfer hook program ID is required';
    }
    
    if (formData.interestBearing) {
      if (!formData.interestRate.trim()) {
        newErrors.interestRate = 'Interest rate is required';
      } else {
        const rate = parseFloat(formData.interestRate);
        if (isNaN(rate) || rate < 0 || rate > 100) {
          newErrors.interestRate = 'Interest rate must be between 0 and 100';
        }
      }
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onNext();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="bg-blue-50 p-4 rounded-md mb-6">
        <h3 className="text-blue-800 font-medium mb-2">About Token Extensions</h3>
        <p className="text-blue-700 text-sm">
          Token extensions add special functionality to your token. Each extension has specific use cases and limitations.
          Learn more about token extensions in the <a href="https://spl.solana.com/token-2022/extensions" target="_blank" rel="noopener noreferrer" className="underline">official documentation</a>.
        </p>
      </div>
      
      <div className="space-y-4">
        <Checkbox
          id="nonTransferable"
          name="nonTransferable"
          checked={formData.nonTransferable}
          onChange={handleCheckboxChange}
          label="Non-Transferable"
          className="mb-1"
        />
        <p className="text-sm text-gray-500 ml-6">
          Tokens cannot be transferred between wallets. Useful for identification, membership, or credentials.
        </p>
      </div>
      
      <div className="space-y-4">
        <Checkbox
          id="permanentDelegate"
          name="permanentDelegate"
          checked={formData.permanentDelegate}
          onChange={handleCheckboxChange}
          label="Permanent Delegate"
          className="mb-1"
        />
        <p className="text-sm text-gray-500 ml-6">
          Allows a designated address to transfer or burn tokens from any wallet. Useful for stablecoins or recovering stolen tokens.
        </p>
        
        {formData.permanentDelegate && (
          <FormField
            label="Permanent Delegate Address"
            required
            helpText="Solana address that will have permanent delegate authority"
          >
            <Input
              type="text"
              id="permanentDelegateAddress"
              name="permanentDelegateAddress"
              value={formData.permanentDelegateAddress}
              onChange={handleInputChange}
              placeholder="Enter Solana address"
              required
            />
            {errors.permanentDelegateAddress && (
              <p className="mt-1 text-sm text-red-600">{errors.permanentDelegateAddress}</p>
            )}
          </FormField>
        )}
      </div>
      
      <div className="space-y-4">
        <Checkbox
          id="confidentialTransfer"
          name="confidentialTransfer"
          checked={formData.confidentialTransfer}
          onChange={handleCheckboxChange}
          label="Confidential Transfer"
          className="mb-1"
        />
        <p className="text-sm text-gray-500 ml-6">
          Hides transfer amounts in transactions. Only the sender and recipient can see the amount.
        </p>
        
        {formData.confidentialTransfer && (
          <div className="ml-6 mt-2">
            <p className="text-sm font-medium text-gray-700 mb-2">Approval Policy:</p>
            <div className="space-y-2">
              <Radio
                id="confidentialAuto"
                name="confidentialTransferPolicy"
                value="auto"
                checked={formData.confidentialTransferPolicy === 'auto'}
                onChange={() => handleRadioChange('confidentialTransferPolicy', 'auto')}
                label="Auto (Automatically approve confidential transfers)"
              />
              <Radio
                id="confidentialManual"
                name="confidentialTransferPolicy"
                value="manual"
                checked={formData.confidentialTransferPolicy === 'manual'}
                onChange={() => handleRadioChange('confidentialTransferPolicy', 'manual')}
                label="Manual (Require explicit approval for confidential transfers)"
              />
            </div>
          </div>
        )}
      </div>
      
      <div className="space-y-4">
        <Checkbox
          id="transferFee"
          name="transferFee"
          checked={formData.transferFee}
          onChange={handleCheckboxChange}
          label="Transfer Fee"
          className="mb-1"
        />
        <p className="text-sm text-gray-500 ml-6">
          Automatically collect a fee on each token transfer. Useful for revenue generation or community treasuries.
        </p>
        
        {formData.transferFee && (
          <div className="ml-6 space-y-4">
            <FormField
              label="Fee Percentage"
              required
              helpText="Percentage of each transfer to collect as fee (0-100)"
            >
              <Input
                type="number"
                id="transferFeePercentage"
                name="transferFeePercentage"
                value={formData.transferFeePercentage}
                onChange={handleInputChange}
                placeholder="Enter percentage"
                min={0}
                max={100}
                required
              />
              {errors.transferFeePercentage && (
                <p className="mt-1 text-sm text-red-600">{errors.transferFeePercentage}</p>
              )}
            </FormField>
            
            <FormField
              label="Maximum Fee"
              required
              helpText="Maximum fee amount in tokens"
            >
              <Input
                type="number"
                id="transferFeeMaxAmount"
                name="transferFeeMaxAmount"
                value={formData.transferFeeMaxAmount}
                onChange={handleInputChange}
                placeholder="Enter maximum fee"
                min={0}
                required
              />
              {errors.transferFeeMaxAmount && (
                <p className="mt-1 text-sm text-red-600">{errors.transferFeeMaxAmount}</p>
              )}
            </FormField>
          </div>
        )}
      </div>
      
      <div className="space-y-4">
        <Checkbox
          id="transferHook"
          name="transferHook"
          checked={formData.transferHook}
          onChange={handleCheckboxChange}
          label="Transfer Hook"
          className="mb-1"
        />
        <p className="text-sm text-gray-500 ml-6">
          Execute custom program logic on each transfer. Requires a deployed Solana program.
        </p>
        
        {formData.transferHook && (
          <FormField
            label="Program ID"
            required
            helpText="Solana address of the program to execute on transfers"
          >
            <Input
              type="text"
              id="transferHookProgramId"
              name="transferHookProgramId"
              value={formData.transferHookProgramId}
              onChange={handleInputChange}
              placeholder="Enter program ID"
              required
            />
            {errors.transferHookProgramId && (
              <p className="mt-1 text-sm text-red-600">{errors.transferHookProgramId}</p>
            )}
          </FormField>
        )}
      </div>
      
      <div className="space-y-4">
        <Checkbox
          id="interestBearing"
          name="interestBearing"
          checked={formData.interestBearing}
          onChange={handleCheckboxChange}
          label="Interest-Bearing"
          className="mb-1"
        />
        <p className="text-sm text-gray-500 ml-6">
          Automatically increase token balances over time based on an interest rate.
        </p>
        
        {formData.interestBearing && (
          <FormField
            label="Interest Rate (%)"
            required
            helpText="Annual interest rate percentage"
          >
            <Input
              type="number"
              id="interestRate"
              name="interestRate"
              value={formData.interestRate}
              onChange={handleInputChange}
              placeholder="Enter interest rate"
              min={0}
              max={100}
              required
            />
            {errors.interestRate && (
              <p className="mt-1 text-sm text-red-600">{errors.interestRate}</p>
            )}
          </FormField>
        )}
      </div>
      
      <div className="space-y-4">
        <Checkbox
          id="defaultAccountState"
          name="defaultAccountState"
          checked={formData.defaultAccountState}
          onChange={handleCheckboxChange}
          label="Default Account State"
          className="mb-1"
        />
        <p className="text-sm text-gray-500 ml-6">
          Set whether new token accounts start in a frozen or initialized state.
        </p>
        
        {formData.defaultAccountState && (
          <div className="ml-6 mt-2">
            <p className="text-sm font-medium text-gray-700 mb-2">Default State:</p>
            <div className="space-y-2">
              <Radio
                id="stateInitialized"
                name="defaultAccountStateValue"
                value="initialized"
                checked={formData.defaultAccountStateValue === 'initialized'}
                onChange={() => handleRadioChange('defaultAccountStateValue', 'initialized')}
                label="Initialized (Accounts can transfer tokens immediately)"
              />
              <Radio
                id="stateFrozen"
                name="defaultAccountStateValue"
                value="frozen"
                checked={formData.defaultAccountStateValue === 'frozen'}
                onChange={() => handleRadioChange('defaultAccountStateValue', 'frozen')}
                label="Frozen (Accounts need to be thawed before transferring)"
              />
            </div>
          </div>
        )}
      </div>
      
      <div className="flex justify-between">
        <Button 
          type="button" 
          variant="outline" 
          onClick={onPrevious}
        >
          Previous
        </Button>
        <Button type="submit">
          Next
        </Button>
      </div>
    </form>
  );
};

export default ExtensionsForm;
