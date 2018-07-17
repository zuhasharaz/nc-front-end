import React from "react";
import * as api from "../api";
import { Link } from "react-router-dom";
import "bulma/css/bulma.css";
import "./Articles.css";
import { Card, Col, CardTitle } from "react-materialize";
class Articles extends React.Component {
  state = {
    articles: []
  };

  componentDidMount() {
    api.getArticles().then(articles => {
      this.setState({
        articles
      });
    });
  }
  render() {
    const { articles } = this.state;

    return (
      <div>
        {articles.map(article => {
          const { _id, comments } = article;
          return (
            <Card>
              <Link to={`/articles/${article._id}`} key={article._id}>
                <p class="articletitle"> {article.title}📌</p>
                <p> Topic : {article.belongs_to} </p>
              </Link>
             
            </Card>
          );
        })}
      </div>
    )
    
  }
}

export default Articles;
