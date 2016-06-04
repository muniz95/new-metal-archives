module.exports = function(app){
  var controller = app.controllers.band;
  app.get('/bands', controller.list_bands);
  app.get('/bands/:id', controller.get_band);
}
