var minimalData = {
  teams : [
    ["Player 1", "Player 2"], /* first matchup */
    ["Player 3", "Player 4"]  /* second matchup */
  ],
  results : [

  ]
};

var initial_bracket_load = true;
var the_bracket = null;
var bracket_on = false;
var call_counter = 0;

function auto_bracket(){
  alert(the_bracket);
  the_bracket = setInterval(updateResults, 200);
}

function updateResults(){
  call_counter++;
  if (call_counter == 2){
    clearInterval(the_bracket);
    the_bracket = setInterval(updateResults, 5000);
  }
  //document.getElementById("debug").innerHTML=call_counter;
  $.ajax({
      url : "https://www.spaceduck.se/invitationals/results.txt",
      method : "GET",
      cache : false,
      success: function(newText){
        minimalData["results"] = JSON.parse(newText);
      },
      dataType : 'text'//,
      //async : initial_bracket_load
    });
  initial_bracket_load = false;
  if(bracket_on){
    showBracket();
  }
}

function showBracket() {
  $(function() {
    $('.tournament').bracket({
      init: minimalData /* data to initialize the bracket with */ })
    });
}

function startBracket(){
  var toClear = document.getElementById("content");
  while (toClear.firstChild){
    toClear.removeChild(toClear.firstChild);
  }
  if(the_bracket==null){
    auto_bracket();
  }
  bracket_on = true;
  pageLoad();
};
