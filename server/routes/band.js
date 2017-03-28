module.exports = (app) => {
  app.get('/bands', (req, res) => {
    res.status(200).json([
      {
        name: "Iron Maiden",
        genre: "NWOBHM"
      }
    ]);
  });
};