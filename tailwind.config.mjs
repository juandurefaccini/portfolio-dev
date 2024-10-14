/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        night: "#0A090C",
        "green-blue": "#306BAC",
        "tropical-indigo": "#918EF4",
        "anti-flash-white": "#F0EDEE",
        "azure-web": "#ECFAFD",
      },
    },
  },
  plugins: [],
};
