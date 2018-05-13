$(document).ready(function() {


	var compPick = Math.floor(Math.random() * 120) + 19; 
		console.log("compPick: " + compPick); 
		$(".randomNumber").html(compPick); 

/*Display random num: */

$("#scoreToMatch").text(Random);

//generate ran num for crystals:

  var num1= Math.floor(Math.random()*12+1)
  var num2= Math.floor(Math.random()*12+1)
  var num3= Math.floor(Math.random()*12+1)
  var num4= Math.floor(Math.random()*12+1)

  //wins/loses:

  var playerTotal= 0; 
  var wins= 0;
  var losses = 0;

$("#wins").text(wins);
$("#losses").text(losses);

//reset:

function reset(){
  Random=Math.floor(Math.random()*120+19);
  console.log(Random)
  $("#scoreToMatch").text(Random);
  num1= Math.floor(Math.random()*12+1);
  num2= Math.floor(Math.random()*12+1);
  num3= Math.floor(Math.random()*12+1);
  num4= Math.floor(Math.random()*12+1);
  playerTotal= 0;
  $("#totalScore").text(playerTotal);
  } 



  $("img").on("click", function () {
		var newScore = score += parseInt($(this).attr("value")); 
			console.log("New Score: " + newScore); 
		$(".scoreDisplay").html(newScore); 

		if(newScore === compPick) { 
			wins++ ; 
			$(".wins").html("Wins: " + wins); 
				console.log("Wins: " + wins); 
        reset(); 
    }
		

		else if(newScore > compPick) {
			losses++ ; 
			$(".losses").html("Losses: " + losses); 
				console.log("Losses: " + losses); 
        reset(); 
        
    }}
  