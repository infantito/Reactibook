import React, { Component } from 'react';

import Filter from './Filter';
import Post from './Post';

class AudiencePosts extends Component {
  state = { posts: [] }

  handleFilter = (e) => {
    const self = this;
    const { id } = e.target;

    self.setState({ posts: [], });
    console.log(id);
  }

  render() {
    const self = this;
    const { posts } = self.state;

    return (
      <>
        <Filter onClick={self.handleFilter} />
        {
          posts.map((post, index) => <Post key={index} />)
        }
      </>
    )
  }
}

export default AudiencePosts;