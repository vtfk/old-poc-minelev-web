import React from 'react'
import NextHead from 'next/head'
import { string } from 'prop-types'

import config from '../config'
import theme from '../components/theme'

const Head = props => (
  <NextHead>
    <meta charSet='UTF-8' />
    <title>{props.title || config.APP_NAME}</title>

    <meta name='description' content={props.description || config.APP_DESC} />
    <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width' />

    <meta name='theme-color' content={theme.palette.primary.main || ''} />

    <meta property='og:url' content={props.url || config.APP_URL} />
    <meta property='og:site_name' content={config.APP_NAME} />
    <meta property='og:title' content={props.title || config.APP_NAME} />
    <meta property='og:description' content={props.description || config.APP_DESC} />

    <meta name='twitter:site' content={props.url || config.APP_URL} />
    <meta name='twitter:card' content='summary_large_image' />
    <meta name='twitter:image' content={props.ogImage} />

    <meta property='og:image' content={props.ogImage} />
    <meta property='og:image:width' content='1200' />
    <meta property='og:image:height' content='630' />

    <link rel='icon' href='/favicon.ico' />

    <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Nunito+Sans:400,600,700|Nunito:400,600,700&display=swap' />
  </NextHead>
)

Head.propTypes = {
  title: string,
  description: string,
  url: string,
  ogImage: string
}

export default Head
