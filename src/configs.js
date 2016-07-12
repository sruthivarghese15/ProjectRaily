var APP_ID = undefined; //replace with "amzn1.echo-sdk-ams.app.[your-unique-value-here]";


var BASE_URL="http://api.railwayapi.com/";
var trains=[
	{
	"name":"SOLAPUR MIRAJ SPECIAL",
	"id":"1413",
	"from":"SOLAPUR",
	"to":"MIRAJ"},
	{
	"name":"MIRAJ SOLAPUR SPECIAL",
	"id":"1414",
	"from":"MIRAJ",
	"to":"SOLAPUR"}
];
/**
 * Array containing API keys
 */
var API_KEYS = [
    "bfzhr4575",
    "puzgi7810",
    "xtjxm1892",
    "adieg3070",
    "bkxel1825",
    "bkjjv3426",
    "euhuq6862",
    "mdtzh6188"
    ];

exports.getBaseUrl=function(){
	return BASE_URL;
};
exports.getAPIKey=function(){
    var keyIndex = Math.floor(Math.random() * API_KEYS.length);
    var apiKey = API_KEYS[keyIndex];
	return apiKey;
};
exports.getTrains=function(){
	return trains;
};
exports.getAPPID=function(){
	return APP_ID;
};