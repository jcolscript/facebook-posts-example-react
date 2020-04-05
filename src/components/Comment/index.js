import React, { Component } from "react";

class Comment extends Component {
  render() {
    const { comment } = this.props;
    return (
      <div className="comment">
        <img className="avatar" src={comment.author.avatar} />
        <div className="content">
          <span>{comment.author.name}</span>
          <p>{comment.content}</p>
        </div>
      </div>
    );
  }
}

export default Comment;
