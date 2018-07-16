import React from "react";
import * as api from "../api";

import { Link, Redirect } from "react-router-dom"
import { Card, Col, CardTitle, Button } from "react-materialize";
class Article extends React.Component {
  state = {
    article: {},
    invalidArticle: false
  };

  componentDidMount() {
    this.getArticle(this.props.match.params.articleId)
  }


  componentDidUpdate(prevProps) {
    if (
      this.props.match.params.articleId !== prevProps.match.params.articleId
    ) {
      this.getArticle(this.props.match.params.articleId);
    }
  }

  getArticle = id => {
    api.getArticleById(this.props.match.params.articleId).then(article => {
      const { articleData } = article;
      this.setState({ article: articleData });
    }).catch(() => this.setState({ articleError: true }))
  };

  render() {
    return (
      !this.state.articleError ?
    <div>
        
        <Card>
          <div class="w3-container w3-center w3-animate-top">
            <h1 className="title">
              You are reading
              <br />
              {this.state.article.title}
            </h1>
            <br />
          </div>
          <h1> Created by: {this.state.article.created_by}</h1>
          <h1> {this.state.article.body} </h1>
          <h1> Votes {this.state.article.votes} </h1>
          <Button onClick={() => this.voteArticleClick("up")}>👍🏽</Button>
          <Button onClick={() => this.voteArticleClick("down")}>👎🏽</Button>
          <h1> {this.state.article.belongs_to} </h1>
        </Card>
        </div>  : <Redirect to="/404"></Redirect>
    )


  }
  
  voteArticleClick = (vote) => {
    api.articleVote(this.state.article._id, vote)
      .then(({ votes }) => {
        this.setState({
          article: { ...this.state.article, votes }
        })
      })
  }
}

export default Article;
