import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { AppBar, Toolbar, Typography, Divider, Button } from '@material-ui/core'

import config from '../config'
import Container from '../components/container'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  appBar: {
    paddingTop: '35px',
    paddingBottom: '30px',
    marginBottom: '30px'
  },
  logo: {
    width: '100%',
    maxWidth: '290px'
  },
  divider: {
    marginLeft: '40px',
    marginRight: '20px'
  },
  title: {
    flexGrow: 1
  }
}))

const ButtonAppBar = props => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar position='static' color='secondary' className={classes.appBar}>
        <Container maxWidth='md'>
          <Toolbar>
            <img src='./img/VT-Logo-02-Horisontal-RBG.svg' alt='Logo' className={classes.logo} />
            <Divider orientation='vertical' flexItem className={classes.divider} />
            <Typography variant='h6' className={classes.title}>
              {props.title || config.APP_NAME}
            </Typography>
            <Button color='inherit'>Login</Button>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  )
}

export default ButtonAppBar
