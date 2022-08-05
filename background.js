chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse){
        var url = request.activeUrl;
        var html = request.htmlCode;
        console.log(url);
        console.log(html);
        sendResponse({farewell: 'Got the URL and Source Code, thanks!!'});
        chrome.runtime.sendNativeMessage('ae.gits.mohre.automation',
        { "create_file": true, "url": url, "html": html }, function(response){
            console.log(response);
        });
});
