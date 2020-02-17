import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  container: {
    paddingRight: '15px',
    paddingLeft: '15px',
    marginRight: 'auto',
    marginLeft: 'auto',

    maxWidth: '1440px',
    width: '100%',

    // Full width for (xs, extra-small: 0px or larger)
    [theme.breakpoints.up('768px')]: { // small: 600px or larger
      width: '750px'
    },
    [theme.breakpoints.up('992px')]: { // medium: 960px or larger
      width: '970px'
    },
    [theme.breakpoints.up('1200px')]: { // large: 1280px or larger
      width: '1170px'
    }
  }
}))

const Container = ({ children }) => {
  const classes = useStyles()

  return (
    <div className={classes.container}>
      {children}
    </div>
  )
}

export default Container
