module.exports = function(app){
  var controller = app.controllers.band;

  app.route('/bands')
    .get(controller.listBands)
    .post(controller.saveBand);

  app.route('/bands/:id')
    .get(controller.getBand)
    .delete(controller.removeBand);
}
