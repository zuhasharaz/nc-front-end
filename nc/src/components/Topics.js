import React, { Component } from "react";
import * as api from "../api";
import { Link } from "react-router-dom";
import { Card, Col, CardTitle } from "react-materialize";
class Topic extends Component {
  state = {
    articles: [],
    topicError: false
  };

  componentDidMount = async () => {
    let topic = this.props.match.params.topic_slug;
    this.fetchArticles(topic);
  };

  componentDidUpdate = async prevProps => {
    let topic = this.props.match.params.topic_slug;
    if (this.props !== prevProps) {
      this.fetchArticles(topic);
    }
  };

  fetchArticles = async () => {
    let articles;
    let topic = this.props.match.params.topic_slug;
    articles = await api.getArticlesByTopic(topic);

    this.setState({ articles })
  };

  render() {
    const { articles, _id } = this.state;

    return (
      <div>
        {articles.map(article => {
          const { _id, comments } = article;
          return (
            <div>
              <Card>
                <Link to={`/articles/${article._id}`} key={article._id}>
                  <p> Topic : {article.belongs_to} </p>
                  <p>{article.title}</p>
                  <Link to={`/articles/${article._id}/comments`}>
                    <button className="btn btn-info">
                      Comments : {comments}
                    </button>
                  </Link>
                </Link>
              </Card>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Topic;
