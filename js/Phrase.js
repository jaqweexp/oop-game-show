/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 //Game.js to create a Game class with methods for starting and ending the game, handling interactions, getting a random phrase, checking for a win, and removing a life from the scoreboard.

const phraseDiv = document.getElementById('phrase'); 
const ul = phraseDiv.querySelector("ul");
let phraseArray;
let matchAtleast1 = false;
let noMatch = true;
let takeHeart;

let correctGuessHTMLCollection;

let activeLetterLowercase;

let correctGuessArray = [];

 class Phrase {
 	constructor(phrase){
 		this.phrase = phrase;
 	}

	//this adds letter placeholders to the display when the game starts. Each letter is presented by an empty box, one li element for each letter. See the example_phrase_html.txt file for an example of what the rendered HTML for a phrase should look like when the game starts, including any id or class attributes needed. 
 	addPhraseToDisplay() {
 		
 		phraseArray = this.phrase.split('');

 		let letterString;

 		const letterLi = (letter) => { 
	 			if(letter === " "){
	 				letterString = `<li class="space"> </li>`
	 				return letterString;		
	 			}else{
		 			letterString = `<li class="hide letter ${letter}">${letter}</li>`
		 			return letterString;
		 		}
 			}
 		
 		phraseArray.forEach(letter => {
 			letterString = letterLi(letter);

 			//convert string into html element//
 			const tempLiDiv = document.createElement('div');
 			tempLiDiv.innerHTML= letterString;
 			const letterElement = tempLiDiv.firstChild;
 			ul.append(letterElement);
 		})


 	    //When the player correctly guesses a letter, the empty box is replaced with the matched letter (see the showMatchedLetter() method below). Make sure the phrase displayed on the screen uses the letter CSS class for letters and the space CSS class for spaces.

 	  } //end addPhrasetoDisplay

 	  checkLetter(clickedKey){	  	

 	  			correctGuessArray = [];



 	  			for(let i = 0; i < phraseArray.length ; i++){
 	  				activeLetterLowercase = phraseArray[i].toLowerCase();
 	  				if(activeLetterLowercase === clickedKey){
 	  					matchAtleast1 = true;
 	  					
 	  					console.log("there's a match, it's " + activeLetterLowercase);
 	  								
 	  					correctGuessArray.push(activeLetterLowercase);
 	  					console.log(correctGuessArray);
 
 	  					correctGuessHTMLCollection = document.getElementsByClassName("hide letter " + correctGuessArray[0]);
 	  					console.log(correctGuessHTMLCollection);

 	  				}

 	  				
 	  			}
 	 }
 	 //showMatchedLetter(): reveals the letter(s) on the board that matches the player's selection. To reveal the matching letter(s), select all of the letter DOM elements that have a CSS class name that matches the selected letter and replace each selected element's hide CSS class with the show CSS class.
 	 showMatchedLetter(){

 	 	console.log(correctGuessHTMLCollection);

 	 	for (let i = 0 ; i < correctGuessArray.length; i++){

 	 		console.log(correctGuessHTMLCollection);
 	 		
 	 		correctGuessHTMLCollection[0].classList.add("show");	
 	 		correctGuessHTMLCollection[0].classList.remove("hide");	
 		 	 	
 	 	} 	 	

 	 }

 }











