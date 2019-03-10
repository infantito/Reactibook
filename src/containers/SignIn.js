import React from 'react';
import { Link } from 'react-router-dom';
import Row from 'antd/es/row';
import Col from 'antd/es/col';

import UserForm from '../components/auth/UserForm';
import { signUpPath } from '../routes/paths';

const SignIn = () => {
  const handleSubmit = (props) => {
    console.log(props);
  };

  return (
    <>
      <Row type="flex" justify="center">
        <Col span={12}>
          <UserForm title="Sign In" button="Sign In" onSubmit={handleSubmit} />
        </Col>
      </Row>
      <Row type="flex" justify="center">
        <Col span={12}>
          <p>Or <Link to={signUpPath}>register now!</Link></p>
        </Col>
      </Row>
    </>
  );
};

export default SignIn;