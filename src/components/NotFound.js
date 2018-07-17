import React, { Component } from "react";
import { Link } from "react-router-dom";

class NotFound extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.history.push("/");
    }, 5000);
  }
  render() {
    return (
      <div>
        <h1>Page Not Found</h1>
        <p>Sorry nothing here!</p>
     </div>
    )
  }
}
export default NotFound;
