/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flyonui/dist/js/*.js", // Include this line for FlyonUI JS components
  ],
  theme: {
    extend: {},
  },
  plugins: [
    // require('flyonui'),
    // require('flyonui/plugin'), // Include this line for FlyonUI JS components
    // require('@iconify/tailwind4'),
  ],
}