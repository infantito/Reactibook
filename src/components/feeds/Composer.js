import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from 'antd/es/button';
import Card from 'antd/es/card';
import Form from 'antd/es/form';
import FormItem from 'antd/es/form/FormItem';
import Icon from 'antd/es/icon';
import Select from 'antd/es/select';
import Spin from 'antd/es/spin';
import Upload from 'antd/es/upload';
import Message from 'antd/es/message';

import TextArea from './TextArea';
import { createPost } from '../../store/actions/postsActions';
import { cloudinary } from '../../utils/constants/Database';

class Composer extends Component {
  constructor(props) {
    super(props);

    this.state = { audience: 'public', disabled: false, };
    this.composer = React.createRef();
    this.keepping = 1;
    this.mimes = ['image/jpeg', 'image/jpg', 'image/png'];
    this.maxFileSize = 1000000;
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const self = this;
    const { props, state } = self;
    const composer = self.composer.current;
    const content = composer.innerHTML.trim();

    if (!content) {
      composer.focus();
      Message.warning('Your post is empty!');
      return null;
    }

    const post = { ...state };
    delete post.disabled;

    composer.textContent = '';
    props.createPost({ ...post, content, });
  }

  removeImages = (parent, images) =>
    images.forEach((img) => parent.removeChild(img))

  handleImages = (composer) => {
    const self = this;
    const images = composer.querySelectorAll('img');

    if (images.length > self.keepping) {
      const pictures = [...images].slice(0, images.length - self.keepping);
      self.removeImages(composer, pictures);
    }
  }

  handleChange = (e) => {
    const self = this;
    const composer = self.composer.current;

    self.handleImages(composer)
  }

  uploadImage = async (file) => {
    const data = new FormData();
    data.append('file', file);
    /* config for cloudinary */
    data.append('upload_preset', 'sickfits');

    const response =
      await fetch(cloudinary, {
        method: 'POST',
        body: data,
      });
    const cloud = await response.json();

    return cloud.secure_url;
  }

  resolveHTML = (url) => {
    const self = this;
    const composer = self.composer.current;
    const img = document.createElement('img');
    img.alt = 'reactibook';
    img.src = url;


    self.setState({ disabled: false }, () => {
      composer.innerHTML += img.outerHTML;
      self.handleImages(composer);
      composer.focus();
      Message.success('Well done!');
    });
  }

  handleUpload = (file, fileList) => {
    const self = this;
    const { mimes, maxFileSize } = self;
    const { size, type } = file;

    if (mimes.includes(type)) {
      if (size > maxFileSize) {
        Message.error('Image must smaller than 1MB!');
      } else {
        self.setState(({ disabled: true }));
        self.uploadImage(file).then(self.resolveHTML);
      }
    } else {
      Message.error('You can only upload JPG or PNG file!');
    }

    return false;
  }

  handleAudience = (value) => this.setState({ audience: value, });

  render() {
    const self = this;
    const { profile, title } = self.props;
    const { audience, disabled } = self.state;

    return (
      <Form layout="vertical" onSubmit={self.handleSubmit}>
        <FormItem label="Create Post">
          <Spin spinning={disabled} tip="...Reactibooking">
            <Card
              size="small"
              title={title}
              actions={
                [
                  <Upload
                    fileList={[]}
                    accept=".jpeg,.jpg,.png"
                    beforeUpload={self.handleUpload}
                  >
                    <Button>
                      <Icon type="upload" /> Upload Image
                    </Button>
                  </Upload>,
                  <Button
                    type="primary"
                    htmlType="submit"
                    onClick={self.handleSubmit}
                  >
                    Post
                  </Button>,
                  <Select id="audience" defaultValue={audience} onChange={self.handleAudience}>
                    <Select.Option value="friends">Friends</Select.Option>
                    <Select.Option value="public">Public</Select.Option>
                  </Select>,
                ]
              }
            >
              <TextArea
                id="content"
                name="composer"
                onInput={self.handleChange}
                className="ant-input"
                data-placeholder={ `What's on your mind, ${profile.firstName}?`}
                contentEditable
                suppressContentEditableWarning
                ref={self.composer}
                readonly={disabled}
              />
            </Card>
          </Spin>
        </FormItem>
      </Form>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createPost: (post) => dispatch(createPost(post))
  }
}

export default connect(null, mapDispatchToProps)(Composer);