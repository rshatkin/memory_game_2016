var board 	= document.getElementById('board'),
	cards	= board.getElementsByClassName('card'),
	colors 	= ["orange","orange","pink","pink","red","red","purple","purple",
    "blue","blue","green","green","brown","brown","yellow","yellow"],
    resetBtn = document.getElementById('reset'),
    matchedCards;


resetBtn.addEventListener('click', resetBoard);

for(i = 0; i < cards.length; i++) {
	cards[i];
	cards[i].addEventListener('click', flipCard);
};

function assignColors() {
	while(cards.length > 0){
		var i = Math.floor(Math.random() * colors.length);
		cards[0].id = colors[i];
		colors.splice(i, 1);
   		cards = [].slice.call(cards, 1);
	}
};

function shuffleCards() {
	
}

assignColors();

function flipCard() {

	if(this.className === 'card initial') {
		this.className = 'card flipped';
		matchEval();
	} else if(this.className === 'card flipped') {
		alert("you've already selected this card!");
	} else {
		alert("This card has already been matched");
	}

};

function matchEval() {
	var flippedCards = board.getElementsByClassName('flipped');
	if(flippedCards.length > 1) {
		if (flippedCards[0].id === flippedCards[1].id) {
			setTimeout( function () {
				matched(flippedCards);
			}, 1500);
		} else {
			setTimeout( function () {
				unflip(flippedCards);
			}, 1500);
		}		
	} else {
		return;
	}
};

setTimeout(matchEval, 2000);

function matched(flippedCards) {
	while(flippedCards.length > 0) {
		flippedCards[0].className = 'card matched';
	}

	winCheck();
};

function unflip(flippedCards) {
	while(flippedCards.length > 0) {
		flippedCards[0].className = 'card initial';
	}
};

function winCheck() {
	matchedCards = board.getElementsByClassName('card matched');

	if(cards.length === matchedCards.length) {
		alert('YOU WIN!');
	}
};

function resetBoard(matchedCards) {
	matchedCards = board.getElementsByClassName('card matched');
	unflip(matchedCards);
	assignColors();
};








