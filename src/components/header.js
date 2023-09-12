import React, { useState } from 'react';
import logo from "../assets/logo.png";
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';
import MenuNavigation from './menu.js';
import ShareIcon from '@mui/icons-material/Share';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

const HeaderContainer = styled('header')`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  width: 90vw;
  max-width: 1000px;
  margin: 0 auto;
`;

const IconContainer = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LogoLink = styled(Link)`
  text-decoration: none;
  flex-grow: 1;
  text-align: center;
`;

const StyledIconButton = styled(IconButton)`
  padding: 0;
  &:hover {
    background-color: transparent;
  }
  &:focus {
    outline: none;
  }
`;

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [isHovered, setHovered] = useState(false);

  const handleShareIconClick = (event) => {
    setMenuOpen(!menuOpen);
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuOpen(false);
    setAnchorEl(null);
  };

  const handleIconHover = () => {
    setHovered(!isHovered);
  };

  return (
    <div>
      <HeaderContainer>
        <MenuNavigation />
        <LogoLink to="/">
          <img src={logo} alt="Logo" className="logo" />
        </LogoLink>
        <IconContainer>
          <StyledIconButton onClick={handleShareIconClick} onMouseEnter={handleIconHover} onMouseLeave={handleIconHover} disableRipple>
            <ShareIcon fontSize="medium" style={{ marginRight: '15px', color: isHovered || menuOpen ? 'lightgrey' : 'black' }} />
          </StyledIconButton>
          <Menu
            anchorEl={anchorEl}
            open={menuOpen}
            onClose={handleMenuClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            <MenuItem onClick={handleMenuClose}>
              <a href="https://www.linkedin.com/in/benlehrburger/" target="_blank">
                <LinkedInIcon fontSize="medium" style={{ color: 'black' }} />
              </a>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <a href="https://github.com/benlehrburger" target="_blank">
                <GitHubIcon fontSize="medium" style={{ color: 'black' }} />
              </a>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <a href="mailto:benlehrburger@gmail.com" target="_blank">
                <EmailIcon fontSize="medium" style={{ color: 'black' }} />
              </a>
            </MenuItem>
          </Menu>
        </IconContainer>
      </HeaderContainer>
    </div>
  );
}

export default Header;