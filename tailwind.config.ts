import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/styles/**/*.css',
    './src/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
        'nunito': ['Nunito', 'sans-serif'],
        'garamond': ['EB Garamond', 'serif'],
      },
      colors: {
        'blue-sky': '#0EA9E7',
        'button-white': '#ffffff',
        'light-blue': '#B5E2F0',
        'blue-link': '#1E3A8A',
        'instagram-gradient': 'linear-gradient(45deg, #f3a5f5, #f7c0cb)',
        'whatsapp': '#25D366',
        'twitter': '#1DA1F2',
        'facebook': '#1877F2',
        'email': '#D14836',
      },
      backgroundImage: {
        'gradient-light-blue': 'linear-gradient(to right, #B5E2F0, #0EA9E7)',
        'blue-gradient': 'linear-gradient(to right, #B5E2F0, #0EA9E7)',
        'gradient-custom': 'linear-gradient(to right, #B5E2F0, #F8D7DA)',
      },
      width: {
        '1536': '1536px',
        '1366': '1366px',
        '1280': '1280px',
        '1024': '1024px',
        '768': '768px',
        '640': '640px',
        '475': '475px',
      },
      padding: {
        'container': '50px',
        'container-sm': '20px',
      },
      zIndex: {
        '1': '1',
        '2': '2',
      },
      screens: {
        'lg': '1280px',
        'md': '1024px',
        'custom': '1300px',
      },
    },
  },
  plugins: [],
};

export default config;
