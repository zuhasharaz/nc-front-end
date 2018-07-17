import React from "react";
import { Button, Row, Input } from "reactstrap";
import * as api from "../api";
import "./nav.css";
class AddComment extends React.Component {
  state = {
    newComment: ""
    // created_by: "5b32518de8e81b0e677d5f8f"
  };
  render() {
    return <div>
        <h1 class="share"> Share your thoughts </h1>
        <div>
          <input type="text" placeholder="Write your comment..." onChange={this.handleChange} value={this.state.newComment} />
        </div>
        <Button onClick={() => this.props.addComment(this.props.articleId, this.state.newComment)} waves="light">
          Add Comment💭
        </Button>
      </div>;
  }

  handleChange = event => {
    this.setState({
      newComment: event.target.value
    });
  };
}

export default AddComment;
