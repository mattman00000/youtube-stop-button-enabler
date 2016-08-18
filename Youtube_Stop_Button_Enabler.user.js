// ==UserScript==
// @name               Youtube Stop Button Enabler
// @namespace          https://github.com/mattman00000
// @version            0.0.5.5
// @description        stop playback with keyboard stop button or F7
// @match              *://www.youtube.com/*
// @grant              none
// @run-at             document-end
// @connect            github.com/mattman00000
// @connect            self
// @connect            *
// @author             Matthew James Burnham <mattman00000@gmail.com>
// @downloadURL        https://github.com/mattman00000/youtube-stop-button-enabler/raw/master/Youtube_Stop_Button_Enabler.user.js
// @updateURL          http://github.com/mattman00000/youtube-stop-button-enabler/raw/master/Youtube_Stop_Button_Enabler.user.js
// @supportURL         https://github.com/mattman00000/youtube-stop-button-enabler/issues
// @homepageURL        https://github.com/mattman00000/userscripts
// @contributionURL    https://github.com/mattman00000/userscripts
// @namespace          https://github.com/mattman00000
// @license            MIT
// @copyright          2016+, Matthew James Burnham
// ==/UserScript==
/**
	The MIT License (MIT)
	Copyright © 2016 Matthew James Burnham
	Permission is hereby granted, free of charge, to any person obtaining a copy of
	this software and associated documentation files (the "Software"), to deal in
	the Software without restriction, including without limitation the rights to
	use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
	the Software, and to permit persons to whom the Software is furnished to do so,
	subject to the following conditions:
	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.
	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
	FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
	COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
	IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
	CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
**/
(function() {
	'use strict';
	//USERSCRIPT START
	// F7 = 118
	// [Stop] = 178
	window.addEventListener("keydown",function(a)
	{
		console.debug("window keydown");
		console.debug(a);
		var stopKeys = [
			"MediaStop",
			"F7"
		];
		if (stopKeys.includes(a.key))
		{
			var alertMsg = "Stop Key Pressed";
			var textBorder = 5;
			console.error("\r\n"+((("█".repeat(alertMsg.length+(textBorder*2))+"\r\n").repeat(2))+"█".repeat(textBorder)+alertMsg+"█".repeat(textBorder)+"\r\n"+(("█".repeat(alertMsg.length+(textBorder*2))+"\r\n").repeat(2)))+"\r\n");
			document.getElementsByTagName("video")[0].pause();
		}
	}
	);
	//USERSCRIPT END
}
)();
