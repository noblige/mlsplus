/*
 * MLS data provider
 */

exports.get = function (codes, openHouse, completed) {
	var request = require('request');
	var async = require('async');
	var base = {
	  "display": {
	    "pageNumber": 1,
	    "itemsPerPage": 50
	  },
	  "query": {
	    "searchType": "property",
	    "cityName": "",
	    "countyName": "",
	    "zipCode": "",
	    "mlsNumber": "",
	    "address": "",
	    "listingStatus": "1",
	    "openHouse": openHouse,
	    "subClass": "",
	    "type": "1",
	    "beds": {
	      "value": "3",
	      "minMaxSelection": "Min"
	    },
	    "baths": {
	      "value": "2",
	      "minMaxSelection": "Min"
	    },
	    "lotSize": {
	      "value": "",
	      "minMaxSelection": "Min"
	    },
	    "parking": "",
	    "listSalePrice": {
	      "value": 765000,
	      "minMaxSelection": "Max"
	    },
	    "sqft": {
	      "value": "1000",
	      "minMaxSelection": "Min"
	    },
	    "yearBuiltMin": "",
	    "yearBuiltMax": "",
	    "sortBy": "Newest"
	  },
	  "generatePropertySearchResultsHash": true
	};
	var result = { status: [], results: [] };
	async.each(codes,
		function(zip, callback) {
			var r = JSON.parse(JSON.stringify(base));
			r.query.zipCode = zip.toString();
			request.post(
				{ uri: 'http://api.mlslistings.com/api/search', json: true, body: r },
				function (error, response, body) {
					result.status.push({ 'zip' : zip, code : response.statusCode });
					if(response.statusCode == 200 && body.propertySearchResults != null) {
						result.results = result.results.concat(body.propertySearchResults);
					}
					callback();
				});
			},
		function(err) {
			completed(result);
		});
}
