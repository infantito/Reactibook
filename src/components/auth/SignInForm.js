import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Form from 'antd/es/form';
import FormItem from 'antd/es/form/FormItem';
import Icon from 'antd/es/icon';
import Input from 'antd/es/input';
import Button from 'antd/es/button';
import Typography from 'antd/es/typography';
import Title from 'antd/es/typography/Title';

import ErrorMessage from '../../components/common/ErrorMessage';
import { signIn } from '../../store/actions/authActions';

class SignInForm extends Component {
  state = { email: '', password: '', };

  componentDidMount() {
    // To disabled submit button at the beginning.
    this.props.form.validateFields();
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const self = this;
    const { props, state } = self;

    props.signIn(state, props.history);
  };

  handleChange = (e) => {
    const self = this;
    const { name, value } = e.target;

    self.setState({ ...self.state, [name]: value })
  }

  hasErrors = (fieldsError) =>
    Object
      .keys(fieldsError)
      .some(field => fieldsError[field]);

  render() {
    const self = this;
    const { title, button, authError } = self.props;

    const { email, password, } = self.state;
    const {
      getFieldDecorator, getFieldsError, getFieldError, isFieldTouched,
    } = self.props.form;
    // Only show error after a field is touched.
    const emailError = isFieldTouched('email') && getFieldError('email');
    const passwordError = isFieldTouched('password') && getFieldError('password');

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
                  name="email"
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
                  name="password"
                  type="password"
                  placeholder="Password"
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
          <FormItem>
            <ErrorMessage error={authError} />
          </FormItem>
        </Form>
      </>
    );
  }
}

const mapStateToProps = (state) => ({ authError: state.auth.authError });

const mapDispatchToProps = (dispatch) =>
  ({ signIn: (user, history) => dispatch(signIn(user, history)), });

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Form.create({ name: 'signin' })(SignInForm))
);