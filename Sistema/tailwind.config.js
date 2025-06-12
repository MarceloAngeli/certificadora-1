/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js,svelte,ts}'
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "system-ui", "sans-serif"]
      },
      colors: {
        brand: {
          primary: '#b91102',
          primaryHover: '#e82210',
          heading: '#b91102',
          text: '#e82210',
          background: '#FFEBEC',
        }
      },
      typography: {
        DEFAULT: {
          css: {
            h1: {
              fontFamily: 'Poppins',
              fontWeight: '600',
            },
            h2: {
              fontFamily: 'Poppins',
              fontWeight: '600',
            },
            h3: {
              fontFamily: 'Poppins',
              fontWeight: '600',
            },
            h4: {
              fontFamily: 'Poppins',
            },
            h5: {
              fontFamily: 'Poppins',
            },
            h6: {
              fontFamily: 'Poppins',
            },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}
