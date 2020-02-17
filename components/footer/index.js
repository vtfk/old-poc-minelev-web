import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Link } from '@material-ui/core'

import Container from '../styles/Container'
import { COMPANY } from '../../config'

const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    boxShadow: '0px -2px 4px -1px rgba(0,0,0,0.2), 0px -4px 5px 0px rgba(0,0,0,0.14), 0px -1px 10px 0px rgba(0,0,0,0.12)',
    padding: '60px 60px 40px',
    marginTop: '60px',
    position: 'fixed',
    left: 0,
    bottom: 0,
    right: 0,
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
            <img src='./img/VT-Logo-02-Horisontal-HVIT.svg' alt={COMPANY.NAME} className={classes.logo} />
          </Grid>
          <Grid item className={classes.links}>
            <Link href={COMPANY.PRIVACY_URL} rel='noopener' target='_blank' className={classes.link}>Personvern og informasjonskapsler</Link>
          </Grid>
        </Grid>
      </Container>

    </footer>
  )
}

export default Footer
