
function resizeFreezePane()
{
    var height = document.getElementsByClassName("header")[0].offsetHeight;
    document.getElementById("headerFill").style.marginTop = height + 'px';
}

//Resizes content to allow static header with dynamic height on postbacks
function pageLoad() {
    resizeFreezePane();
}

function addToHeader(filename){
  var orig = document.getElementsByClassName("header")[0].innerHTML;
  var newText;
  newtext =$.get("https://www.spaceduck.se/"+filename, function(data){return data;}, 'text');
  alert(newText);
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
