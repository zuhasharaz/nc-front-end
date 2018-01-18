const { REACT_APP_API_URL: API_URL } = process.env;

export const fetchTopics = () => {
  return fetch(`${API_URL}/topics`).then(res => res.json());
};

export const fetchArticles = topic => {
  const url = topic
    ? `${API_URL}/topics/${topic}/articles`
    : `${API_URL}/articles`;

  return fetch(url).then(res => res.json());
};
