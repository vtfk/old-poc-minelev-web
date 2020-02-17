import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { string, object } from 'prop-types'

import Layout from './Layout'
import Navbar from './navbar'
import Footer from './footer'
import Container from './styles/Container'

const useStyles = makeStyles(theme => ({
  container: {
    gridArea: 'content',
    paddingBottom: '100px',
    margin: 'auto',
    height: '100%'
  }
}))

const Page = (props) => {
  const classes = useStyles()

  return (
    <Layout title={props.title} description={props.description}>
      <Navbar user={props.user} />
      <Container maxWidth='xl' className={classes.container}>
        {props.children}
      </Container>
      <Footer />
    </Layout>
  )
}

Page.propTypes = {
  title: string,
  description: string,
  user: object
}

export default Page
