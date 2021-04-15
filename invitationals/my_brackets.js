var minimalData = {
  teams : [
    ["Player 1", "Player 2"], /* first matchup */
    ["Player 3", "Player 4"]  /* second matchup */
  ],
  results : [
    //[[1,2], [3,4]],       /* first round */
    //[[4,6], [2,1]]        /* second round */
  ]
};

function updateResults(){
  $.get("https://www.spaceduck.se/invitationals/results.txt", function(newText){
    minimalData["results"] = JSON.parse(newText);
  }, 'text');
}

function startBracket(){
  var toClear = document.getElementById("content");
  while (toClear.firstChild){
    toClear.removeChild(toClear.firstChild);
  }
  $(function() {
    $('.tournament').bracket({
      init: minimalData /* data to initialize the bracket with */ })
    });
};
