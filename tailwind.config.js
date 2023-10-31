import plugin from 'tailwindcss'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
		colors: {
			'nakano-hanada': '#436fb4',
			'hi-hanada': '#257bcc',
		},
		fontFamily: {
			"monofur": ['monofur', 'ui-sans-serif']
		}
	},
  },
  plugins: [
    plugin( ({ addBase }) => {
      addBase({
        '@font-face': {
            fontFamily: 'monofur',
            fontWeight: '300',
            src: 'url(./src/fonts/monof.woff2) format("woff2"), url(./src/fonts/monof.woff) format("woff")'
        }
      })
    }),
  ],
};

