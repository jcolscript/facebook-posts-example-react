import React, { Component } from "react";

import Post from "../Post";

import "./style.css";

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Julio Alcantara",
          avatar: "https://i.pravatar.cc/150?img=10"
        },
        date: "04 Jun 2019",
        content:
          "Aenean vitae justo tellus. Nulla eleifend gravida purus sit amet commodo. Aenean nec eros risus. Donec posuere tincidunt lorem vitae maximus. Morbi fermentum erat ultrices lacus interdum, eget dictum lectus lobortis. ",
        comments: [
          {
            id: 1,
            author: {
              name: "José Carlos",
              avatar: "https://i.pravatar.cc/150?img=3"
            },
            content:
              "Pellentesque varius leo fringilla lacus convallis, quis ornare urna hendrerit."
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "Julio Alcantara",
          avatar: "https://i.pravatar.cc/150?img=10"
        },
        date: "04 Jun 2019",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean bibendum eu risus nec scelerisque.",
        comments: [
          {
            id: 1,
            author: {
              name: "Microsoft",
              avatar: "https://i.pravatar.cc/150?img=2"
            },
            content:
              "Aenean vitae justo tellus. Nulla eleifend gravida purus sit amet commodo. Aenean nec eros risus. Donec posuere tincidunt lorem vitae maximus. Morbi fermentum erat ultrices lacus interdum, eget dictum lectus lobortis."
          },
          {
            id: 2,
            author: {
              name: "José Carlos",
              avatar: "https://i.pravatar.cc/150?img=3"
            },
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean bibendum eu risus nec scelerisque."
          }
        ]
      },
      {
        id: 3,
        author: {
          name: "José Carlos",
          avatar: "https://i.pravatar.cc/150?img=3"
        },
        date: "04 Jun 2019",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean bibendum eu risus nec scelerisque.",
        comments: [
          {
            id: 1,
            author: {
              name: "Microsoft",
              avatar: "https://i.pravatar.cc/150?img=2"
            },
            content:
              "Aenean vitae justo tellus. Nulla eleifend gravida purus sit amet commodo. Aenean nec eros risus. Donec posuere tincidunt lorem vitae maximus. Morbi fermentum erat ultrices lacus interdum, eget dictum lectus lobortis."
          },
          {
            id: 2,
            author: {
              name: "Ricardo Gabriel",
              avatar: "https://i.pravatar.cc/150?img=25"
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
        <div className="posts-container">
          {this.state.posts.map(post => (
            <Post key={post.id} {...post} />
          ))}
        </div>
      </div>
    );
  }
}

export default PostList;
