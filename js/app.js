/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

 //app.js to create a new instance of the Game class and add event listeners for the start button and onscreen keyboard buttons.

// console.log(`Phrase - phrase: ${phrase.phrase}`);


const allKeys = keyBoard.getElementsByTagName('button');

const startButton = document.getElementById("btn__reset");

let game;

	startButton.addEventListener("click",  function(){ 
		console.log("start game now");
		game = new Game();
		gameLost = false;
		gameWon = false;
		heartCounter = -1;

		//Remove all li elements from the Phrase ul element.
		ul.innerHTML = "";
		
		//Enable all of the onscreen keyboard buttons and update each to use the key CSS class, and not use the chosen or wrong CSS classes.	
		for (let i = 0; i < allKeys.length ; i++){
			allKeys[i].setAttribute("class", "key");
			allKeys[i].disabled = false;
		}
		//Reset all of the heart images (i.e. the player's lives) in the scoreboard at the bottom of the gameboard to display the liveHeart.png image.
		for (let i = 0; i < hearts.length ; i++){
			hearts[i].firstChild.src = "images/liveHeart.png";
		}
		game.startGame();

	})


	keyBoard.addEventListener('click' , function(e){

		if(e.target.className === "keyrow"){
			return;
		}
		clickedOn = e.target;
		game.handleInteraction();		
	})
