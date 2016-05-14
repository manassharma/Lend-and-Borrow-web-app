var express = require('express');
var fs = require('fs');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  //res.sendFile('index.html', {root: 'C:/lnbv1.0/views/'});
  fs.readFile('C:/lnbv1.0/public/index.html', null, function(error, data){
  	if(error){
  		res.writeHead(404);
  		res.write("file not found");
  	}
  	else{
  		res.write(data);
  	}
  	res.end();
  });
});

module.exports = router;
