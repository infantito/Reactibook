import React, { Component } from 'react';
import Card from 'antd/es/card';
import Icon from 'antd/es/icon';
import Skeleton from 'antd/es/skeleton';
import TextArea from 'antd/es/input/TextArea';

class Post extends Component {
  state = { current: '', persist: '', disabled: true, loading: true, }

  handleChange = (e) => {
    console.log(e);
  }

  handleEdit = (e) => {
    console.log(e);
  }

  render() {
    const self = this;
    const { props } = self;
    const { user, title } = props;

    return (
      <Card
        size="small"
        title={title}
        actions={
          [
            <Icon type="edit" />,
            <Icon type="delete" />
          ]
        }
      >
        <Skeleton loading={self.state.loading} avatar active>
          <TextArea
            id="composer"
            name="composer"
            placeholder={`What's on your mind, ${user}?`}
            value={self.state.current}
            onChange={self.handleChange}
            disabled={self.state.disabled}
          />
        </Skeleton>
      </Card>
    );
  }
}

export default Post;