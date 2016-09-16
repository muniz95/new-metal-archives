var app = require('./config/express')();
require('./config/database')('mongodb://localhost/nma');

app.get('/', function(req, res){
    res.send('Hello World');
});

app.listen(app.get('port'), app.get('ip'));
