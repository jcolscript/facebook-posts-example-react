import React, { Component } from "react";

import Comment from "../Comment";

class Post extends Component {
  render() {
    return (
      <div className="post">
        <div className="post-header">
          <img className="avatar" src={this.props.author.avatar} />
          <div className="details">
            <span>{this.props.author.name}</span>
            <span>{this.props.date}</span>
          </div>
        </div>
        <div className="post-content">{this.props.content}</div>
        {this.props.comments && <div className="divider"></div>}
        {this.props.comments &&
          this.props.comments.map(comment => (
            <Comment key={comment.id} comment={comment} />
          ))}
      </div>
    );
  }
}

export default Post;
