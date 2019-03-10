import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Row from 'antd/es/row';
import Col from 'antd/es/col';

import UserForm from '../components/auth/SignInForm';
import { signUpPath } from '../routes/paths';

const SignIn = (props) => {
  const handleSubmit = (childProps) => {
    console.log(childProps);
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

export default connect()(SignIn);