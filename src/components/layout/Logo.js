import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'

import { homePath } from '../../routes/paths';

const Image = styled.img`
  width: 55px;
  height: 45px;
`;

const Logo = ({ image }) => (
  <div>
    <Link to={homePath}>
      <Image src={image} alt="Reactibook" />
    </Link>
  </div>
);

export default Logo;