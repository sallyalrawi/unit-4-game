

// Array of crystals  
// ========================================================
var crystals = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];


  
// variables
// ===================================================================================================
var computerPick = [];
// This will break the solution into individual numbers to be stored in array.
var crystalsChosen = [];
// This will be the number of total we show after clicking on crystals
var total = [];
// Game counters
var wins = 0;
var losses = 0;


// starting the game
$(document).ready(function() {

function startGame() {

   total = 0;

   computerPick = computerChoice[Math.floor(Math.random()  * 150)];
   console.log(total);
}


 $("#crystal-img").on("click", function() {

        for (var i = 0; i < crystals.length; i++) {
            var crystalValue = ($(this).attr("data-crystalvalue"));
                crystalValue = parseInt(crystalValue);
                total+=crystalValue;

        if (total===computerPick){
            wins++;
            console.log("New score: " + computerPick + "total:" + total );
            startGame();
        }
        else if (total >= computerPick) {
            losses++;
            console.log("New score: " + computerPick + "total:" + total );
            startGame();
          }
          
        }
    });
});
  