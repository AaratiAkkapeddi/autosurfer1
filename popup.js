chrome.runtime.sendMessage({method:"getWord"},function(response){
  $('.words').text(response);
}