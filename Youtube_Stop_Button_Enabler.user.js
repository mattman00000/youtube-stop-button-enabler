// ==UserScript==
// @name         Youtube Stop Button Enabler
// @namespace    https://github.com/mattman00000
// @version      0.0.5
// @description  stop playback with keyboard stop button or F7
// @author       mattman00000
// @match        *://www.youtube.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    // F7 = 118
    // [Stop] = 178
	window.addEventListener("keydown",function(a){if (a.key == "MediaStop" || a.key == "F7") document.getElementsByTagName("video")[0].pause();});
})();
