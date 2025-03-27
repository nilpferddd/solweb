'use client';

import React from 'react';

interface InputProps {
  type?: 'text' | 'number' | 'email' | 'password' | 'url';
  id: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  min?: number;
  max?: number;
  className?: string;
}

const Input: React.FC<InputProps> = ({
  type = 'text',
  id,
  name,
  value,
  onChange,
  placeholder = '',
  required = false,
  disabled = false,
  min,
  max,
  className = '',
}) => {
  return (
    <input
      type={type}
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      disabled={disabled}
      min={min}
      max={max}
      className={`w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 ${
        disabled ? 'bg-gray-100 cursor-not-allowed' : ''
      } ${className}`}
    />
  );
};

export default Input;
