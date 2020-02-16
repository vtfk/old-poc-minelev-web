import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Link } from '@material-ui/core'

import Container from '../components/container'

const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    paddingTop: '60px',
    paddingBottom: '40px',
    paddingLeft: '60px',
    paddingRight: '60px',
    position: 'fixed',
    bottom: '0px',
    width: '100%'
  },
  logo: {
    height: '60px',
    width: 'auto'
  },
  links: {
    flexGrow: 2,
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingRight: '30px'
  },
  link: {
    color: 'inherit',
    padding: '15px',
    fontSize: theme.typography.body1.fontSize
  }
}))

const Footer = () => {
  const classes = useStyles()

  return (
    <footer className={classes.footer}>
      <Container>
        <Grid container spacing={2}>
          <Grid item>
            <img src='./img/VT-Logo-02-Horisontal-HVIT.svg' alt='Vestfold og Telemark fylkeskommune' className={classes.logo} />
          </Grid>
          <Grid item className={classes.links}>
            <Link href='https://vtfk.no/personvern/personvernerklaring/' rel='noopener' target='_blank' className={classes.link}>Personvern og informasjonskapsler</Link>
          </Grid>
        </Grid>
      </Container>

    </footer>
  )
}

export default Footer
