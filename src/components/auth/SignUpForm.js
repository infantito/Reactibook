import React, { Component } from 'react';
import { connect } from 'react-redux';
import Form from 'antd/es/form';
import FormItem from 'antd/es/form/FormItem';
import Icon from 'antd/es/icon';
import Input from 'antd/es/input';
import Button from 'antd/es/button';
import Typography from 'antd/es/typography';
import Title from 'antd/es/typography/Title';

import { signUp } from '../../states/actions/authActions';

class SignInForm extends Component {
  state = { email: '', password: '', firstName: '', lastName: '', };

  handleSubmit = (e) => {
    e.preventDefault();

    const self = this;
    const { props, state } = self;

    props.signUp(state);
  };

  handleChange = (e) => {
    const self = this;
    const { id, value } = e.target;

    self.setState({ ...self.state, [id]: value })
  }

  render() {
    const self = this;
    const { title, button, } = self.props;

    return (
      <>
        <Typography>
          <Title>{title}</Title>
        </Typography>
        <Form layout="vertical" onSubmit={self.handleSubmit}>
          <FormItem label="Email">
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              id="email"
              placeholder="Email"
              onChange={self.handleChange}
            />
          </FormItem>
          <FormItem label="Password">
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              id="password"
              type="password"
              placeholder="Password"
              onChange={self.handleChange}
            />
          </FormItem>
          <FormItem label="First Name">
            <Input
              prefix={<Icon type="solution" style={{ color: 'rgba(0,0,0,.25)' }} />}
              id="firstName"
              type="text"
              placeholder="First Name"
              onChange={self.handleChange}
            />
          </FormItem>
          <FormItem label="Last Name">
            <Input
              prefix={<Icon type="solution" style={{ color: 'rgba(0,0,0,.25)' }} />}
              id="lastName"
              type="text"
              placeholder="Last Name"
              onChange={self.handleChange}
            />
          </FormItem>
          <FormItem>
            <Button
              type="primary"
              htmlType="submit"
            >
              {button}
            </Button>
          </FormItem>
        </Form>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) =>
  ({ signUp: (user) => dispatch(signUp(user)), });

export default connect(null, mapDispatchToProps)(SignInForm);