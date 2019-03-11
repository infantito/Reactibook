import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import Card from 'antd/es/card';
import Icon from 'antd/es/icon';
import Skeleton from 'antd/es/skeleton';

import TextArea from './TextArea';
import { updatePost, removePost } from '../../store/actions/postsActions';

class Post extends Component {
  constructor(props) {
    super(props);

    this.state = {
      current: props.content,
      persist: props.content,
      disabled: true,
      loading: true,
      mainIcon: 'edit',
    };
    this.composer = React.createRef();
  }

  componentDidMount() {
    this.setState({ loading: false, })
  }

  handleUpdate = (e) => {
    const self = this;
    const composer = self.composer.current;

    self.setState(
      { mainIcon: 'save', disabled: false, },
      () => {
        composer.focus();
      },
    );
  }

  handleSave = (e) => {
    const self = this;
    const { post } = self.props;
    const { innerHTML } = self.composer.current;

    self.setState({ mainIcon: 'edit', disabled: true, });
    self.props.update({ ...post, content: innerHTML, });
  }

  handleRemove = (e) => {
    const self = this;
    const { post } = self.props;

    self.setState({ mainIcon: 'edit', disabled: true, })
    self.props.remove(post);
  }

  markup = (html) => ({ __html: html });

  renderHandleControls = () => {
    const self = this;

    const controls = [
      <Icon type="delete" onClick={self.handleRemove} />
    ];

    controls.unshift(
      self.state.disabled
      ?
      <Icon type="edit" onClick={self.handleUpdate} />
      :
      <Icon type="save" onClick={self.handleSave} />
    );

    return controls;
  }

  render() {
    const self = this;
    const { props } = self;
    const { post  } = props;
    const name = post.owner;
    const date = moment(post.createdAt.toDate()).calendar();
    const title = `${name} - ${date}`;
    const { disabled } = self.state;

    return (
      <Card
        size="small"
        title={title}
        actions={self.renderHandleControls()}
      >
        <Skeleton loading={self.state.loading} avatar active>
          <TextArea
            name="composer"
            className="ant-input"
            contentEditable
            suppressContentEditableWarning
            ref={self.composer}
            dangerouslySetInnerHTML={self.markup(post.content)}
            readonly={disabled}
          />
        </Skeleton>
      </Card>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  update: (post) => dispatch(updatePost(post)),
  remove: (post) => dispatch(removePost(post)),
});

export default connect(null, mapDispatchToProps)(Post);