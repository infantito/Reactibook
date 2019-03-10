import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Row from 'antd/es/row';
import Col from 'antd/es/col';

import UserForm from '../components/auth/SignUpForm';
import { feedPath } from '../routes/paths';

const SignUp = (props) => {
  const { auth } = props;

  if (auth.uid) {
    return <Redirect to={feedPath} />;
  }

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

const mapStateToProps = ({ firebase, firestore }) => ({
  auth: firebase.auth,
});

export default connect(mapStateToProps)(SignUp);