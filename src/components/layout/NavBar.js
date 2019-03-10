import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'
// import Breadcrumb from 'antd/es/breadcrumb';
import Menu from 'antd/es/menu';
import MenuItem from 'antd/es/menu/MenuItem';

import Logo from './Logo';
import { feedPath, signInPath, signUpPath, signOutPath } from '../../routes/paths';
// import SignedOutLinks from './SignedOutLinks';

const NavBarBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavBar = ({ logo }) => {
  return (
    <NavBarBox>
      <Logo image={logo} />
      <Menu mode="horizontal" theme="dark">
        <MenuItem key="1">
          <span>Sign In</span>
          <Link to={signInPath} />
        </MenuItem>
        <MenuItem key="2">
          <span>Sign Up</span>
          <Link to={signUpPath} />
        </MenuItem>
        <MenuItem key="3">
          <span>Feed</span>
          <Link to={feedPath} />
        </MenuItem>
        <MenuItem key="4">
          <span>Sign Out</span>
          <Link to={signOutPath} />
        </MenuItem>
      </Menu>
    </NavBarBox>
  );
}

export default NavBar;