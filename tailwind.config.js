module.exports = {
  // https://youtrack.jetbrains.com/issue/WEB-50318
  mode: process.env.NODE_ENV && 'jit',
  prefix: 'tw-',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
