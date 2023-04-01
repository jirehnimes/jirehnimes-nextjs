import type { AppProps } from 'next/app';
import Script from 'next/script';
import { RecoilRoot } from 'recoil';

import '@/styles/globals.sass';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        src="https://platform.linkedin.com/badges/js/profile.js"
        async
        defer
        type="text/javascript"
      />

      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </>
  );
}

export default MyApp;
