chrome.runtime.onInstalled.addListener(() => {
	console.log("Extension Installed")
});

chrome.runtime.onMessage.addListener((request, message) => {
    if (request.message == 'BUY') {
        chrome.tabs.create({url: request.url}, (tab => {
            setTimeout(() => {
                chrome.scripting.executeScript(
                    {
                      target: {tabId: tab.id},
                      files: ['scripts/auto-buy.js']
                    },
                    (res) => { console.log(res); console.log("Executed Script")});
            }, 2000);
        }));


       
    }
})


