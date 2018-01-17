import React from "react";

class TopicPage extends React.Component {
  render() {
    const { topic } = this.props.match.params;
    return (
      <div>
        <h2>Articles on {topic}</h2>
      </div>
    );
  }
}

export default TopicPage;
