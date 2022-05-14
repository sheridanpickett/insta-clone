module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      maxWidth: {
        'main': '975px',
      },
      colors: {
        'white': '#ffffff',
        'app-gray-100': '#fafafa',
        'app-gray-300': '#dddddd',
        'app-gray-400': '#a8a8a8',
        'app-gray-500': '#8e8e8e',
        'app-gray-700': '#262626',
        'skyblue': '#8bbae7',
        'cornflowerblue': '#53a1e5',
        'paleturquiose': '#c0dffd',
        'facebookblue': '#00376B',
        'red-error': '#ed4956'
      },
      screens: {
        'x-sm': '450px',
        'm-lg': '875px'
      }
    },
  },
  plugins: [],
}