function checkAuth(req, res, next) {
  if(req.isAuthenticated()){
    return next();
  }
  else{
    res.status(401).json("Not authorizated");
  }
}

module.exports = function(app){
  var controller = app.controllers.band;

  app.route('/bands')
    .get(checkAuth, controller.listBands)
    .post(checkAuth, controller.saveBand);

  app.route('/bands/:id')
    .get(checkAuth, controller.getBand)
    .delete(checkAuth, controller.removeBand);
}
