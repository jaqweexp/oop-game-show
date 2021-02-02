/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 // Phrase.js to create a Phrase class to handle the creation of phrases.

const keyBoard = document.getElementById("qwerty");
const key = document.getElementsByClassName("key");

const hearts = document.getElementsByClassName('tries');

const gotPhrase = new Phrase();

let gameLost = false;
let gameWon = false;

let heartCounter = -1;
	


let gamePhrase;

const lettersHidden = document.getElementsByClassName('hide');
const totalLettersHidden = lettersHidden.length;



class Game {
	constructor(game){
		this.missed = 0;
		this.phrases = ["every moment is a fresh beginning", "what we think we become", "whatever you do do it well", "die with memories not dreams", "turn your wounds into wisdom"];  
		this.activePrase = null;
	}
		 
	//getRandomPhrase(): this method randomly retrieves one of the phrases stored in the phrases array and returns it.
	getRandomPhrase(){
		const phrases = this.phrases;
		let rand = Math.floor(Math.random() * phrases.length); 
    	this.activePhrase = phrases[rand];
    	
		}
	startGame() {
		const overlay = document.getElementById("overlay");
		
		startButton.addEventListener('click' , function(){ 
    		overlay.style.display = "none";
    	})

    	this.getRandomPhrase();
	
		gotPhrase.phrase = this.activePhrase;
		console.log(gotPhrase.phrase);
		gotPhrase.addPhraseToDisplay();

	}

	removeLife(){

		heartCounter += 1;			

		console.log(heartCounter);	
		
		hearts[heartCounter].firstChild.src = "images/lostHeart.png";

		if(heartCounter === 4){
			console.log("you lost! heart counter is at " + heartCounter);
			gameLost = true;
		}	
		
	}


	handleInteraction(){

		keyBoard.addEventListener('click' , function(e){
			// console.log(heartCounter);
			if(e.target.className === "keyrow"){
				return;
			}

			//Disable the selected letter’s onscreen keyboard button.
			e.target.disabled = true;
			matchAtleast1 = false;

			const clickedKey = e.target.innerHTML.toLowerCase();

			//If the phrase does not include the guessed letter, add the wrong CSS class to the selected letter's keyboard button and call the removeLife() method.

			//If the phrase includes the guessed letter, add the chosen CSS class to the selected letter's keyboard button, call the showMatchedLetter() method on the phrase, and then call the checkForWin() method. If the player has won the game, also call the gameOver() method.

			gotPhrase.checkLetter(clickedKey);
			if(matchAtleast1 === true){
				gotPhrase.showMatchedLetter();
				e.target.setAttribute("class", "chosen");

			}else if(matchAtleast1 === false){
				e.target.setAttribute("class", "wrong");
				game.removeLife();

			}
			game.checkForWin();
			game.gameOver();

		})

	}

	checkForWin(){
		if(lettersHidden.length === 0){
			gameWon = true;
		}
	}

	//gameOver(): this method displays the original start screen overlay, and depending on the outcome of the game, updates the overlay h1 element with a friendly win or loss message, and replaces the overlay’s start CSS class with either the win or lose CSS class.
	gameOver(){
		const gameOverMessage = document.getElementById('game-over-message');
		if(gameLost === true){
			overlay.style.display = "";
			overlay.classList.remove('win');
			overlay.classList.add('lose');
			gameOverMessage.innerHTML = "You Lost! 😭";
		}

		if(gameWon === true){
			overlay.style.display = "";
			overlay.classList.remove('lose');
			overlay.classList.add('win');
			gameOverMessage.innerHTML = "Yay, you won! 🎉";
		}
		
	}



}
 






// //The class should include a constructor that initializes the following properties:

// missed: used to track the number of missed guesses by the player. The initial value is 0, since no guesses have been made at the start of the game.

// phrases: an array of five Phrase objects to use with the game. A phrase should only include letters and spaces— no numbers, punctuation or other special characters.

// activePhrase: This is the Phrase object that’s currently in play. The initial value is null. Within the startGame() method, this property will be set to the Phrase object returned from a call to the getRandomPhrase() method.

//startGame(): hides the start screen overlay, calls the getRandomPhrase() method, and sets the activePhrase property with the chosen phrase. It also adds that phrase to the board by calling the addPhraseToDisplay() method on the active Phrase object.
