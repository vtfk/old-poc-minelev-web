import React from 'react'
import Head from 'next/head'
import { string } from 'prop-types'

import config from '../config'
import theme from './styles/theme'

const Layout = (props) => (
  <div>
    <Head>
      <meta charSet='UTF-8' />
      <title>{props.title || config.APP.NAME}</title>

      <meta name='description' content={props.description || config.APP.DESC} />
      <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width' />

      <meta name='theme-color' content={theme.palette.primary.main || ''} />

      <meta property='og:url' content={props.url || config.APP.URL} />
      <meta property='og:site_name' content={config.APP.NAME} />
      <meta property='og:title' content={props.title || config.APP.NAME} />
      <meta property='og:description' content={props.description || config.APP.DESC} />

      <meta name='twitter:site' content={props.url || config.APP.URL} />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:image' content={props.ogImage} />

      <meta property='og:image' content={props.ogImage} />
      <meta property='og:image:width' content='1200' />
      <meta property='og:image:height' content='630' />

      <link rel='icon' href='/favicon.ico' />

      <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Nunito+Sans:400,600,700|Nunito:400,600,700&display=swap' />
    </Head>
    {props.children}
  </div>
)

Layout.propTypes = {
  title: string,
  description: string,
  url: string,
  ogImage: string
}

export default Layout
