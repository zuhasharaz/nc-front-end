import React, { Component } from "react";
import * as api from "../api";
import { Link } from "react-router-dom";
import "./nav.css";
import { Card, Col, CardTitle } from "react-materialize";
class Users extends React.Component {
  state = {
    users: []
  };

  componentDidMount() {
    api.getAllUsers().then(users => {
      this.setState({
        users
      });
    });
  }
  render() {
    const { users } = this.state;

    return (
      <div>
        <h1 class="users"> Users </h1>
        {users.map(user => {
          return (

            <div
              class="uk-child-width-1-3@m"
              class="pics"
              uk-grid
              uk-scrollspy="cls: uk-animation-fade; target: > div > .uk-card; delay: 500; repeat: true"
            >
              <div>
                <Card>
                <div class="uk-card uk-card-default uk-card-body">
                  <h3 class="uk-card-title">👤{user.name}</h3>
                  <p> Username: {user.username}</p>
                  <img src={user.avatar_url} />
                </div>
                  </Card>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Users;
