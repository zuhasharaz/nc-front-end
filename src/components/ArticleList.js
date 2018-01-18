import React from 'react'

import Voter from './Voter'

const styles = {
  container: {
    display: 'flex',
    marginBottom: 20
  },
  title: {
    margin: 0,
    marginLeft: 10
  }
}

const ArticleList = ({articles, voteUpOrDownOnArticle}) => (
    <div>
        {articles.map(article => {
          const onDownVote = voteUpOrDownOnArticle.bind(null, article._id, 'down');
          const onUpVote = voteUpOrDownOnArticle.bind(null, article._id, 'up');
          return (
            <div style={styles.container}>
              <Voter 
                votes={article.votes} 
                onDownVote={onDownVote}
                onUpVote={onUpVote}
              />
              <h3 style={styles.title}>{article.title}</h3>
            </div>
          )
        })}
    </div>
);

export default ArticleList