const delimitersController = require('./controllers/delimitersController');

module.exports = function(app){
  app.post('/', function(req, res, next){
    delimitersController(req, res);
  });
}
