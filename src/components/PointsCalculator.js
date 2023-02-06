function calculateTotalPoints(teamVictories, teamDraws) {
    var pointsVictory = 3,
      pointsDraw = 1;
    return teamVictories * pointsVictory + teamDraws * pointsDraw;
  }
  function teamPoints() {
    var totalPoints = calculateTotalPoints(victories, draws);
    return totalPoints;
  }
  
  var team = prompt("Informe o nome do time: \n");
  var victories = prompt("Informe o número de vitórias: \n");
  var draws = prompt("Informe o número de empates: \n");
  var defeats = prompt("Informe o número de derrotas: \n");
  
  function dataSheet() {
    var Obj = {
      name: team,
      points: teamPoints(),
      victories: victories,
      draws: draws,
      defeats: defeats,
    };
    return Obj;
  }