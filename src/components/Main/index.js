import React, { Component } from "react";

import Header from "../Header";
import PostList from "../PostList";

import "./style.css";

class Main extends Component {
  render() {
    return (
      <div className="main">
        <Header />
        <PostList />
      </div>
    );
  }
}

export default Main;
