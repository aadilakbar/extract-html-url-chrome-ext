// sending message
if (document.location.href.includes("google.com"))
{
    chrome.runtime.sendMessage({
        activeUrl: document.location.href,
        htmlCode: document.body.outerHTML
        }, function(response){
            console.log(response.farewell);
    });    
}