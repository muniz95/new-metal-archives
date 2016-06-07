var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require("cookie-parser");
var session = require("express-session");
var passport = require("passport");
var load = require('express-load');
var helmet = require('helmet');

module.exports = function(){
  var app = express();

  // Configurações do app
  app.set('port', process.env.PORT || 3000);
  app.set('ip', process.env.IP || 'localhost');
  app.set('view engine', 'ejs');
  app.set('views', './app/views');

  // middleware
  app.use(express.static('./public'));
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());
  app.use(require('method-override')()); 
  app.use(cookieParser());
  app.use(session({
    secret: 'cachaça de morretes',
    resave: true,
    saveUninitalized: true
  }));
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(helmet());
  app.disable('x-powered-by');
  app.use(helmet.xframe());
  app.use(helmet.xssFilter());
  app.use(helmet.nosniff());

  load('models', {cwd: 'app'})
    .then('controllers')
    .then('routes/auth.js')
    .then('routes')
    .into(app);
    
    app.get('*', function(req,res){
      res.status(404).render('404');
    });

  return app;
}
