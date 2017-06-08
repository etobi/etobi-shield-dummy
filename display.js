module.exports = {
	oled: {
		setCursor: function(x, y) {},
		writeString: function(font, size, string, color, wrap, linespacing, sync) {},
		update: function() {},
		dimDisplay: function(bool) {},
		turnOffDisplay: function() {},
		turnOnDisplay: function() {},
		clearDisplay: function(sync) {},
		invertDisplay: function(bool) {},
		drawBitmap: function(pixels, sync) {},
		drawPixel: function(pixels, sync) {},
		drawLine: function(x0, y0, x1, y1, color, sync) {},
		drawRect: function(x, y, w, h, color, sync){},
		fillRect: function(x, y, w, h, color, sync) {},
		drawCircle: function(x0, y0, r, color, sync) {},
		startScroll: function(dir, start, stop) {},
		stopScroll: function() {}
	},
	writeLine: function (line, text) {
		console.log(line + ': ' + text);
	}
};
