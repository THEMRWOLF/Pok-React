module.exports = {
  content: [
    './src/**/*.{js,jsx}'
  ],
  theme: {
    extend: {
      blur: {
        xs: '2px'
      },
      boxShadow: {
        center: '0 0 20px',
        vertical: '0 10px 20px'
      },
      colors: {
        bug: '#87ae28',
        dark: '#5a5964',
        dragon: '#0c69c8',
        electric: '#f2d94e',
        fairy: '#ee90e6',
        fighting: '#d3425f',
        fire: '#ea9a46',
        flying: '#a1bbec',
        ghost: '#5f6cbc',
        grass: '#62ba5c',
        ground: '#da7c4d',
        ice: '#75d0c1',
        normal: '#a0a2a0',
        poison: '#b763cf',
        psychic: '#fa8581',
        rock: '#c9bb8a',
        steel: '#5695a3',
        water: '#4e94d2',
        default: '#e5e7eb'
      },
      dropShadow: {
        centerDark: '0 0 30px #111827',
        centerLight: '0 0 30px #e5e7eb'
      }
    }
  },
  plugins: []
};
