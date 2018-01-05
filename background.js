
// function randomFromArray(arr){
//   return Math.floor(Math.random() * ((arr.length - 1) - 0 + 1)) + 0;
// }

var word = 'potato';
var autosurfertabId;
// background page
 function RandomWord() {
 
    $.getJSON("https://en.wikipedia.org/w/api.php?action=query&generator=random&grnnamespace=0&prop=info&format=json&inprop=url", function(data) {
            console.log(data["query"]["pages"][Object.keys(data["query"]["pages"])[0]]["title"])
             console.log(data["query"]["pages"][Object.keys(data["query"]["pages"])[0]])
           word = data["query"]["pages"][Object.keys(data["query"]["pages"])[0]]["title"];
           RandomWordComplete(word)
     })
  
    }

    function RandomWordComplete(data) {
        word = data;
        goOn(word);
    }


chrome.browserAction.onClicked.addListener(function(tab) {
  RandomWord();
});

function goOn(word){
    // var randomUrl = data["query"]["pages"][Object.keys(data["query"]["pages"])[0]].fullurl;
    chrome.storage.sync.set({"myKey": word});
    // window.location = randomUrl;
    chrome.tabs.create({ url: "https://www.google.com/search?q=" + word + "&tbm=isch" }, function(tab){

      chrome.tabs.executeScript(tab.id,{code:"document.title = 'randomSearcher'"});
      
      autosurfertabId = tab.id;

      setInterval(function(){
        chrome.tabs.executeScript(tab.id, { file: "jquery.min.js" }, function() {
          chrome.tabs.executeScript(tab.id, { file: "zoom.js" }, function() {
            chrome.tabs.executeScript(tab.id, { file: "content.js" }, function() {    
            });
          });
        });
      },2000)
  });
}

chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {

    newId = tabId;
    if (tabId != autosurfertabId && (tab.url.indexOf("https://www.google.com/search?") != -1)) {
      chrome.tabs.executeScript(newId, { file: "jquery.min.js" }, function() {
       chrome.tabs.executeScript(newId, { file: "clear_script.js" }, function() {

        });
      })
    };
    
 
 /* blah */ 

} );
  


