/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
  ],
  presets : [
    require("nativewind/preset")
  ],
  theme: {
    extend: {
      fontFamily: {
        'FS_Sinclair': ['FS_SINCLAIR', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

