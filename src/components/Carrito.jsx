import { useSelector/*, useDispatch*/ } from "react-redux";
import Grid from '@mui/material/Grid'; // Grid version 1
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Menu from "./Menu";
import '../index.css'

export function Carrito() {
  const carrito = useSelector((state) => state.producto.productos.filter((producto) => producto.status));

  const theme = createTheme({
    typography: {
      fontFamily: [' "Ysabeau SC"', 'sans-serif'].join(','),
    },
  });
  const calcularTotal = () => {
    return carrito.reduce((total, producto) => total + (+producto.precio), 0);
  };

  return (
    <ThemeProvider theme={theme}>
    <Menu />

    <Grid container spacing={4} direction="column" alignItems="center">
    <Grid item>
    <h2>Carrito de compras:</h2>
          <Box className="tableBox"
          >

             <TableContainer component={Paper} sx={{ maxHeight: 600 }}>
            <Table>
              <TableHead>
                <TableRow className="TablaRow">
                  <TableCell>Id</TableCell>
                  <TableCell>Nombre</TableCell>
                  <TableCell>Precio</TableCell>
                  <TableCell>Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {carrito.map((producto) => (
                  <TableRow key={producto.id}>
                    <TableCell>{producto.id}</TableCell>
                    <TableCell>{producto.nombre}</TableCell>
                    <TableCell>{producto.precio}</TableCell>
                    <TableCell>{producto.status ? "Comprado" : "No comprado"}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          </Box>
        </Grid>
        <Grid item>
          {/* Mostrar la suma total debajo de la tabla */}
          <h3>Total: {calcularTotal()} </h3>
        </Grid>
        </Grid>


    </ThemeProvider>
  );
}
