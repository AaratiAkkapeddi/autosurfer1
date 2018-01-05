// function randomFromArray(arr){
//   return Math.floor(Math.random() * ((arr.length - 1) - 0 + 1)) + 0;
// }
// document.write("body { display: none; }");
var word = 'potato'
function RandomWord() {
  
    $.getJSON("https://en.wikipedia.org/w/api.php?action=query&generator=random&grnnamespace=0&prop=info&format=json&inprop=url", function(data) {
           console.log(data["query"]["pages"][Object.keys(data["query"]["pages"])[0]]["title"])
           word = data["query"]["pages"][Object.keys(data["query"]["pages"])[0]]["title"];
           RandomWordComplete(word)
     })
    // $.ajax({
    //     type: "GET",
    //     url: requestStr,
    //     dataType: "jsonp",
    //     jsonpCallback: 'RandomWordComplete'
    // });
}

function RandomWordComplete(data) {
    word = data;
    changeStuff(word);
}


function changeStuff(word){
  

  /* change location */
  
     
      setTimeout(function(){

            document.title = "autosurfer"

            chrome.storage.sync.set({"myKey": word}, function(){
              window.location = "https://www.google.com/search?q=" + word + "&tbm=isch";


              $('link[rel="shortcut icon"]').attr('href', "http://aarati.me/favicon.ico");

            });
      },500)
   
}

$(document).ready(function(){
$('#div#taw').css('display','none');
$('div#hdtbSum').css('display','none');
$('div#searchform').css('display','none');
$('div#rshdr').css('display','none');
$('g-scrolling-carousel').css('display','none');
var myOldWord = $('<p>'); 
  myOldWord.css('position', 'fixed').css('z-index', 999999).css('margin','0').css('top','0').css('left','0').css('color','blue').css('background','whitesmoke').css('padding','30px 50px').css('font-family','courier').css('font-size','40px');
  $('body').append(myOldWord);
  /* setting the old word to display in top left corner*/
  chrome.storage.sync.get('myKey', function (result) {
       myOldWord.text(" " + result["myKey"]);   
  });
  $('body').addClass('showaarati')
// var myOldWord = $('<p>'); 
// myOldWord.css('position', 'fixed').css('margin','0').css('top','0').css('left','0').css('color','chartreuse').css('background','black').css('padding','10px').css('font-family','courier');
// $('body').append(myOldWord);
// chrome.storage.sync.get('myKey', function (result) {
//        myOldWord.text("previous:\n" + result["myKey"]);   
//   });
 setTimeout(function(){
    RandomWord();
  },6000)

   
})


