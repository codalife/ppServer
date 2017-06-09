const delimiters = require('../models/delimiters');

module.exports = function(req, res){
  const query = req.body.query;

  const response = [];

  for(let q in delimiters){
    let obj = {};
    obj[q] = delimiters[q][query];
    response.push(obj);
  }

  res.send(response);
};
