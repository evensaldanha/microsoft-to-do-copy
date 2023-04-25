import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import WidgetsIcon from '@mui/icons-material/Widgets';
import './header.css';
import { Button } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import CampaignIcon from '@mui/icons-material/Campaign';


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
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
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';

  return (
    <div className="cabecalho">
      <Box sx={{ flexGrow: 1 }}
      >
        <Toolbar style={{ minHeight: "48px" }}>
          <div className='icone-menu'>

            <WidgetsIcon style={{ color: "white" }}
            />
            <Typography
            style={{marginLeft:"30px"}}
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: 'none', sm: 'flex', color: "white", fontFamily: "SegoeUI-SemiBold-final,Segoe UI Semibold,SegoeUI-Regular-final,Segoe UI,Segoe,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,Tahoma,Helvetica,Arial,sans-serif", fontSize: "16px", fontWeight: "600" } }}
            >
              To Do
            </Typography>
          </div>
            <Search
              className='search'
              style={{marginLeft: "auto", marginRight: "auto"}}
            >
              <SearchIconWrapper
              >
                <SearchIcon
                  className='icone'
                  style={{ color: "blue" }} />
              </SearchIconWrapper>
              <StyledInputBase
                style={{ backgroundColor: "#fff", height: "30px", padding: "10px", borderRadius: "5px", width: "25rem" }}
                placeholder="pesquisar…"
                inputProps={{ 'aria-label': 'pesquisar' }}
              />
            </Search>
            < SettingsIcon style={{color:"white", marginRight:"30px"}}/>
            <QuestionMarkIcon style={{color:"white",marginRight:"30px"}}/>
            <CampaignIcon style={{color:"white"}}/>
        </Toolbar>
        {renderMenu}
        
      </Box>
    </div>

  )
}
