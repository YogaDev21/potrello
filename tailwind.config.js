/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "potrello-gray-900": "#0E0E10",
        "potrello-gray-800": "#1C1C1E",
        "potrello-gray-700": "#262626",
        "potrello-gray-600": "#313131",
        "potrello-gray-500": "#3A3A3C",

        "potrello-blue-100": "#00BFFF",
        "potrello-blue-200": "#009FFF",
        "potrello-blue-300": "#00BFFF",
        "potrello-blue-400": "#007FFF",
        "potrello-blue-500": "#006FFF",
        "potrello-blue-600": "#005FFF",
        "potrello-blue-700": "#004FFF",
        "potrello-blue-800": "#003FFF",
        "potrello-blue-900": "#002FFF",
        "potrello-blue-1000": "#001FFF",

        "potrello-green-100": "#00B300",
        "potrello-green-200": "#00CC66",
        "potrello-red-100": "#FF0000",
        "potrello-red-200": "#E60000",
        "potrello-yellow-100": "#FFCC00",

        "potrello-white-100": "#FFFFFF",
        "potrello-white-200": "#F9F9F9",
        "potrello-white-300": "#F2F2F2",
        "potrello-light-blue-100": "#E5F9FF",
      }
    },
  },
  plugins: [],
};
