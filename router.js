const controller = require('./models/delimiters');

module.exports = function(app){
  app.get('/', function(req, res, next){
      res.send("All good");
  });
}
