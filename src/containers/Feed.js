import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { firestoreConnect } from 'react-redux-firebase';
import Divider from 'antd/es/divider';
import Row from 'antd/es/row';
import Col from 'antd/es/col';

import Composer from '../components/feeds/Composer';
import AudiencePosts from '../components/feeds/AudiencePosts';
import { signInPath } from '../routes/paths';

class Feed extends Component {
  constructor(props) {
    super(props);

    this.state = { audience: 'all', }
    this.defaultProfile = { firstName: 'Anonymous', lastName: 'JS' };
  }

  render() {
    const self = this;
    const { props } = self;
    const { posts, auth, profile } = props;

    if (!auth.uid) {
      return <Redirect to={signInPath} />;
    }

    return (
      <Row type="flex" justify="center">
        <Col span={12}>
          <Composer profile={profile || self.defaultProfile} />
          <Divider>Posts</Divider>
          {
            posts
            &&
            <AudiencePosts
              posts={posts}
              auth={auth}
              profile={profile}
            />
          }
        </Col>
      </Row>
    );
  }
};

const mapStateToProps = ({ firebase, firestore }) => {
  return {
    posts: firestore.ordered.posts,
    auth: firebase.auth,
    profile: firebase.profile,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'posts', orderBy: ['createdAt', 'desc'] },
  ]),
)(Feed);