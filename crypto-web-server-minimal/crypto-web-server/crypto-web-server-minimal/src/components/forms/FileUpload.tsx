'use client';

import React from 'react';

interface FileUploadProps {
  id: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  accept?: string;
  required?: boolean;
  disabled?: boolean;
  className?: string;
  label?: string;
}

const FileUpload: React.FC<FileUploadProps> = ({
  id,
  name,
  onChange,
  accept = 'image/*',
  required = false,
  disabled = false,
  className = '',
  label = 'Upload File',
}) => {
  return (
    <div className={`${className}`}>
      <label
        htmlFor={id}
        className={`flex justify-center items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 cursor-pointer ${
          disabled ? 'opacity-50 cursor-not-allowed' : ''
        }`}
      >
        <svg
          className="mr-2 h-5 w-5 text-gray-400"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z"
            clipRule="evenodd"
          />
        </svg>
        {label}
      </label>
      <input
        id={id}
        name={name}
        type="file"
        accept={accept}
        onChange={onChange}
        required={required}
        disabled={disabled}
        className="sr-only"
      />
    </div>
  );
};

export default FileUpload;
