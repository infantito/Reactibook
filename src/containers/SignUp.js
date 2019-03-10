import React from 'react';
import Row from 'antd/es/row';
import Col from 'antd/es/col';

import UserForm from '../components/auth/UserForm';

const SignUp = () => {
  const handleSubmit = (props) => {
    console.log(props);
  }

  return (
    <>
      <Row type="flex" justify="center">
        <Col span={12}>
          <UserForm title="Sign Up" button="Sign Up" onSubmit={handleSubmit} />
        </Col>
      </Row>
    </>
  );
};

export default SignUp;