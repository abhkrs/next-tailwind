/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'white': '#ffffff', // Set white as a custom color
        'primary': '#ff6029', // Set primary color as #ff6029
      },
      backgroundColor: {
        'body': 'var(--color-white)', // Set the body background color to white
      },
    },
  },
  plugins: [],
};
