import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Carrito from '@mui/icons-material/ShoppingCartOutlined';
import Lista from '@mui/icons-material/ListAltOutlined';
import Inicio from '@mui/icons-material/HomeOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import '../index.css';

const Menu = () => {
  const theme = createTheme({
    typography: {
      fontFamily: [' "Ysabeau SC"', 'sans-serif'].join(','),
    },
  });
  return (
    <ThemeProvider theme={theme}>
    <AppBar position="static" className="navBarra">
      <Toolbar>
        <Typography variant="h5" className="title">
         Supermercado
        </Typography>
        <Button component={Link} to="/" color="inherit">
          <Inicio className="iconButton" />
        </Button>
        <Button component={Link} to="/header" color="inherit">
          <Lista className='iconButton'/>
        </Button>
        <Button component={Link} to="/carrito"  color="inherit">
          <Carrito className='iconButton'/>
        </Button>
      </Toolbar>
    </AppBar>
    </ThemeProvider>
  );
};

export default Menu;