/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        school: {
          blue: "#0b3d91",
          navy: "#082653",
          gold: "#f2b705",
          sky: "#eaf3ff",
          ink: "#102033"
        }
      },
      fontFamily: {
        poppins: ["var(--font-poppins)", "Poppins", "sans-serif"]
      },
      boxShadow: {
        premium: "0 24px 70px rgba(11, 61, 145, 0.14)"
      }
    }
  },
  plugins: []
};
