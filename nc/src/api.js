import axios from "axios";
const url = "https://ncnewsapi.herokuapp.com/api/";

export const getAllUsers = () => {
  return axios.get(`${url}/users`).then(res => res.data.users);
};

export const getArticles = () => {
  return axios.get(`${url}/articles`).then(res => res.data.articles);
};

export const getArticleById = id => {
  return axios.get(`${url}/articles/${id}`).then(res => {
    return res.data;
  });
}
export const postArticle = (id, article) => {
  return axios
    .post(`${url}/topics/${id}/articles`, article)
    .then(res => {
      return res.data;
    })
}
export const getTopics = () => {
  return axios.get(`${url}/topics`).then(res => res.data.topics);
};

export const getArticlesByTopic = topic => {
  return axios.get(`${url}/topics/${topic}/articles`).then(res => {
    return res.data.articles;
  });
};

export const getComments = id => {
  return axios.get(`${url}/comments`).then(res => res.data.comments);
};

export const getCommentsByArticleId = id => {
  return axios
    .get(`${url}/articles/${id}/comments`)
    .then(res => res.data.comments);
};

export const addComment = (article_Id, newComment) => {
  return axios
    .post(`${url}/articles/${article_Id}/comments`, newComment)
    .then(res => res.data);
};

export const deleteComment = (comment_id) => {
  return axios.delete(`${url}/comments/comment_id`)
    .then(
      res => res.data
    )
}
export const commentVote = (id, direction, index) => {
  return axios
    .put(`${url}/comments/${id}?vote=${direction}`)
    .then(res => {
      return res.data;
    })
}

export const articleVote = (id, direction) => {
  return axios
    .put(`${url}/articles/${id}?vote=${direction}`)
    .then(res => {
      return res.data;
    });
};
