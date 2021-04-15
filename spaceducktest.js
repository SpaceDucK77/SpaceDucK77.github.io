
function resizeFreezePane()
{
    var height = document.getElementsByClassName("header")[0].offsetHeight;
    document.getElementById("headerFill").style.marginTop = height + 'px';
}

//Resizes content to allow static header with dynamic height on postbacks
function pageLoad() {
    resizeFreezePane();
}

function recursiveRemove(item){
  while (item.firstChild){
    recursiveRemove(item.firstChild);
    item.removeChild(item.firstChild);
  }
}

function addToHeader(filename){
  var orig = document.getElementsByClassName("header")[0].innerHTML;
  $.get("https://www.spaceduck.se/"+filename, function(newText){
    var full = orig + newText;
    document.getElementsByClassName("header")[0].innerHTML = full;
  }, 'text');
}

function changeContent(filename){
  try{
    //var toClear = document.getElementsByClassName("tournament");
    $(".tournament").html("");
    /*while (toClear.firstChild){
      recursiveRemove(toClear.firstChild);
      toClear.removeChild(toClear.firstChild);
    }*/
    /*for(i = 0; i < toClear.length; i++){
      toClear[i].innerHTML="";
    }*/
  }
  catch(err){

  }
  try{
    bracket_on=false;
  }
  catch(err){}
  $.get("https://www.spaceduck.se/"+filename, function(newText){
    document.getElementById("content").innerHTML = newText;
  }, 'text');
}

var addEvent = function (elem, type, eventHandle) {
    if (elem == null || typeof (elem) == 'undefined') return;
    if (elem.addEventListener) {
        elem.addEventListener(type, eventHandle, false);
    } else if (elem.attachEvent) {
        elem.attachEvent("on" + type, eventHandle);
    } else {
        elem["on" + type] = eventHandle;
    }
};

//also when page is resized.
addEvent(window, "resize", resizeFreezePane);

$(function(){
  $("#header").load("https://www.spaceduck.se/header.html");
});
