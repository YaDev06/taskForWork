/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{react,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "360px",
        // => @media (min-width: 640px) { ... }

        md: "720px",
        // => @media (min-width: 768px) { ... }

        lg: "1000px",
        // => @media (min-width: 1024px) { ... }
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
      },
    },
  },
  plugins: [],
};
