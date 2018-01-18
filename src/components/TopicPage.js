import React from "react";

import { fetchArticles } from "../api";
import ArticleList from "./ArticleList";

class TopicPage extends React.Component {
  state = {
    loading: true,
    articles: []
  }
  componentDidMount () {
    const {topic} = this.props.match.params;
    this.fetchArticlesByTopic(topic);
  }
  componentWillReceiveProps(newProps) {
    const oldTopic = this.props.match.params.topic
    const newTopic = newProps.match.params.topic

    if (oldTopic !== newTopic) {
      this.fetchArticlesByTopic(newTopic)
    }
  }
  fetchArticlesByTopic (topic) {
    this.setState({loading: true})
    fetchArticles(topic).then(body => {
      this.setState({
        articles: body.articles,
        loading: false
      })
    })
  }
  render() {
    const { topic } = this.props.match.params;
    const {articles, loading} = this.state;
    return (
      <div>
        <h2>Articles on {topic}</h2>
        {
          loading ? 
            '🤔🤔🤔' : 
            <ArticleList articles={articles} />
        }
      </div>
    );
  }
}

export default TopicPage;
