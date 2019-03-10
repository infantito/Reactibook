import React, { Component } from 'react';

import Filter from './Filter';
import Post from './Post';
import NoMatch from '../common/NoMatch';

class AudiencePosts extends Component {
  state = { posts: [] }

  handleFilter = (e) => {
    const self = this;

    self.setState({ posts: [], });
  }

  render() {
    const self = this;
    const { posts } = self.state;

    return (
      <>
        <Filter onClick={self.handleFilter} />
        <br />
        {
          posts.length
          ?
          posts.map((post, index) => <Post key={index} />)
          :
          <NoMatch text="" />
        }
      </>
    )
  }
}

export default AudiencePosts;