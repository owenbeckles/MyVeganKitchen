module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {      
        colors: {
            'peach':'#F08E80',
            'avocado': '#607466',
            'dark-bg': '#0D1117',
            'light-bg': '#F9F5F1',
            "grey-text": '#8B949E'
      }
    },
    variants: {},
    plugins: [],
  }
}