import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import React, { Component } from 'react';

import { withAddPost } from '../providers';

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
  }

  submitForm(event) {
    event.preventDefault();

    this.props.addPost({
      title: event.target.title.value,
      content: event.target.content.value
    });
  }

  render() {
    return (
      <div className="post-form">
        <h2>Create new post</h2>
        <Form onSubmit={(event) => this.submitForm(event)}>
          <FormGroup>
            <Label for="postTitle">Post Title</Label>
            <Input type="text" name="title" id="postTitle" placeholder="Title"/>
          </FormGroup>
          <FormGroup>
            <Label for="postContent">Post Content</Label>
            <Input type="textarea" name="content" id="postContent" placeholder="Content"/>
          </FormGroup>
          <Button className="submit-button">Submit new post</Button>
        </Form>
      </div>
    );
  }
}

export default withAddPost(PostForm);
