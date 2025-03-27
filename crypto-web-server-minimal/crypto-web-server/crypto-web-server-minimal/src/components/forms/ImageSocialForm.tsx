'use client';

import React, { useState } from 'react';
import FormField from './FormField';
import Input from './Input';
import FileUpload from './FileUpload';
import Button from './Button';

interface ImageSocialFormProps {
  onNext: () => void;
  onPrevious: () => void;
  formData: {
    imageFile: File | null;
    website: string;
    twitter: string;
    telegram: string;
    discord: string;
  };
  setFormData: React.Dispatch<React.SetStateAction<{
    imageFile: File | null;
    website: string;
    twitter: string;
    telegram: string;
    discord: string;
  }>>;
}

const ImageSocialForm: React.FC<ImageSocialFormProps> = ({ 
  onNext, 
  onPrevious, 
  formData, 
  setFormData 
}) => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setFormData(prev => ({ ...prev, imageFile: file }));
      
      // Create preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext();
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="mb-6">
        <h3 className="text-lg font-medium text-gray-900 mb-2">Token Image</h3>
        <div className="flex flex-col items-center">
          <div className="w-40 h-40 bg-gray-100 rounded-lg flex items-center justify-center mb-4 overflow-hidden">
            {imagePreview ? (
              <img 
                src={imagePreview} 
                alt="Token preview" 
                className="w-full h-full object-cover"
              />
            ) : (
              <svg 
                className="w-12 h-12 text-gray-400" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" 
                />
              </svg>
            )}
          </div>
          <FileUpload
            id="tokenImage"
            name="tokenImage"
            onChange={handleFileChange}
            accept="image/png,image/jpeg,image/gif"
            label="Upload Image"
          />
          <p className="mt-2 text-xs text-gray-500">
            Recommended: Square image (1000x1000px), PNG or JPG format
          </p>
        </div>
      </div>
      
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Social Links</h3>
        
        <FormField 
          label="Website" 
          helpText="Your project's website URL"
        >
          <Input
            type="url"
            id="website"
            name="website"
            value={formData.website}
            onChange={handleInputChange}
            placeholder="https://example.com"
          />
        </FormField>
        
        <FormField 
          label="Twitter" 
          helpText="Your project's Twitter URL"
        >
          <Input
            type="url"
            id="twitter"
            name="twitter"
            value={formData.twitter}
            onChange={handleInputChange}
            placeholder="https://twitter.com/yourproject"
          />
        </FormField>
        
        <FormField 
          label="Telegram" 
          helpText="Your project's Telegram URL"
        >
          <Input
            type="url"
            id="telegram"
            name="telegram"
            value={formData.telegram}
            onChange={handleInputChange}
            placeholder="https://t.me/yourproject"
          />
        </FormField>
        
        <FormField 
          label="Discord" 
          helpText="Your project's Discord invite URL"
        >
          <Input
            type="url"
            id="discord"
            name="discord"
            value={formData.discord}
            onChange={handleInputChange}
            placeholder="https://discord.gg/yourproject"
          />
        </FormField>
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

export default ImageSocialForm;
