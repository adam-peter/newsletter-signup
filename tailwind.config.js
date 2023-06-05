/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        "tomato": "hsl(4, 100%, 67%)",
        "darkSlate" : "hsl(234, 29%, 20%)",
        "charcoal": "hsl(235, 18%, 26%)",
        "grey": "hsl(231, 7%, 60%)",
      }
    },
  },
  plugins: [],
};
