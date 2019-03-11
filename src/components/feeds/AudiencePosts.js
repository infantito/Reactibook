import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase'
import { Redirect } from 'react-router-dom'
import { compose } from 'redux'

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
    const { posts, auth } = self.props;

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
          posts.map((post, index) => <Post key={index} />)
          :
          <NoMatch text="" />
        }
      </>
    )
  }
}

const mapStateToProps = ({ firebase, firestore }) => {
  return {
    posts: firestore.ordered.posts || [],
    auth: firebase.auth,
  };
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'posts', orderBy: ['createdAt', 'desc'] },
  ]),
)(AudiencePosts);