import React from "react";

import { fetchArticles } from "../api";

class HomePage extends React.Component {
  state = {
    loading: true,
    articles: []
  };
  componentDidMount() {
    fetchArticles().then(body => {
      this.setState({ articles: body.articles, loading: false });
    });
  }
  render() {
    return (
      <div>
        <h2>Latest Posts</h2>
      </div>
    );
  }
}

export default HomePage;
