import React, { useState } from 'react';
import { Drawer, InputBase, AppBar, Box, Toolbar, Typography, Button, IconButton, Tooltip, Avatar, styled, alpha, List, ListItem, ListItemText } from '@mui/material';
import { Menu as MenuIcon, ShoppingCartOutlined as ShoppingCartOutlinedIcon, SearchOutlined as SearchOutlinedIcon, LoginOutlined as LoginOutlinedIcon } from '@mui/icons-material';
import brandFullHorizontal from '../../assets/images/Negar_1740564017759.png'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.05),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.black, 0.15),
  },
  direction: 'rtl',
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#90A4AE'
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  fontFamily: 'gandom',
  fontSize: 12,
  color: 'inherit',
  direction: 'rtl',
  width: '200px',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingRight: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));


const WhiteButton = styled(Button)(() => ({
  backgroundColor: '#ffffff70',
  color: 'black',
  '&:hover': {
    backgroundColor: '#ffffff90',
  },
}));


function NavBar() {

  const navigate = useNavigate()

  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const list = () => (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
      <List>
        <ListItem component={WhiteButton} endIcon={<ShoppingCartOutlinedIcon />} onClick={() => navigate("/onlineshop-nini/Shoppingbasket")}>
          <Typography fontFamily={'gandom'} fontSize={14}>سبد خرید</Typography>
        </ListItem>
        <ListItem component={WhiteButton} endIcon={<LoginOutlinedIcon/> } onClick={() => navigate('/onlineshop-nini/profile')}>
          <Typography fontFamily={'gandom'} fontSize={14}>{logeduser ? 'پروفایل' : 'ثبت نام  |  ورود'}</Typography>
        </ListItem>
      </List>
    </Box>
  )

  const logeduser = useSelector((state) => state.auth.logeduser);

  return (
    <Box sx={{ flexGrow: 1, borderBottom: '2px solid black', backdropFilter: 'blur(40px)', bgcolor: '#ffffff90', position: 'sticky', top: 0, zIndex: 1000 }}>
      <AppBar position="static" color='white' elevation={0}>
        <Toolbar>
          <Box sx={{ display: 'flex' }}>
            {/* نمایش در اندازه‌های بزرگتر */}
            <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="shopping Basket"
                sx={{ mr: 2 }}
                onClick={() => navigate("/onlineshop-nini/Shoppingbasket")}
              >
                <ShoppingCartOutlinedIcon />
              </IconButton>
              <WhiteButton onClick={() => navigate('/onlineshop-nini/profile')} size="small" endIcon={<LoginOutlinedIcon />}>
                <Typography fontFamily={'gandom'} fontSize={14}>
                  {logeduser ? 'پروفایل' : 'ثبت نام  |  ورود'}
                </Typography>
              </WhiteButton>
            </Box>
            {/* نمایش در اندازه‌های کوچکتر */}
            <Box sx={{ display: { xs: 'flex', sm: 'none' } }}>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={toggleDrawer(true)}
              >
                <MenuIcon />
              </IconButton>
              <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
                {list()}
              </Drawer>
            </Box>
          </Box>

          <Box sx={{ display: 'flex', flexGrow: 1, justifyContent: 'right', alignItems: 'center' }}>
            <Search >
              <SearchIconWrapper>
                <SearchOutlinedIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="جستجو ..."
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>

            <img src={brandFullHorizontal} alt="Logo" style={{ maxWidth: '100px', margin: '0 0 0 1rem' }} />

          </Box >

        </Toolbar>
      </AppBar>
    </Box>
  );
}


export default NavBar