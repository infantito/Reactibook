import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import Row from 'antd/es/row';
import Col from 'antd/es/col';

import UserForm from '../components/auth/SignInForm';
import { signUpPath, feedPath } from '../routes/paths';

const SignIn = (props) => {
  const { auth } = props;

  if (auth.uid) {
    return <Redirect to={feedPath} />;
  }

  return (
    <>
      <Row type="flex" justify="center">
        <Col span={12}>
          <UserForm title="Sign In" button="Sign In"/>
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

const mapStateToProps = ({ firebase, firestore }) => ({
  auth: firebase.auth,
});

export default connect(mapStateToProps)(SignIn);