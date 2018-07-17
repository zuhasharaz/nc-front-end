import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card, Col, CardTitle, Button } from "react-materialize";

class NotFound extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.history.push("/");
    }, 5000);
  }
  render() {
    return (
      <Card>
      
        <h1>Page Not Found</h1>
        <p>Sorry nothing here!</p>
        <h1> Taking you back to home page!! </h1>
     </Card>
    )
  }
}
export default NotFound;
