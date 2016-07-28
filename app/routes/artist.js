module.exports = function(app){
  var controller = app.controllers.artist;

  app.route('/artists')
    .get(controller.listArtists)
    .post(controller.saveArtist);

  app.route('/artists/:id')
    .get(controller.getArtist)
    .delete(controller.removeArtist);
}
