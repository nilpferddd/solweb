import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">© {new Date().getFullYear()} Solana Token Creator. All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="https://github.com/tm01013/how-to-make-your-own-crypto" 
               className="text-gray-400 hover:text-white transition-colors"
               target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </div>
        </div>
        <div className="mt-4 text-center text-xs text-gray-500">
          <p>Disclaimer: Only create tokens if it's legal in your country. This application is provided as-is without any guarantees or warranty.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
