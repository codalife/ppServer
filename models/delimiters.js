const fs = require('fs');
const path = require('path');

const cldDir = './node_modules/cldr-misc-full/main';
const delimitersObj = {};

fs.readdirSync(cldDir)
  .forEach( dir => {
    fs.readFile(path.join(cldDir, dir, '/delimiters.json'), 'utf-8', function(err, content) {
      if (err) {
        console.log(err);
        return;
      }
      var delim = JSON.parse(content);

      for(var key in delim.main){
        if (delim.main.hasOwnProperty(key)) {
          delimitersObj[delim.main[key].identity.language] = delim.main[key].delimiters;
        }
      };
    });
  });

module.exports = delimitersObj;
