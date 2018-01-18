import React from "react";

import { fetchArticles, voteArticle } from "../api";
import ArticleList from "./ArticleList";

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

  voteUpOrDownOnArticle = (articleId, vote) => {
    console.log(articleId, vote)
    return voteArticle(articleId, vote)
      .then(body => {
        const {article: newArticle} = body;
        const newArticles = this.state.articles.map(article => {
          if (article._id === newArticle._id) {
            return newArticle
          }
          return article;
        })
        this.setState({
          articles: newArticles
        })
      })
  }

  render() {
    const {articles, loading} = this.state;

    return (
      <div>
        <h2>Latest Posts</h2>
        {
          loading ? 
            '🤔🤔🤔' : 
            <ArticleList voteUpOrDownOnArticle={this.voteUpOrDownOnArticle} articles={articles} />
        }
      </div>
    );
  }
}

export default HomePage;
