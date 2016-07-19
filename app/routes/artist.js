function checkAuth(req, res, next) {
  if(req.isAuthenticated()){
    return next();
  }
  else{
    res.status(401).json("Not authorizated");
  }
}

module.exports = function(app){
  var controller = app.controllers.artist;

  app.route('/artists')
    .get(checkAuth, controller.listArtists)
    .post(checkAuth, controller.saveArtist);

  app.route('/artists/:id')
    .get(checkAuth, controller.getArtist)
    .delete(checkAuth, controller.removeArtist);
}
