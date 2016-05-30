var express = require('express');

module.exports = function(){
  var app = express();

  // Configurações do app
  app.set('port', 3000);

  // middleware
  app.use(express.static('./public'));
  app.use('view engine', 'ejs');
  app.use('views', './app/views');

  return app;
}
