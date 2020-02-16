import React from 'react'
import NextApp from 'next/app'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { ThemeProvider as MaterialThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

import theme from '../components/theme'

export default class App extends NextApp {
  componentDidMount () {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles && jssStyles.parentNode) { jssStyles.parentNode.removeChild(jssStyles) }
  }

  render () {
    const { Component, pageProps } = this.props

    return (
      <StyledThemeProvider theme={theme}>
        <MaterialThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} />
        </MaterialThemeProvider>
      </StyledThemeProvider>
    )
  }
}
