import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from 'antd/es/button';
import Card from 'antd/es/card';
import Form from 'antd/es/form';
import FormItem from 'antd/es/form/FormItem';
import Icon from 'antd/es/icon';
import Select from 'antd/es/select';
import Upload from 'antd/es/upload';
import Message from 'antd/es/message';

import TextArea from './TextArea';
import { createPost } from '../../store/actions/postsActions';
import { cloudinary } from '../../utils/constants/Database';

class Composer extends Component {
  constructor(props) {
    super(props);

    this.state = { audience: 'public', };
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
      return null;
    }

    composer.textContent = '';
    props.createPost({ ...state, content, });
  }

  removeImages = (parent, images) =>
    images.forEach((img) => parent.removeChild(img))

  handleChange = (e) => {
    const self = this;
    const composer = self.composer.current;
    const images = composer.querySelectorAll('img');

    if (images.length > self.keepping) {
      const pictures = [...images].slice(0, images.length - self.keepping);
      self.removeImages(composer, pictures);
    }
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

    composer.innerHTML += img.outerHTML;
    composer.focus();

    Message.success('Well done!');
  }

  handleUpload = (file, fileList) => {
    const self = this;
    const { mimes, maxFileSize } = self;
    const { size, type } = file;

    if (mimes.includes(type)) {
      if (size > maxFileSize) {
        Message.error('Image must smaller than 1MB!');
      } else {
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

    return (
      <Form layout="vertical" onSubmit={self.handleSubmit}>
        <FormItem label="Create Post">
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
                    <Icon type="upload" /> Click to Upload
                  </Button>
                </Upload>,
                <Button
                  type="primary"
                  htmlType="submit"
                  onClick={self.handleSubmit}
                >
                  Post
                </Button>,
                <Select id="audience" defaultValue={self.state.audience} onChange={this.handleAudience}>
                  <Select.Option value="friends">Friends</Select.Option>
                  <Select.Option value="public">Public</Select.Option>
                </Select>,
              ]
            }
          >
            <TextArea
              id="content"
              name="composer"
              placeholder={`What's on your mind, ${profile.firstName}?`}
              onInput={self.handleChange}
              className="ant-input"
              data-placeholder={ `What's on your mind, ${this.props.user}?`}
              contentEditable
              suppressContentEditableWarning
              ref={self.composer}
            />
          </Card>
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