import React, { Component, Fragment } from 'react';
// import { connect } from 'react-redux';
// import { firestoreConnect } from 'react-redux-firebase';
import { Redirect } from 'react-router-dom';
// import { compose } from 'redux';

import Filter from './Filter';
import Post from './Post';
import NoMatch from '../common/NoMatch';

class AudiencePosts extends Component {
  state = { posts: this.props.posts, };

  shouldComponentUpdate(nextProps, nextState) {
    const self = this;
    const { state } = self;

    return (
      nextState.posts !== state.posts
    );
  }

  handleFilter = (e) => {
    const self = this;
    const { name } = e.target;
    const { posts } = self.props;

    const filtered = posts.filter(({ audience }) => audience === name);

    self.setState({ posts: filtered, });
  }

  render() {
    const self = this;
    const { auth } = self.props;
    const { posts } = self.state;

    if (!auth.uid) {
      return <Redirect to='/signin' />;
    }

    return (
      <>
        <Filter onClick={self.handleFilter} />
        <br />
        {
          posts.length
          ?
          posts.map((post, index) => (
            <Fragment key={index}>
              <Post post={post} />
              <br />
            </Fragment>
          ))
          :
          <NoMatch text="" />
        }
      </>
    )
  }
}


export default AudiencePosts;