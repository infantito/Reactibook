import React, { Component } from 'react';
import Button from 'antd/es/button';
import Card from 'antd/es/card';
import Form from 'antd/es/form';
import FormItem from 'antd/es/form/FormItem';
import Select from 'antd/es/select';

import TextArea from './TextArea';
// import logo from '../../assets/logo.svg';

class Composer extends Component {
  state = { content: '', audience: 'public' };

  handleSubmit = (e) => {
    e.preventDefault();
  }

  handleChange = (e) => {
    e.preventDefault();

    const self = this;
    const { id, value = '' } = e.target;

    self.setState({ [id]: value.trim(), });
  }

  handleAudience = (value) => this.setState({ audience: value, });

  renderControls = (audience) => (
    [
      <Select id="audience" defaultValue={audience} onChange={this.handleAudience}>
        <Select.Option value="friends">Friends</Select.Option>
        <Select.Option value="public">Public</Select.Option>
      </Select>,
      <Button
        type="primary"
        htmlType="submit"
      >
        Post
      </Button>
    ]
  );

  render() {
    const self = this;
    const { user, title } = self.props;

    return (
      <Form layout="vertical" onSubmit={self.handleSubmit}>
        <FormItem label="Create Post">
          <Card
            size="small"
            title={title}
            actions={self.renderControls(self.state.audience)}
          >
            <TextArea
              id="content"
              name="composer"
              placeholder={`What's on your mind, ${user}?`}
              onChange={self.handleChange}
              className="ant-input"
              data-placeholder={ `What's on your mind, ${this.props.user}?`}
              contentEditable
              suppressContentEditableWarning
            >
              {self.state.content}
            </TextArea>
          </Card>
        </FormItem>
      </Form>
    );
  }
}

export default Composer;