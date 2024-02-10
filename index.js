// ==UserScript==
// @name         BlockedUserCustomBackground
// @namespace    http://tampermonkey.net/
// @version      0.0.1
// @description  Убирает все кастомные фоны у пользователей
// @author       Reques6e
// @match        https://devcore.fun/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=devcore.fun
// @grant        none
// ==/UserScript==

(function() {
    window.addEventListener('load', function() {
        var pBodyElements = document.getElementsByClassName('p-body');

        for (var i = 0; i < pBodyElements.length; i++) {
            var pBodyElement = pBodyElements[i];
            if (getComputedStyle(pBodyElement).backgroundImage !== 'none') {
                pBodyElement.style.backgroundImage = 'none';
            }
        }
    });
})();
