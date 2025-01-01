const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      backgroundImage: {
        // 'home-image-1': "url('assets/images/Home-Image-1.png')",
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    flowbite.plugin(),
  ],
}

