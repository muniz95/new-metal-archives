module.exports = (app) => {
  const API = 'https://jsonplaceholder.typicode.com';
  const axios = require("axios");
  app.get('/posts', (req, res) => {
    axios.get(`${API}/posts`)
      .then(posts => {
        res.status(200).json(posts.data);
      })
      .catch(error => {
        res.status(500).send(error)
      });
  });
};