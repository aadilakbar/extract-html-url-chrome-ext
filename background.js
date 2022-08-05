chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse){
        var url = request.activeUrl;
        var html = request.htmlCode;
        console.log(url);
        console.log(html);
        // console.log(sender.tab ? "from a content script: " + sender.tab.url : "from the extension");
        sendResponse({farewell: 'Got the URL and Source Code, thanks!!'});
        

        chrome.runtime.sendNativeMessage('ae.gits.mohre.automation',
        { "create_file": true, "url": url, "html": html }, function(response){
            console.log(response);
        });

        // chrome.runtime.sendNativeMessage('ae.gits.mohre.automation',
        // { "create_file": true, "url": url, "html": html },
        // function(response) {
        //     console.log("Received " + response);
        // });

        

        // tabId = sender.tab.id;
        // var hostName = "ae.gits.mohre.automation";
        // port = browser.runtime.connectNative(hostName);
        // message = {"update": "Mohre Site Data", "url": url, "html": html};
        // port.postMessage(message);
        // port.onMessage.addListener((response) => {
        //     browser.tabs.sendMessage(tabId, { action: "TASHEEL_UPDATE_TRANSACTION_EVENT", response: response }, function (response) { });
        // });
        // port.onDisconnect.addListener(() => {port = null;});
});