var app = require('./config/express')();

app.get('/', function(req, res){
  res.send('Hello World');
});

app.listen(app.get('port'), function(){
  console.log('Listening on port ' + app.get('port'));
});
