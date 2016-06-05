
/*
 * GET map.
 */
exports.map = function(req, res){
  	var request = require('request');
  	var url = 'http://dev.virtualearth.net/REST/v1/Locations?q=' + encodeURIComponent(req.query['q']) + '&key=' + process.env.MAPS_KEY;
	request.get(url, function (error, response, body) {
		if (response.statusCode == 200) {
			var data = JSON.parse(body);
			if (data.statusCode == 200) {
				var resource = data.resourceSets[0].resources[0];
				if (resource == null) {
					res.send(404);
				} else {
					var coords = resource.geocodePoints[0].coordinates;
					var pp = coords[0] + ',' + coords[1];
					var url = 'http://dev.virtualearth.net/REST/v1/Imagery/Map/Road/' + pp + '/12?pp=' + pp + ';46;&format=png&mapSize=450,300&key=' + process.env.MAPS_KEY;
			  		request.get(url).pipe(res);
			  	}
		  	} else {
		  		res.send(data.statusCode);
		  	}
		} else {
			res.send(response.statusCode);
		}
	});
};

exports.school = function(req, res){
  	var request = require('request');
  	var url = 'http://dev.virtualearth.net/REST/v1/Locations?q=' + encodeURIComponent(req.query['q']) + '&key=' + process.env.MAPS_KEY;
	request.get(url, function (error, response, body) {
		if (response.statusCode == 200) {
			var data = JSON.parse(body);
			if (data.statusCode == 200) {
				var coords = data.resourceSets[0].resources[0].geocodePoints[0].coordinates;
				var url = 'http://www.greatschools.org/school-district-boundaries-map/?lat=' + coords[0] + '&lon=' + coords[1] + '&level=h&q=' + encodeURIComponent(req.query['q']);
		  		res.redirect(url);
		  	} else {
		  		res.send(data.statusCode);
		  	}
		} else {
			res.send(response.statusCode);
		}
	});
};
