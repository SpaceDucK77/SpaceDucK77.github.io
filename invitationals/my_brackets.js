var minimalData = {
  teams : [
    ["Player", "Player 2"], /* first matchup */
    ["Player 3", "Player 4"]  /* second matchup */
  ],
  results : [
  ]
};

function updateResults(){
  $.get({url:"https://www.spaceduck.se/invitationals/results.txt",
   cache:false},
    function(newText){
      minimalData["results"] = JSON.parse(newText);
  }, 'text');
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
  setTimeout("showBracket()", 200);
  pageLoad()
  alert(minimalData);
};
