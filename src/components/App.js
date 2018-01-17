import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Navbar from "./Navbar";
import HomePage from "./HomePage";
import TopicPage from "./TopicPage";

const { REACT_APP_API_URL: API_URL } = process.env;

class App extends Component {
  state = {
    loading: true,
    topics: []
  };
  fetchTopics = () => {
    return fetch(`${API_URL}/topics`).then(res => res.json());
  };
  componentDidMount() {
    this.fetchTopics().then(body => {
      this.setState({ topics: body.topics, loading: false });
    });
  }
  render() {
    const { loading, topics } = this.state;
    if (loading) return "🤔🤔🤔";
    return (
      <BrowserRouter>
        <div>
          <h1>NC News</h1>
          <Navbar topics={topics} />
          <Route exact path="/" component={HomePage} />
          <Route path="/topics/:topic" component={TopicPage} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
