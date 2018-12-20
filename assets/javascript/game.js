

 // Array of crystals
      // ========================================================
      var crystals = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
 // Array of computer Choices
//  ===============================================================================
      var computerChoice = [19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,
                            36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,
                            51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67
                            ,68,69,70,71,72,73,74,75,76,77,78,79,80,
                            81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,
                            97,98,99,100,101,102,103,104,105,106,107,108,
                            109,110,111,112,113,114,115,116,117,118,119,120]
  
      // variables
      // ===================================================================================================
      var computerPick;
      // This will break the solution into individual numbers to be stored in array.
      var crystalsChosen ;
      // This will be the number of total we show after clicking on crystals
      var total ;
      // Game counters
      var wins = 0 ;
      var losses = 0 ;
     

      // starting the game
      $(document).ready(function() {

      function startGame() {

         total = 0 ;

// This step declear the computer pick random number from the computer array
// ===========================================================================================
         computerPick = computerChoice[Math.floor(Math.random() * computerChoice.length)];

// Now attaching the values randomly from the crystals array to each crystal
// ==========================================================================================================================
         $(".crystal-blue").attr('data-crystalvalue', crystalsChosen=crystals[Math.floor(Math.random()*crystals.length)]);
         $(".crystal-green").attr('data-crystalvalue', crystalsChosen=crystals[Math.floor(Math.random()*crystals.length)]);
         $(".crystal-red").attr('data-crystalvalue', crystalsChosen=crystals[Math.floor(Math.random()*crystals.length)]);
         $(".crystal-yellow").attr('data-crystalvalue', crystalsChosen=crystals[Math.floor(Math.random()*crystals.length)]);
         $("#number-to-guess").text(computerPick);
        // This step is for testing ...................
         console.log("computerPick:"+ computerPick);
    
      }

       // When clicking on any crystal .............

       $(".crystal").on("click", function() {
            //  This step is for testing 
            console.log("click");
       // craping the values ........................................
            var crystalValue = $(this).attr("data-crystalvalue");

                crystalValue = parseInt(crystalValue);
        // changing the total value each time when the user clicking .....
                total+=crystalValue;
                $(".total-number").text(total);
             //  This step is for testing 
                console.log('crystalVakue' + crystalValue );
                console.log ('total'+ total);

        // The condition statements..............
              if (total === computerPick){
                  wins++;
                  console.log("New score: " + computerPick + "total:" + total );
                  $("#wins-text").text("wins:" + wins );
                  startGame();
              }
              else if (total > computerPick) {
                  losses++;
                  console.log("New score: " + computerPick + "total:" + total );
                  $("#losses-text").text("losses:" + losses);
                  startGame();
                }

              });

              startGame();
          });
  