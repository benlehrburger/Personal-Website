import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { Menu, List, ListItem, ListItemText, ListItemIcon, Typography } from '@mui/material';
import '../App.css';
import { styled } from '@mui/system';

const LogoLink = styled(Link)`
  text-decoration: none;
`;

const MenuNavigation = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isHovered, setHovered] = useState(false);


  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleIconHover = () => {
    setHovered(!isHovered);
  };

  const routes = [
    { path: '/', label: 'Home', icon: '🏠' },
    { path: '/personal', label: 'Personal', icon: '🗝️' },
    { path: '/professional', label: 'Professional', icon: '👔' },
    { path: '/academic', label: 'Academic', icon: '🎓' },
  ];

  return (
    <div style={{ position: 'relative', marginLeft: "15px" }}>
      <MenuIcon
        onClick={handleMenuOpen}
        onMouseEnter={handleIconHover}
        onMouseLeave={handleIconHover}
        style={{ cursor: 'pointer', color: isHovered || Boolean(anchorEl) ? 'lightgrey' : 'black' }}
      />

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <List>
          {routes.map((route) => (
            <ListItem
              button
              component={Link}
              to={route.path}
              key={route.path}
              onClick={handleMenuClose}
            >
              <ListItemIcon>
                <span role="img" aria-label={route.label}>
                  {route.icon}
                </span>
              </ListItemIcon>
              <ListItemText primary={<Typography style={{ fontFamily: 'Source Code Pro' }}>{route.label}</Typography>} />
            </ListItem>
          ))}
        </List>
      </Menu>
    </div>
  );
};

export default MenuNavigation;