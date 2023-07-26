import { useSelector } from "react-redux"
import { addProducto, changeStatus,DeleteProducto  } from "../redux/productoSlice";
import { useDispatch } from "react-redux";
import Grid from '@mui/material/Grid'; 
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Menu from './Menu'
import '../index.css'
import { createTheme, ThemeProvider } from '@mui/material/styles';


export function Header() {

  const theme = createTheme({
    typography: {
      fontFamily: [' "Ysabeau SC"', 'sans-serif'].join(','),
    },
  });

  const productos = useSelector((state) => state.producto.productos);
  const dispatch = useDispatch();

  function crear(event)
  {
    event.preventDefault();
    const datos=
    {
      nombre: event.target.nombre.value,
      precio: event.target.precio.value,
      status: false,
    };

    dispatch(addProducto(datos));
  }

  const CambiarEstado = (productId, status) => {
    dispatch(changeStatus({ id: productId, status: !status }));
  };

  const Eliminar=(productoId)=>{
    dispatch(DeleteProducto({productoId}))
  }
  

  return (
    <ThemeProvider theme={theme}>
        <Menu/>
         <Grid container spacing={4} direction="column" alignItems="center">
        <Grid item>
          <Box className="ContenedorForm">
            <form  className="Form" onSubmit={crear}>
              <p >Ingrese nombre del producto</p>
              <input id="nombre" required  type="text" />
              <p>Ingrese precio</p>
              <input id="precio" required  type="number" /> <br />
              <Button  variant="contained" type="submit">Crear Producto</Button>
            </form>
          </Box>
        </Grid>

        <Grid item>
          <Box className="tableBox">
             <TableContainer component={Paper} sx={{ maxHeight: 600 }}>
            <Table>
              <TableHead>
                <TableRow className="TablaRow">
                  <TableCell>Id</TableCell>
                  <TableCell>Nombre</TableCell>
                  <TableCell>Precio</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Comprado</TableCell>
                  <TableCell>Eliminar</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {productos.map((producto) => (
                  <TableRow key={producto.id}>
                    <TableCell>{producto.id}</TableCell>
                    <TableCell>{producto.nombre}</TableCell>
                    <TableCell>{producto.precio}</TableCell>
                    <TableCell>{producto.status ? "Comprado" : "No comprado"}</TableCell>
                    <TableCell>
                      <Checkbox
                        checked={producto.status}
                        onChange={() => CambiarEstado(producto.id, producto.status)}
                      />
                    </TableCell>
                    <TableCell>
                      <Button
                        onClick={() => Eliminar(producto.id)}
                        variant="contained"
                        sx={{backgroundColor:'#CC48E3'}}
                      >
                        Eliminar
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          </Box>
        </Grid>
      </Grid>
      
    </ThemeProvider>
  );
}

export default Header
