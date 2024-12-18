import { tokens } from '@adaptavant/eds-brands/setmore-black';
import { createPreset } from '@adaptavant/eds-core/tailwind';
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}', // update this to provide the location of your templates
    './node_modules/@adaptavant/eds-core/dist/**/*.{js,ts,jsx,tsx}', // this is the location of the React components for Earth
  ],
  presets: [createPreset(tokens)], // using the Earth preset configures Tailwind to use our custom classes
  theme: {
    extend: {},
  },
  plugins: [],
};