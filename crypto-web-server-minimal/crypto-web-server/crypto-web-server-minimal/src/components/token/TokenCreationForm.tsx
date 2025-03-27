'use client';

import React, { useState } from 'react';
import Tabs from '@/components/forms/Tabs';
import BasicInfoForm from '@/components/forms/BasicInfoForm';
import ImageSocialForm from '@/components/forms/ImageSocialForm';
import ExtensionsForm from '@/components/forms/ExtensionsForm';
import AdvancedOptionsForm from '@/components/forms/AdvancedOptionsForm';

const TokenCreationForm: React.FC = () => {
  const [activeTab, setActiveTab] = useState('basic-info');
  
  // Basic Info Form State
  const [basicInfoData, setBasicInfoData] = useState({
    tokenName: '',
    tokenSymbol: '',
    decimals: '9',
    supply: '1000000',
    description: '',
  });
  
  // Image & Social Form State
  const [imageSocialData, setImageSocialData] = useState({
    imageFile: null as File | null,
    website: '',
    twitter: '',
    telegram: '',
    discord: '',
  });
  
  // Extensions Form State
  const [extensionsData, setExtensionsData] = useState({
    nonTransferable: false,
    permanentDelegate: false,
    permanentDelegateAddress: '',
    confidentialTransfer: false,
    confidentialTransferPolicy: 'auto' as 'auto' | 'manual',
    transferFee: false,
    transferFeePercentage: '',
    transferFeeMaxAmount: '',
    transferHook: false,
    transferHookProgramId: '',
    interestBearing: false,
    interestRate: '',
    defaultAccountState: false,
    defaultAccountStateValue: 'initialized' as 'initialized' | 'frozen',
  });
  
  // Advanced Options Form State
  const [advancedOptionsData, setAdvancedOptionsData] = useState({
    network: 'devnet' as 'mainnet' | 'devnet' | 'custom',
    customRpcUrl: '',
    recipientWallet: '',
    useCustomKeypair: false,
    keypairPath: '',
    mintAuthority: '',
    freezeAuthority: '',
  });
  
  const tabs = [
    { id: 'basic-info', label: 'Basic Info' },
    { id: 'image-social', label: 'Image & Social' },
    { id: 'extensions', label: 'Extensions' },
    { id: 'advanced', label: 'Advanced' },
  ];
  
  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
  };
  
  const handleBasicInfoNext = () => {
    setActiveTab('image-social');
  };
  
  const handleImageSocialNext = () => {
    setActiveTab('extensions');
  };
  
  const handleImageSocialPrevious = () => {
    setActiveTab('basic-info');
  };
  
  const handleExtensionsNext = () => {
    setActiveTab('advanced');
  };
  
  const handleExtensionsPrevious = () => {
    setActiveTab('image-social');
  };
  
  const handleAdvancedPrevious = () => {
    setActiveTab('extensions');
  };
  
  const handleSubmit = async () => {
    // This will be implemented in the integration step
    console.log('Token creation form submitted with data:', {
      basicInfo: basicInfoData,
      imageSocial: imageSocialData,
      extensions: extensionsData,
      advancedOptions: advancedOptionsData,
    });
    
    // For now, just show an alert
    alert('Token creation functionality will be implemented in the next step.');
  };
  
  return (
    <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6">
      <h1 className="text-2xl font-bold text-center mb-6">Create Solana Token</h1>
      
      <Tabs 
        tabs={tabs} 
        activeTab={activeTab} 
        onTabChange={handleTabChange} 
      />
      
      <div className="mt-6">
        {activeTab === 'basic-info' && (
          <BasicInfoForm 
            onNext={handleBasicInfoNext} 
            formData={basicInfoData}
            setFormData={setBasicInfoData}
          />
        )}
        
        {activeTab === 'image-social' && (
          <ImageSocialForm 
            onNext={handleImageSocialNext}
            onPrevious={handleImageSocialPrevious}
            formData={imageSocialData}
            setFormData={setImageSocialData}
          />
        )}
        
        {activeTab === 'extensions' && (
          <ExtensionsForm 
            onNext={handleExtensionsNext}
            onPrevious={handleExtensionsPrevious}
            formData={extensionsData}
            setFormData={setExtensionsData}
          />
        )}
        
        {activeTab === 'advanced' && (
          <AdvancedOptionsForm 
            onSubmit={handleSubmit}
            onPrevious={handleAdvancedPrevious}
            formData={advancedOptionsData}
            setFormData={setAdvancedOptionsData}
          />
        )}
      </div>
    </div>
  );
};

export default TokenCreationForm;
