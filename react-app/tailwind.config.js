module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {      
        colors: {
            'peach':'#F08E80',
            'avocado': '#607466'
      }
    },
    variants: {},
    plugins: [],
  }
}