/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js,svelte,ts}'
  ],
  theme: {
    extend: {
      fontFamily: {
        tagesschrift: ["Tagesschrift", "system-ui", "sans-serif"],
        poppins: ["Poppins", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}
