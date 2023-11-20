import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { ListItemButton, ListItemIcon, ListItemText, Collapse } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import CreateIcon from '@mui/icons-material/Create';
import InputIcon from '@mui/icons-material/Input';
import Chart from '../Components/homepage/chart';
import Deposits from '../Components/homepage/Deposits';
import Orders from '../Components/homepage/Orders';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FindInPageIcon from '@mui/icons-material/FindInPage';
import DescriptionIcon from '@mui/icons-material/Description';
import MicrosoftIcon from '@mui/icons-material/Microsoft';
import MaterialCrud from '@/Components/items/MaterialCrud';
import Modal from '@mui/material/Modal';


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Hak Cipta © '}
      <Link color="inherit" href="https://mui.com/">
        Anjay
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'} 
    </Typography>
  );
}

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Homepage() {
  const [open, setOpen] = React.useState(true);
  const [isSubMenuOpen, setIsSubMenuOpen] = React.useState(false);
  const [selectedListItem, setSelectedListItem] = React.useState(null);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const toggleSubMenu = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
  };

  const handleListItemClick = (item) => {
    setSelectedListItem(item);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: '24px', // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: '36px',
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              Toko Besi
            </Typography>
            <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">

            {/* Dashboard  */}
            <ListItemButton onClick={() => handleListItemClick('dashboard')} >
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItemButton>

            

            {/* Data Master */}
            <ListItemButton onClick={toggleSubMenu}>
              <ListItemIcon>
                <DescriptionIcon />
              </ListItemIcon>
              <ListItemText primary="Data Master" />
              {isSubMenuOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </ListItemButton>
            {/* Submenu for Data Master */}
            <Collapse in={isSubMenuOpen} timeout="auto" unmountOnExit>
              <List
               component="div"
                disablePadding
                sx={{
                    backgroundColor :'#1111'
                  }}
              >
                <ListItemButton onClick={() => handleListItemClick('material')}>
                  <ListItemIcon>
                    <MicrosoftIcon />
                  </ListItemIcon>
                  <ListItemText primary="Material"/>
                </ListItemButton>
                
                <ListItemButton onClick={() => handleListItemClick('rawproduct')}>
                  <ListItemIcon>
                    <CreateIcon />
                  </ListItemIcon>
                  <ListItemText primary="Raw Product" />
                </ListItemButton>
                
                <ListItemButton onClick={() => handleListItemClick('goodsproduct')}>
                  <ListItemIcon>
                    <CreateIcon />
                  </ListItemIcon>
                  <ListItemText primary="Goods Product" />
                </ListItemButton>

                <ListItemButton onClick={() => handleListItemClick('supplier')}>
                  <ListItemIcon>
                    <CreateIcon />
                  </ListItemIcon>
                  <ListItemText primary="Supplier" />
                </ListItemButton>

                <ListItemButton onClick={() => handleListItemClick('customer')}>
                  <ListItemIcon>
                    <CreateIcon />
                  </ListItemIcon>
                  <ListItemText primary="Customer" />
                </ListItemButton>

                <ListItemButton onClick={() => handleListItemClick('warehouse')}>
                  <ListItemIcon>
                    <CreateIcon />
                  </ListItemIcon>
                  <ListItemText primary="warehouse" />
                </ListItemButton>
              </List>
            </Collapse>

                  {/* BAGIAN PURCHASE */}
            
            <ListItemButton>
              <ListItemIcon>
                <ShoppingCartIcon />
              </ListItemIcon>
              <ListItemText primary="Purchase" />
            </ListItemButton>


            <ListItemButton>
              <ListItemIcon>
                <BarChartIcon />
              </ListItemIcon>
              <ListItemText primary="Production" />
            </ListItemButton>

            <ListItemButton>
              <ListItemIcon>
                <BarChartIcon />
              </ListItemIcon>
              <ListItemText primary="Stock" />
            </ListItemButton>

            <ListItemButton>
              <ListItemIcon>
                <BarChartIcon />
              </ListItemIcon>
              <ListItemText primary="Sales" />
            </ListItemButton>

            <ListItemButton>
              <ListItemIcon>
                <BarChartIcon />
              </ListItemIcon>
              <ListItemText primary="Finance" />
            </ListItemButton>

            <ListItemButton>
              <ListItemIcon>
                <BarChartIcon />
              </ListItemIcon>
              <ListItemText primary="Report" />
            </ListItemButton>
          </List>
            
            

        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={5}>

{/* TAMPILAN SAAT DI KLIK DISINI */}
            
            {/* DASHBOARD */}

              {selectedListItem === 'dashboard' && (
                <Grid item xs={12} md={8} lg={9}>
                  <Paper
                    sx={{
                      p: 2,
                      display: 'flex',
                      flexDirection: 'column',
                      height: 240,
                    }}
                  >
                    <Chart />
                  </Paper>
                </Grid>
              )}

                {/* DATA MASTER */}
            {selectedListItem === 'material' && (
                <Grid item xs={12}>
                <MaterialCrud/>
                </Grid>
            )}
              
              
            {selectedListItem === 'rawproduct' && (
                <Grid item xs={12}>
                {/* Konten untuk tampilan 'Input' */}
                </Grid>
            )}
            {selectedListItem === 'goodsproduct' && (
                <Grid item xs={12}>
                <h1>HALO INI MENU 2</h1>
                </Grid>
            )} 


            {/* PURCHASE */}
              
              
                         
              {/* Tambahkan blok serupa untuk item daftar lainnya sesuai kebutuhan */}
            </Grid>
            <Copyright sx={{ pt: 4 }} />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
