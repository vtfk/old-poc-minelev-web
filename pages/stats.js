import React from 'react'
import { Breadcrumbs, Link, Typography } from '@material-ui/core'
import Skeleton from '@material-ui/lab/Skeleton'

import Page from '../components/Page'

const Stats = () => {
  return (
    <Page>
      <Breadcrumbs aria-label='breadcrumb'>
        <Link color='inherit' href='/'>
            Forsiden
        </Link>
        <Typography color='textPrimary'>Statistikk</Typography>
      </Breadcrumbs>

      <h1>Statistikk</h1>

      <div style={{ display: 'flex', justifyItems: 'center' }}>
        <Skeleton variant='circle' width={125} height={125} style={{ margin: 35 }} />
        <Skeleton variant='circle' width={125} height={125} style={{ margin: 35 }} />
        <Skeleton variant='circle' width={125} height={125} style={{ margin: 35 }} />
        <Skeleton variant='circle' width={125} height={125} style={{ margin: 35 }} />
      </div>

      <div style={{ marginTop: 50, width: '75%' }}>
        <Skeleton variant='text' width='30%' />
        <Skeleton variant='text' width='56%' />

        <Skeleton variant='text' width='70%' />
        <Skeleton variant='text' width='20%' />
      </div>

    </Page>
  )
}

export default Stats
