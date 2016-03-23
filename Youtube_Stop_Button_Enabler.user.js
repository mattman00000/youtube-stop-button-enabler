// ==UserScript==
// @name         Youtube Stop Button Enabler
// @namespace    https://github.com/mattman00000
// @version      0.0.1
// @description  try to take over the world!
// @author       mattman00000
// @match        https://www.youtube.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
	window.addEventListener("keydown",function(a){if (a.keyCode == 178) document.getElementsByTagName("video")[0].pause();});
})();