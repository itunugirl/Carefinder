// tailwind.config.js
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/styles/**/*.css',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        satoshi: ['Satoshi', 'sans-serif'],
      },
      colors: {
        'blue-sky': '#0EA9E7',
        'button-white': '#ffffff',
        'light-blue': '#B5E2F0',
        'blue-link': '#1E3A8A', // Color for link and underline
      },
      backgroundImage: {
        'gradient-light-blue': 'linear-gradient(to right, #B5E2F0, #0EA9E7)',
        'blue-gradient': 'linear-gradient(to right, #B5E2F0, #0EA9E7)', // Added Blue_gradient
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
    },
  },
  plugins: [],
};
