import React from 'react';
import Row from 'antd/es/row';
import Col from 'antd/es/col';

import UserForm from '../components/auth/SignUpForm';


const SignUp = () => {
  return (
    <>
      <Row type="flex" justify="center">
        <Col span={12}>
          <UserForm title="Sign Up" button="Sign Up" />
        </Col>
      </Row>
    </>
  );
};


export default SignUp;