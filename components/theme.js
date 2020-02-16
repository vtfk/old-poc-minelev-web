import { createMuiTheme } from '@material-ui/core/styles'

// Create a theme instance.
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
    error: {
      main: '#e21414'
    },
    background: {
      default: '#EFEFEF'
    },
    text: {
      primary: '#000'
    }
  }
})

export default theme
