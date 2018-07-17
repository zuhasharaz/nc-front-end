import React, { Component } from "react";
import * as api from "../api";
import { Card, Col, CardTitle } from "react-materialize";
import { Link } from "react-router-dom";
import { Button, Row, Input } from "reactstrap";
import AddComment from "./AddComment";
class Comments extends Component {
  state = {
    comments: []
  };

  componentDidMount = async () => {
    let id = this.props.match.params.articleId;
    this.getCommentById(id)
  
  };

  componentDidUpdate = async prevProps => {
    if (this.props !== prevProps) {
      let id = this.props.match.params.articleId;
      this.getCommentById(id);
    }
  };
  getCommentById = async id => {
    let comments;
    comments = await api.getCommentsByArticleId(id);
    this.setState({ comments });
  };

  render() {
    const { comments, _id, votes } = this.state;

    return (
      <div>
        <div />

        {comments.map(comment => {
          return <div key={comment._id}>
            <Card>
              <p>{comment.body}</p>

              <Link to="/users">
                {" "}
                <p> Created by: 👤{comment.created_by} </p>{" "}
              </Link>
              <Button
                onClick={() => this.deleteComment(comment._id)}
              >
                {" "}
                Delete ❌{" "}
              </Button>
              <p> Votes : {comment.votes}✅ </p>
              <Button onClick={() => this.voteCommentClick(comment._id, 'up')}>👍🏽</Button>
              <Button onClick={() => this.voteCommentClick(comment._id, 'down')}>👎🏽</Button>

            </Card>
          </div>;
        })}
        <AddComment
          handleChange={this.handleChange}
          user={this.props.user}
          articleId={this.props.match.params.articleId}
          addComment={this.addComment}
        />
      </div>
    );
  }
  addComment = (article_Id, newComment) => {
    // console.log(article_Id, newComment, this.props.user);
    const commentObj = {
      body: newComment,
      created_by: this.props.user
    };
    console.log(commentObj)
    api.addComment(article_Id, commentObj).then(comment => {
      this.setState({
        comments: [...this.state.comments, comment]
      });
    })

  }


  deleteComment = comment_id => {
    if (window.confirm("DELETE THIS COMMENT?")) {
      api
        .deleteComment(comment_id)
        .then(() => {
          alert("DELETED");
        })
        .catch(err => {
          this.setState({ error: err.response.status });
        });
      const newComments = this.state.comments.filter(comment => {
        return comment._id !== comment_id;
      });
      this.setState({ comments: newComments });
    }
  }
  voteCommentClick = (id, direction, index) => {
    console.log(direction)
    api.commentVote(id, direction)
      .then(({ votes }) => {
        console.log(votes)
        const newComments = [...this.state.comments]
        newComments[index] = { ...newComments[index], votes }
        this.setState({
          comments: newComments
        })
      })
  }
}

export default Comments;
