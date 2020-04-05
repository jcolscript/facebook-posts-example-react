import React, { Component } from "react";

import "./style.css";

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Julio Alcantara",
          avatar: "https://avatars0.githubusercontent.com/u/583231?s=460&v=4"
        },
        date: "04 Jun 2019",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean bibendum eu risus nec scelerisque.",
        comments: [
          {
            id: 1,
            author: {
              name: "José Carlos",
              avatar:
                "https://avatars2.githubusercontent.com/u/30646629?s=460&u=18b54427adec2bc4d9e7b06f088fc6881d4fdb9a&v=4"
            },
            content:
              "Pellentesque varius leo fringilla lacus convallis, quis ornare urna hendrerit."
          }
        ]
      },
      {
        id: 1,
        author: {
          name: "Julio Alcantara",
          avatar: "https://avatars0.githubusercontent.com/u/583231?s=460&v=4s"
        },
        date: "04 Jun 2019",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean bibendum eu risus nec scelerisque.",
        comments: [
          {
            id: 1,
            author: {
              name: "Microsoft",
              avatar:
                "https://avatars0.githubusercontent.com/u/6154722?s=200&v=4"
            },
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean bibendum eu risus nec scelerisque."
          },
          {
            id: 1,
            author: {
              name: "José Carlos",
              avatar:
                "https://avatars2.githubusercontent.com/u/30646629?s=460&u=18b54427adec2bc4d9e7b06f088fc6881d4fdb9a&v=4"
            },
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean bibendum eu risus nec scelerisque."
          }
        ]
      }
    ]
  };

  render() {
    return (
      <div className="feed-container">
        <div className="posts-container">Conteudo do post</div>
      </div>
    );
  }
}

export default PostList;
