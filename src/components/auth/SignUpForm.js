import React, { Component } from 'react';
import { connect } from 'react-redux';
import Form from 'antd/es/form';
import FormItem from 'antd/es/form/FormItem';
import Icon from 'antd/es/icon';
import Input from 'antd/es/input';
import Button from 'antd/es/button';
import Typography from 'antd/es/typography';
import Title from 'antd/es/typography/Title';

import { signUp } from '../../store/actions/authActions';

class SignUpForm extends Component {
  state = { email: '', password: '', firstName: '', lastName: '', };

  componentDidMount() {
    // To disabled submit button at the beginning.
    this.props.form.validateFields();
  }

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

  hasErrors = (fieldsError) =>
    Object
      .keys(fieldsError)
      .some(field => fieldsError[field]);


  render() {
    const self = this;
    const { title, button } = self.props;
    const { email, password, firstName, lastName } = self.state;
    const {
      getFieldDecorator, getFieldsError, getFieldError, isFieldTouched,
    } = self.props.form;
    // Only show error after a field is touched.
    const emailError = isFieldTouched('email') && getFieldError('email');
    const passwordError = isFieldTouched('password') && getFieldError('password');
    const firstNameError = isFieldTouched('firstName') && getFieldError('firstName');
    const lastNameError = isFieldTouched('lastName') && getFieldError('lastName');

    return (
      <>
        <Typography>
          <Title>{title}</Title>
        </Typography>
        <Form layout="vertical" onSubmit={self.handleSubmit}>
          <FormItem
            label="Email"
            validateStatus={emailError ? 'error' : ''}
            help={emailError || ''}
          >
            {
              getFieldDecorator('email', {
                initialValue: email,
                rules: [
                  { type: 'email', message: 'The input is not valid E-mail!', },
                  { required: true, message: 'Please input your email!' },
                ],
              })(
                <Input
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  id="email"
                  placeholder="Email"
                  onChange={self.handleChange}
                  autoComplete="false"
                />
              )
            }
          </FormItem>
          <FormItem
            label="Password"
            validateStatus={passwordError ? 'error' : ''}
            help={passwordError || ''}
          >
            {
              getFieldDecorator('password', {
                initialValue: password,
                rules: [{ required: true, message: 'Please input your password!' }],
                whitespace: false,
              })(
                <Input
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  id="password"
                  type="password"
                  placeholder="Password"
                  onChange={self.handleChange}
                  autoComplete="false"
                />
              )
            }
          </FormItem>
          <FormItem
            label="First Name"
            validateStatus={firstNameError ? 'error' : ''}
            help={firstNameError || ''}
          >
            {
              getFieldDecorator('firstName', {
                initialValue: firstName,
                rules: [
                  { required: true, message: 'Please input your first name!', },
                ],
                whitespace: false,
              })(
                <Input
                  prefix={<Icon type="solution" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  id="firstName"
                  type="text"
                  placeholder="First Name"
                  onChange={self.handleChange}
                  autoComplete="false"
                />
              )
            }
          </FormItem>
          <FormItem
            label="Last Name"
            validateStatus={lastNameError ? 'error' : ''}
            help={lastNameError || ''}
          >
            {
              getFieldDecorator('lastName', {
                initialValue: lastName,
                rules: [{ required: true, message: 'Please input your last name!' }],
                whitespace: false,
              })(
                <Input
                  prefix={<Icon type="solution" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  id="lastName"
                  type="text"
                  placeholder="Last Name"
                  onChange={self.handleChange}
                  autoComplete="false"
                />
              )
            }
          </FormItem>
          <FormItem>
            <Button
              type="primary"
              htmlType="submit"
              disabled={self.hasErrors(getFieldsError())}
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

export default connect(null, mapDispatchToProps)(Form.create({ name: 'signin' })(SignUpForm));