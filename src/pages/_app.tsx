'use client'

import '@styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '@app/layout';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { AuthProvider } from '@/contexts/AuthContext';
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of the animation
      easing: 'ease-in-out', // Easing function for animation
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <AuthProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AuthProvider>
  );
}

export default MyApp;
