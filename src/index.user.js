    // ==UserScript==
// @name        Thetan Arena Profit
// @version     2.0
// @match       https://marketplace.thetanarena.com/*
// @author      GM#4630 - https://discord.gg/CxG3f7S - https://github.com/Felipefury/Thetan-Arena-Profit
// @description Thetan Arena Profit
// @run-at      document-start
// @grant       GM.xmlHttpRequest
// ==/UserScript==

(function() {
    function initiate() {
        window.stop();
        fetch(`https://exchange.thetanarena.com/exchange/v1/currency/price/1`)
            .then(res => res.json())
            .then(response => {
            let price = response.data
            localStorage.setItem('THC', price.toFixed(3));
            override()
        });
    };
    let interval = setInterval(() => {
        if(window) {
            initiate();
            clearInterval(interval);
        };
    });
    let override = function() {
        GM.xmlHttpRequest({
            headers: {
                'Access-Control-Allow-Credentials' : true,
                'Access-Control-Allow-Origin':'*',
                'Access-Control-Allow-Methods':'GET',
                'Access-Control-Allow-Headers':'text/html',
            },
            method: "GET",
            url: "https://raw.githubusercontent.com/Felipefury/Thetan-Arena-Profit/main/src/index.html",
            onload: function(response) {
                document.open();
                document.write(response.response);
                document.close();
            }
        });
    }

    console.log("Donate to help the project,and I'll fix it if stop working. \n\nIf your window is blank or buggy, maybe the site has been updated and the extension won't work. \n\nDonate here: https://github.com/Felipefury/Thetan-Arena-Profit.")
})();
