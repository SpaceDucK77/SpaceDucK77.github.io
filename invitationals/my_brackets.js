var minimalData = {
  teams : [
    ["Player 1", "Player 2"], /* first matchup */
    ["Player 3", "Player 4"]  /* second matchup */
  ],
  results : [
  ]
};


function updateResults(){
  $.ajax({
      url : "https://www.spaceduck.se/invitationals/results.txt",
      method : "GET",
      cache : false
      success: function(newText){
        minimalData["results"] = JSON.parse(newText);
      }, 'text'),
      async : false});
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
  updateResults();
  showBracket();
  pageLoad();
};
