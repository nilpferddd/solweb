'use client';

import React, { useState } from 'react';
import FormField from './FormField';
import Input from './Input';
import Textarea from './Textarea';
import Button from './Button';

interface BasicInfoFormProps {
  onNext: () => void;
  formData: {
    tokenName: string;
    tokenSymbol: string;
    decimals: string;
    supply: string;
    description: string;
  };
  setFormData: React.Dispatch<React.SetStateAction<{
    tokenName: string;
    tokenSymbol: string;
    decimals: string;
    supply: string;
    description: string;
  }>>;
}

const BasicInfoForm: React.FC<BasicInfoFormProps> = ({ onNext, formData, setFormData }) => {
  const [errors, setErrors] = useState<{
    tokenName?: string;
    tokenSymbol?: string;
    decimals?: string;
    supply?: string;
    description?: string;
  }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user types
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = () => {
    const newErrors: {
      tokenName?: string;
      tokenSymbol?: string;
      decimals?: string;
      supply?: string;
      description?: string;
    } = {};
    
    if (!formData.tokenName.trim()) {
      newErrors.tokenName = 'Token name is required';
    }
    
    if (!formData.tokenSymbol.trim()) {
      newErrors.tokenSymbol = 'Token symbol is required';
    } else if (formData.tokenSymbol.length > 8) {
      newErrors.tokenSymbol = 'Symbol must be 8 characters or less';
    }
    
    if (!formData.decimals.trim()) {
      newErrors.decimals = 'Decimals is required';
    } else {
      const decimalsNum = parseInt(formData.decimals);
      if (isNaN(decimalsNum) || decimalsNum < 0 || decimalsNum > 10) {
        newErrors.decimals = 'Decimals must be between 0 and 10';
      }
    }
    
    if (!formData.supply.trim()) {
      newErrors.supply = 'Supply is required';
    } else {
      const supplyNum = parseFloat(formData.supply);
      if (isNaN(supplyNum) || supplyNum <= 0) {
        newErrors.supply = 'Supply must be a positive number';
      }
    }
    
    if (!formData.description.trim()) {
      newErrors.description = 'Description is required';
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
      <FormField 
        label="Token Name" 
        required 
        helpText="The name of your token (e.g., 'My Awesome Token')"
      >
        <Input
          type="text"
          id="tokenName"
          name="tokenName"
          value={formData.tokenName}
          onChange={handleChange}
          placeholder="Enter token name"
          required
        />
        {errors.tokenName && <p className="mt-1 text-sm text-red-600">{errors.tokenName}</p>}
      </FormField>
      
      <FormField 
        label="Token Symbol" 
        required 
        helpText="Short identifier for your token, max 8 characters (e.g., 'MAT')"
      >
        <Input
          type="text"
          id="tokenSymbol"
          name="tokenSymbol"
          value={formData.tokenSymbol}
          onChange={handleChange}
          placeholder="Enter token symbol"
          required
        />
        {errors.tokenSymbol && <p className="mt-1 text-sm text-red-600">{errors.tokenSymbol}</p>}
      </FormField>
      
      <FormField 
        label="Decimals" 
        required 
        helpText="Number of decimal places (0 for NFT/whitelist tokens, 9 for standard tokens)"
      >
        <Input
          type="number"
          id="decimals"
          name="decimals"
          value={formData.decimals}
          onChange={handleChange}
          placeholder="Enter decimals (0-10)"
          min={0}
          max={10}
          required
        />
        {errors.decimals && <p className="mt-1 text-sm text-red-600">{errors.decimals}</p>}
      </FormField>
      
      <FormField 
        label="Supply" 
        required 
        helpText="Total number of tokens to create"
      >
        <Input
          type="number"
          id="supply"
          name="supply"
          value={formData.supply}
          onChange={handleChange}
          placeholder="Enter token supply"
          min={1}
          required
        />
        {errors.supply && <p className="mt-1 text-sm text-red-600">{errors.supply}</p>}
      </FormField>
      
      <FormField 
        label="Description" 
        required 
        helpText="Describe your token and its purpose"
      >
        <Textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Enter token description"
          required
          rows={4}
        />
        {errors.description && <p className="mt-1 text-sm text-red-600">{errors.description}</p>}
      </FormField>
      
      <div className="flex justify-end">
        <Button type="submit">
          Next
        </Button>
      </div>
    </form>
  );
};

export default BasicInfoForm;
