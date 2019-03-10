import React, { Component } from 'react';
import Divider from 'antd/es/divider';
import Row from 'antd/es/row';
import Col from 'antd/es/col';

import Composer from '../components/feeds/Composer';
import AudiencePosts from '../components/feeds/AudiencePosts';

class Feed extends Component {
  state = { audience: 'all', }

  render() {
    const { props } = this;
    return (
      <Row type="flex" justify="center">
        <Col span={12}>
          <Composer />
          <Divider>Posts</Divider>
          <AudiencePosts posts={props.posts} />
        </Col>
      </Row>
    );
  }
};

export default Feed;