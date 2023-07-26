import { Button } from '@mui/material'
import Menu from '../components/Menu'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid'; 
import { Link } from 'react-router-dom';
import '../index.css'

export default function Home()
{
    const theme = createTheme({
        typography: {
          fontFamily: [' "Ysabeau SC"', 'sans-serif'].join(','),
        },
      });

    return (

        <ThemeProvider theme={theme}>
        <Menu/>
        <Grid container spacing={4} direction="column" alignItems="center">
        <Grid  item>

        <h1>Bienvenido</h1>
        </Grid>
        <Grid item >
        <Button component={Link} to="/header"  variant="contained" className='botonInicio'>
          Lista de compras
        </Button>
          <Button component={Link} to="/carrito" variant="contained" className='botonInicio'>
          Carrito
        </Button>
        </Grid>
        </Grid>
        </ThemeProvider>
    )
}