import React from 'react'
import {
  Paper, Breadcrumbs, Link, Typography, Table,
  TableBody, TableCell, TableContainer, TableHead, TableRow
} from '@material-ui/core'

import { Alert, AlertTitle } from '@material-ui/lab'

import Head from '../components/head'
import Nav from '../components/nav'
import Footer from '../components/footer'
import Container from '../components/container'

function createData (name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein }
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9)
]

const Home = () => {
  return (
    <div>
      <Head />
      <Nav />

      <Container maxWidth='xl'>
        <Breadcrumbs aria-label='breadcrumb'>
          <Link color='inherit' href='/'>
            Forsiden
          </Link>
          <Link color='inherit' href='/'>
            Elev Elevsen
          </Link>
          <Typography color='textPrimary'>Nytt varsel</Typography>
        </Breadcrumbs>

        <h1>Nytt varselbrev i atferd</h1>

        <div style={{ maxWidth: '790px', marginTop: '20px', marginBottom: '40px' }}>
          <Alert severity='info' onClose={() => {}}>
            <AlertTitle>Hei på deg!</AlertTitle>
            Dette er et eksempel på hvordan nytt brukergrensesnitt kan se ut i fylkeskommunens nye drakt...
          </Alert>
        </div>

        <Paper>
          <TableContainer component={Paper}>
            <Table aria-label='simple table'>
              <TableHead>
                <TableRow>
                  <TableCell>Dessert (100g serving)</TableCell>
                  <TableCell align='right'>Calories</TableCell>
                  <TableCell align='right'>Fat&nbsp;(g)</TableCell>
                  <TableCell align='right'>Carbs&nbsp;(g)</TableCell>
                  <TableCell align='right'>Protein&nbsp;(g)</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map(row => (
                  <TableRow key={row.name}>
                    <TableCell component='th' scope='row'>
                      {row.name}
                    </TableCell>
                    <TableCell align='right'>{row.calories}</TableCell>
                    <TableCell align='right'>{row.fat}</TableCell>
                    <TableCell align='right'>{row.carbs}</TableCell>
                    <TableCell align='right'>{row.protein}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Container>

      <Footer />

    </div>
  )
}

export default Home
