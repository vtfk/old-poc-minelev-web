import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#005260',
      contrastText: '#fff'
    },
    secondary: {
      main: '#fff',
      contrastText: '#000'
    },
    background: {
      default: '#EFEFEF'
    },
    text: {
      main: '#000',
      light: '#E3E3E3'
    },

    // State colors
    error: {
      main: '#E40017'
    },
    warning: {
      main: '#FFCD00'
    },
    info: {
      main: '#005260'
    },
    success: {
      main: '#90BC7F'
    },

    // Secondary colors
    korn: {
      light: '#F1EFD6',
      normal: '#E6E3BB',
      dark: '#CFC98B',
      contrastText: '#000'
    },
    dugg: {
      light: '#D6EADF',
      main: '#BEDACA',
      dark: '#8DB9A0',
      contrastText: '#000'
    }
  },
  typography: {
    fontFamily: '\'Nunito Sans\', sans-serif'
  },
  overrides: {
    MuiTouchRipple: {
      child: {
        backgroundColor: '#CFC98B'
      },
      childPulsate: true
    }
  }
})

export default theme
