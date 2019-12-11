import { Card, CardBody, CardTitle } from 'reactstrap';
import React, { Component } from 'react';

export default class PostList extends Component {
  constructor(props) {
    super (props);
    this.showPosts = this.showPosts.bind(this);
  }

  showPosts() {
    const { posts, postsLoading } = this.props;

    if (!postsLoading && posts.length > 0) {
      return posts.map(post => {
        return (
          <Card key={post._id} body outline className="post-card">
            <CardTitle>{post.title}</CardTitle>
            <CardBody>{post.content}</CardBody>
          </Card>
        );
      });      
    } else {
      return (
        <div>
          <h3>No posts available 😑</h3>
          <p>Create a new Post in the form.</p>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="post-container">
        {this.showPosts()}
      </div>
    );
  }
}