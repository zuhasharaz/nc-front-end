import React, { Component } from "react";
import logo from "./logo.svg";
import { Link } from "react-router-dom";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Navigation from "./components/nav";
import Users from "./components/User";
import Topics from "./components/Topics";
import Article from "./components/Article";
import Comments from "./components/Comments";
import Articles from "./components/Articles";
import NotFound from "./components/NotFound"
import Topic from "./components/Topic";
import Home from "./components/Home"

class App extends Component {
  state = {
    loggedInUser: "5b32518de8e81b0e677d5f8f"
  };
  render() {
    return (
      <div className="App">
        <Navigation />

        {/* <Comments /> */}
       <Topic/>

        <Switch>
          <Route
            path="/articles/:articleId/comments"
            render={props => {
              return <Comments {...props} user={this.state.loggedInUser} />;
            }}
          />
          <Route
            exact
            path="/users"
            render={props => {
              return <Users {...props} user={this.state.loggedInUser} />;
            }}
          />
          <Route
            exact
            path="/home"
            render={props => {
              return <Home {...props} user={this.state.loggedInUser} />;
            }}
          />
          <Route
            exact
            path="/topics"
            render={props => {
              return <Topics {...props} user={this.state.loggedInUser} />;
            }}
          />
          <Route
            exact
            path="/topics/:topic_slug/articles"
            render={props => {
              return <Topics {...props} user={this.state.loggedInUser} />;
            }}
          />

          <Route
            path="/articles/:articleId"
            render={props => (
              <Article {...props} users={this.state.loggedInUser} />
            )}
          />

          <Route
           exact path="/"
            render={props => (
              <Articles {...props} user={this.state.loggedInUser} />
            )}
          />
          <Route path="/404" component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
