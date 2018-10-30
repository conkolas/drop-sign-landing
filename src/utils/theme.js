const themes = {
  main: {
    color: {
      mainBackground: '#FFFFFF',
      mainForeground: '#481BFF',
      
      primary: '#4D20FF',
      secondary: '#12E8A8',
  
      lightText: '#FFFFFF',
      darkText: '#4F4F4F',
  
      menuActive: '#9EAEFF',
      signupBackground: '#D6DAFF',
    },

    header: {
      logoAlt: 'Drop and Sign',
      height: 90
    },
    footer: {
      height: 110
    },

    transition: {
      normal: '0.3s',
      quick: '0.1s',
      decelerate: 'cubic-bezier(0.0, 0.0, 0.2, 1)',
      accelerate: 'cubic-bezier(0.4, 0.0, 1, 1)',
    }
  }
}
export default themes;