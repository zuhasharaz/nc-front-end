import React from 'react'

const ArticleList = ({articles}) => (
    <div>
        {articles.map(article => (
          <div>
            <h3>{article.title}</h3>
          </div>
        ))}
    </div>
);

export default ArticleList