/*
 * MLS data provider
 */

exports.get = function (codes, cb) {
	var body = {
	  "pagingInfo": {
	    "totalItemsCount": 2,
	    "totalPagesCount": 1,
	    "currentPageNumber": 1,
	    "totalItemsPerPage": 20
	  },
	  "propertySearchResults": [
	    {
	      "showShortSaleImg": false,
	      "showOpenHouseImg": true,
	      "showReoImg": false,
	      "showWarningSmallImg": false,
	      "listingStatusImageUrl": "http://api.mlslistings.com/Content/apps/shared/map/images/pins/1.gif",
	      "MLSNumber": "ML81400460",
	      "yearAge": "1924 / 90",
	      "listSalePrice": "735000",
	      "filteredAddress": "10140 SANTA CLARA AV",
	      "countyName": "Santa Clara",
	      "cityPostalName": "Cupertino",
	      "stateOrProvinceName": "CA",
	      "postalCode": 95014,
	      "photoURL": "http://data.mlslistings.com/GetMedia.ashx?Q=UmVzb3VyY2U9UHJvcGVydHkmU291cmNlSUQ9OTcwNjEyMiZPYmplY3RJRD0xJlR5cGU9cGhvdG8mVXNlcj1hbm9ueW1vdXM%3d&Hash=4381b8179e7fc7a12b9f62f7e9de8069",
	      "beds": "2 Beds",
	      "baths": "2 Full Baths",
	      "structureSqFt": "900",
	      "subClass": "Single Family Home",
	      "lastModifiedDate": "1/10/2014 3:35:00 AM",
	      "siteMapDetailUrlPath": "http://www.mlslistings.com/property/ml81400460/10140-santa-clara-av-cupertino-ca-95014/",
	      "formattedSalePrice": "$735,000",
	      "agentName": "Mary Tan",
	      "agentCompanyName": "Coldwell Banker",
	      "agentProfilePath": "http://www.mlslistings.com/meet-an-agent/profile/license/00861682",
	      "agentURL": "http://www.marytan.com",
	      "agentURLText": "www.marytan.com",
	      "agentEmailAddress": "mtan@cbnorcal.com",
	      "agentPrimaryPhone": "(408) 861-8832",
	      "agentID": "158072",
	      "agentPhoto": "http://data.mlslistings.com/GetMedia.ashx?Q=UmVzb3VyY2U9QWdlbnQmU291cmNlSUQ9MTU4MDcyJk9iamVjdElEPTEmVHlwZT1waG90byZVc2VyPWFub255bW91cw%3d%3d&Hash=05aae18a3bea1cee6fbfc63bf5e8e9a6",
	      "agentOfficePhone": "(408) 861-8832",
	      "agentLicenseID": "00861682",
	      "agentFax": "",
	      "latitude": "37.3248970",
	      "longitude": "-122.0523150",
	      "lotSizeArea": "2500 SqFt.",
	      "publicRemarks": "Beautiful, updated 2 bedrooms + bonus room in sought-after Monta Vista neighborhood! Open, bright floor plan includes a spacious living area. Bonus room ideal for home office or extra bedroom.  Master bedroom suite with access to lovely backyard. Additional amenities include: top Cupertino schools, gorgeous newly-paved stone patio, dual pane windows,laundry room, water heater replaced in 3/2013.",
	      "listingAgentOfficeUrl": ""
	    },
	    {
	      "showShortSaleImg": false,
	      "showOpenHouseImg": false,
	      "showReoImg": false,
	      "showWarningSmallImg": false,
	      "listingStatusImageUrl": "http://api.mlslistings.com/Content/apps/shared/map/images/pins/2.gif",
	      "MLSNumber": "ML81339299",
	      "yearAge": "1971 / 42",
	      "listSalePrice": "728000",
	      "filteredAddress": "10367 MARY AV",
	      "countyName": "Santa Clara",
	      "cityPostalName": "Cupertino",
	      "stateOrProvinceName": "CA",
	      "postalCode": 95014,
	      "photoURL": "http://data.mlslistings.com/GetMedia.ashx?Q=UmVzb3VyY2U9UHJvcGVydHkmU291cmNlSUQ9OTY4MTA4MyZPYmplY3RJRD0xJlR5cGU9cGhvdG8mVXNlcj1hbm9ueW1vdXM%3d&Hash=82cab40270b66ca237bf4dccf4ca4576",
	      "beds": "2 Beds",
	      "baths": "1 Full / 1 Partial Baths",
	      "structureSqFt": "1,216",
	      "subClass": "Townhouse",
	      "lastModifiedDate": "12/18/2013 12:31:44 PM",
	      "siteMapDetailUrlPath": "http://www.mlslistings.com/property/ml81339299/10367-mary-av-cupertino-ca-95014/",
	      "formattedSalePrice": "$728,000",
	      "agentName": "Moise Nahouraii",
	      "agentCompanyName": "Referral Realty",
	      "agentProfilePath": "http://www.mlslistings.com/meet-an-agent/profile/license/00713973",
	      "agentURL": "",
	      "agentURLText": "",
	      "agentEmailAddress": "moise@moise1.com",
	      "agentPrimaryPhone": "(408) 314-8696",
	      "agentID": "159299",
	      "agentPhoto": "http://data.mlslistings.com/GetMedia.ashx?Q=UmVzb3VyY2U9QWdlbnQmU291cmNlSUQ9MTU5Mjk5Jk9iamVjdElEPTEmVHlwZT1waG90byZVc2VyPWFub255bW91cw%3d%3d&Hash=c47822aa0bf9fbaa96941952075488ad",
	      "agentOfficePhone": "(408) 314-8696",
	      "agentLicenseID": "00713973",
	      "agentFax": "(408) 253-0983",
	      "latitude": "37.3292810",
	      "longitude": "-122.0510490",
	      "lotSizeArea": "1600 SqFt.",
	      "publicRemarks": "Come and see this nicely updated townhome in a convenient location of Cupertino with fantastic schools! Features include newly installed laminate floors, new carpet, complete interior paint, and private back patio. One car garage is separated by patio in front entry. Walking distance to De Anza College and Oaks Shopping Center. Easy freeway access to 85 and 280.",
	      "listingAgentOfficeUrl": ""
	    }
	  ],
	  "agentSearchResults": null,
	  "officeSearchResults": null,
	  "propertySearchResultsHash": "M3K51Urkzy19Zf8gmdt6zQ",
	  "Success": true,
	  "Message": null
	};
	var result = { status: [], results: [] };
	for (var i in codes) {
		var zip = codes[i];
		result.status.push({ 'zip' : zip, code : 200 });
		result.results = result.results.concat(body.propertySearchResults);
	}
	cb(result);
}