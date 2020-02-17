import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { AppBar, Toolbar, Typography, Divider } from '@material-ui/core'

import Container from '../styles/Container'
import NavButton from './NavButton'

import config from '../../config'

const useStyles = makeStyles(theme => ({
  appBar: {
    paddingTop: '35px',
    paddingBottom: '30px',
    marginBottom: '30px',
    fontFamily: 'Nunito, sans-serif',
    fontSize: '18px',
    fontWeight: 600
  },
  toolbar: {
    marginLeft: 0,
    paddingLeft: '5px'
  },
  logo: {
    width: '100%',
    maxWidth: '290px'
  },
  divider: {
    height: '45px',
    marginTop: '25px',
    marginLeft: '40px',
    marginRight: '20px'
  },
  title: {
    flexGrow: 1,
    marginTop: '25px',
    fontFamily: 'inherit'
  },
  buttonRow: {
    marginTop: '25px'
  }
}))

const ButtonAppBar = props => {
  const classes = useStyles()

  return (
    <AppBar position='static' color='secondary' className={classes.appBar}>
      <Container maxWidth='md'>
        <Toolbar className={classes.toolbar}>
          <img src='./img/VT-Logo-02-Horisontal-RBG.svg' alt={config.COMPANY.NAME} className={classes.logo} />
          <Divider orientation='vertical' flexItem className={classes.divider} />
          <Typography className={classes.title}>
            {props.title || config.APP.NAME}
          </Typography>

          <span className={classes.buttonRow}>
            <NavButton href='/' aria-label='Gå til forsiden' active>Forsiden</NavButton>
            <NavButton href='/log' aria-label='Gå til historikk-siden'>Historikk</NavButton>
            <NavButton href='/stats' aria-label='Gå til statistikk-sidene'>Statistikk</NavButton>
            <NavButton href='/' aria-label='Logg ut'>Logg ut</NavButton>
          </span>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default ButtonAppBar
