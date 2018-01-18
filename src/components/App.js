import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Navbar from "./Navbar";
import HomePage from "./HomePage";
import TopicPage from "./TopicPage";

import { fetchTopics } from "../api";

class App extends Component {
  state = {
    loading: true,
    topics: [],
    error: null
  };
  componentDidMount() {
    fetchTopics()
      .then(body => {
        this.setState({ topics: body.topics, loading: false });
      })
      .catch(error => {
        this.setState({ error, loading: false });
      });
  }
  render() {
    const { loading, topics, error } = this.state;
    if (loading) return "🤔🤔🤔";
    if (!loading && error) return error;
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
