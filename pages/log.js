import React from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import { Breadcrumbs, Link, Typography, Grid, Paper } from '@material-ui/core'
import Skeleton from '@material-ui/lab/Skeleton'

import Head from '../components/head'
import Nav from '../components/nav'
import Footer from '../components/footer'
import Container from '../components/container'

const useStyles = makeStyles(theme => createStyles({
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    width: 333
  }
}))

const Log = () => {
  const classes = useStyles()

  return (
    <div>
      <Head />
      <Nav />

      <Container maxWidth='xl'>
        <Breadcrumbs aria-label='breadcrumb'>
          <Link color='inherit' href='/'>
            Forsiden
          </Link>
          <Typography color='textPrimary'>Historikk</Typography>
        </Breadcrumbs>

        <h1>Historikk</h1>

        <Grid container spacing={3}>
          {[...Array(9).keys()].map((item, index) => (
            <Grid item key={index}>
              <Paper className={classes.paper}>
                <Skeleton variant='text' width='40%' style={{ marginBottom: 6 }} />
                <Skeleton variant='circle' width={40} height={40} />

                <Skeleton height={10} width='80%' style={{ marginBottom: 6 }} />
                <Skeleton height={10} width='40%' />

                <Skeleton variant='text' style={{ marginTop: 15 }} />
                <Skeleton variant='text' width='30%' />
                <Skeleton variant='text' />
                <Skeleton variant='text' width='70%' />
              </Paper>
            </Grid>
          ))}
        </Grid>

        <div className={classes.root} />

      </Container>

      <Footer />

    </div>
  )
}

export default Log
