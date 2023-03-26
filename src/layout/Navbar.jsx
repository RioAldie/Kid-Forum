import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Link, NavLink } from 'react-router-dom';
import Signin from '../pages/Signin';
import { loginCtx } from '../context/LoginContext';
import Signoutbutton from '../components/Signoutbutton';
import NavItem from '../components/NavItem';

const pages = ['Home', 'Lapor', 'Kontak'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const { isLogin } = React.useContext(loginCtx);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="sticky"
      sx={{ bgcolor: '#FF0032', width: '100%' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'flex', md: 'none' },
            }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit">
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
                border: 'solid 1px #000',
              }}>
              <Link to={`/`}>
                <MenuItem
                  onClick={handleCloseNavMenu}
                  sx={{ textTransform: 'none' }}>
                  <Typography
                    textAlign="center"
                    sx={{
                      fontSize: '16px',
                      fontWeight: '600',
                      textTransform: 'none',
                      color: '#000',
                    }}>
                    home
                  </Typography>
                </MenuItem>
              </Link>
              <Link to={`/report`}>
                <MenuItem
                  onClick={handleCloseNavMenu}
                  sx={{ textTransform: 'none' }}>
                  <Typography
                    textAlign="center"
                    sx={{
                      fontSize: '16px',
                      fontWeight: '600',
                      textTransform: 'none',
                      color: '#000',
                    }}>
                    lapor
                  </Typography>
                </MenuItem>
              </Link>
              <Link to={`/profile`}>
                <MenuItem
                  onClick={handleCloseNavMenu}
                  sx={{ textTransform: 'none' }}>
                  <Typography
                    textAlign="center"
                    sx={{
                      fontSize: '16px',
                      fontWeight: '600',
                      textTransform: 'none',
                      color: '#000',
                    }}>
                    riwayat
                  </Typography>
                </MenuItem>
              </Link>
            </Menu>
          </Box>
          <Box
            sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>
            <Link to="/">
              <img
                src="/images/aduin-logo.png"
                width={67}
                height={25}
                alt="logo"
              />
            </Link>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'center',
              gap: '50px',
            }}>
            <NavItem name={'Home'} target={'/'} />
            <NavItem name={'Lapor'} target={'/report'} />
            <NavItem name={'Riwayat'} target={'/profile'} />
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            {isLogin ? <Signoutbutton /> : <Signin />}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
