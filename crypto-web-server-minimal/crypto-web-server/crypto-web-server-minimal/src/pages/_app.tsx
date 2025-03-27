import React from 'react';
import { WalletConfig } from '@/components/wallet/WalletConfig';
import { AppProps } from 'next/app';
import '@/app/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WalletConfig>
      <Component {...pageProps} />
    </WalletConfig>
  );
}
