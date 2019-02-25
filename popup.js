var doc

chrome.browserAction.onClicked.addListener(function(tab) {
  // No tabs or host permissions needed!
  console.log('Turning ' + tab.url + ' red!')
  chrome.tabs.executeScript({
    doc = DocumentApp.openByUrl(tab.url)
  })
})

function countQuoteWords()
{
  
}
