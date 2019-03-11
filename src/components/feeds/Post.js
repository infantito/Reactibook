import React, { Component } from 'react';
import moment from 'moment';
import Card from 'antd/es/card';
import Icon from 'antd/es/icon';
import Skeleton from 'antd/es/skeleton';

import TextArea from './TextArea';

class Post extends Component {
  constructor(props) {
    super(props);

    this.state = {
      current: props.content,
      persist: props.content,
      disabled: true,
      loading: true,
    };
    this.composer = React.createRef();
  }

  componentDidMount() {
    this.setState({ loading: false, })
  }

  handleEdit = (e) => {
    console.log(e);
  }

  markup = (html) => ({ __html: html });

  render() {
    const self = this;
    const { props } = self;
    const { post  } = props;
    const name = post.owner;
    const date = moment(post.createdAt.toDate()).calendar();
    const title = `${name} - ${date}`;

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
            name="composer"
            className="ant-input"
            contentEditable
            suppressContentEditableWarning
            ref={self.composer}
            dangerouslySetInnerHTML={self.markup(post.content)}
            readonly={self.state.disabled}
          />
        </Skeleton>
      </Card>
    );
  }
}

export default Post;