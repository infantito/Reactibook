import React, { Component } from 'react';
import Form from 'antd/es/form';
import FormItem from 'antd/es/form/FormItem';
import Icon from 'antd/es/icon';
import Input from 'antd/es/input';
import Button from 'antd/es/button';
import Typography from 'antd/es/typography';
import Title from 'antd/es/typography/Title';

class SignInForm extends Component {
  state = { email: '', password: '', };

  handleSubmit = (e) => {
    e.preventDefault();

    const self = this;
    const { props, state } = self;

    props.onSubmit(state);
  };

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
              placeholder="Email"
            />
          </FormItem>
          <FormItem label="Password">
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
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

export default SignInForm;