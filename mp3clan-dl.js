// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://mp3clan.net/mp3/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    setInterval(function() {
        var nodes = document.querySelectorAll(".mp3list-download a:not(.dlable)");
        for (var i = 0; i < nodes.length; i++) {
            var node = nodes[i];
            if (!node.classList.contains("dlable")) {
                node.onclick = function(e) {
                    window.location.href = node.parentNode.parentNode.querySelectorAll('a')[0].href;
                    e.preventDefault();
                };
                node.classList.add("dlable");
            }
        }
    }, 500);
})();