module.exports = (app) => {
  app.get('/artists', (req, res) => {
    res.status(200).json([
      {
        name: 'Steve Harris'
      }
    ]);
  });
}