var btc = require("./coins/btc.js");
var bch = require("./coins/bch.js");
var ltc = require("./coins/ltc.js");

module.exports = {
	"BTC": btc,
	"LTC": ltc,
	"BCH": bch,

	"coins":["BTC", "LTC", "BCH"]
};
