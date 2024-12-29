/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        'french-rose': {
        '50': '#fff1f4',
        '100': '#ffe4e9',
        '200': '#ffccd9',
        '300': '#fea3ba',
        '400': '#fd6f95',
        '500': '#f85485',
        '600': '#e41a60',
        '700': '#c10f52',
        '800': '#a1104a',
        '900': '#8a1145',
        '950': '#4d0421',
    },
    
      },
    },
  },
  plugins: [],
};
