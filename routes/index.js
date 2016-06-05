
/*
 * GET home page.
 */
exports.index = function(req, res){
  	var mls = require('./mls');
  	mls.get([
  		94086,
  		94087,
  		95008,
  		95014,
  		95050,
  		95051,
  		95117,
  		95118,
  		95120,
  		95124,
  		95125,
  		95128,
  		95129], req.query['openHouse'], function(data) {
		data.results.sort(function(a, b) {
			return new Date(b.lastModifiedDate).getTime() - new Date(a.lastModifiedDate).getTime();
		});
	  	res.render('index', { status: data.status, properties : data.results });  		
  	});
};
