var board 	= document.getElementById('board'),
	cards	= board.getElementsByClassName('card');

for(i = 0; i < cards.length; i++) {
	cards[i];
	cards[i].addEventListener('click', flipCard);
}

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
		if (flippedCards[0].innerHTML === flippedCards[1].innerHTML) {
			matched(flippedCards);
		} else {
			unflip(flippedCards);
		}
	} else {
		return;
	}
};

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
	var matchedCards = board.getElementsByClassName('card matched');

	if(cards.length === matchedCards.length) {
		alert('YOU WIN!');
	}
};








