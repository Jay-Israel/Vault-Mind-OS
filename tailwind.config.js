/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        vault: {
          bg: "#050816",
          surface: "#08132A",
          panel: "#0C1832",
          blue: "#2563EB",
          electric: "#4F7FFF",
          purple: "#7C3AED",
          gold: "#D4AF37",
          text: "#F8FAFC"
        }
      },
      boxShadow: {
        glow: "0 30px 80px rgba(51, 101, 255, 0.16)",
        card: "0 18px 50px rgba(8, 19, 42, 0.28)"
      },
      backgroundImage: {
        "vault-radial": "radial-gradient(circle at top left, rgba(63, 132, 255, 0.22), transparent 30%), radial-gradient(circle at bottom right, rgba(124, 58, 237, 0.16), transparent 25%)"
      }
    }
  },
  plugins: []
};
