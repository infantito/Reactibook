import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components'
// import Breadcrumb from 'antd/es/breadcrumb';
import Menu from 'antd/es/menu';
import MenuItem from 'antd/es/menu/MenuItem';

import Logo from './Logo';
import { signOut } from '../../store/actions/authActions';
import { signInPath, feedPath, homePath, signUpPath } from '../../routes/paths';

const NavBarBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavBar = (props) => {
  const paths = props.auth.uid ? [
    { name: 'Feed', path: feedPath },
    { name: 'Sign Out', path: homePath, onClick: props.signOut }
  ] : [
    { name: 'Sign In', path: signInPath },
    { name: 'Sign Up', path: signUpPath }
  ];

  return (
    <NavBarBox>
      <Logo image={props.logo} />
      <Menu mode="horizontal" theme="dark">
        {
          paths.map(({ name, path, onClick }, key) => (
            <MenuItem key={key} onClick={onClick}>
              <span>{name}</span>
              <Link to={path} />
            </MenuItem>
          ))
        }
      </Menu>
    </NavBarBox>
  );
}

const mapStateToProps = ({ firebase }) => ({ auth: firebase.auth, });

const mapDispatchToProps = (dispatch) =>
  ({ signOut: () => dispatch(signOut()) });

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);