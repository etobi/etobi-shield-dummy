
module.exports.readAdcValue = function (channel, callback) {
	value = parseInt(Math.random() * 4095);
	if (callback) {
		callback(channel, value);
	}
};

module.exports.readAdcTemp = function (probe, callback) {
	var channel = probe.channel;
	temp = (Math.random() * 200 - 80).toFixed(1);
	
	if (callback) {
		callback(channel, temp);
	}
};

module.exports.led = function (index, value) {
	console.log('led(' + index + ', ' + value + ')');
};
module.exports.ledOn = function (index) {
	module.exports.led(index, 1);
};
module.exports.ledOff = function (index) {
	module.exports.led(index, 0);
};
module.exports.led1On = function () {
	module.exports.ledOn(1);
};
module.exports.led1Off = function () {
	module.exports.ledOff(1);
};
module.exports.led2On = function () {
	module.exports.ledOn(2);
};
module.exports.led2Off = function () {
	module.exports.ledOff(2);
};
module.exports.led3On = function () {
	module.exports.ledOn(3);
};
module.exports.led3Off = function () {
	module.exports.ledOff(3);
};
module.exports.led4On = function () {
	module.exports.ledOn(4);
};
module.exports.led4Off = function () {
	module.exports.ledOff(4);
};

module.exports.onButton = function (index, callback) {
	console.log('onButton(' + index + ')');
};
module.exports.onButton1 = function (callback) {
	module.exports.onButton(1, callback);
};
module.exports.onButton2 = function (callback) {
	module.exports.onButton(2, callback);
};
module.exports.onButton3 = function (callback) {
	module.exports.onButton(3, callback);
};
module.exports.onButton4 = function (callback) {
	module.exports.onButton(4, callback);
};

module.exports.display = require('./display');