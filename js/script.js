const startScreenContainer = document.querySelector('.start-screen-container') // getting start screen container
const inputPlayerScreen = document.querySelector('.input-player-screen') // getting input player screen
const gameScreen = document.querySelector('.game-screen')

const startButton = document.querySelector('.start-button') // getting start button
const playButton = document.querySelector('.play-button') // getting the play button

const blockContainer = document.querySelector('.block-container') // getting the block container

// name input
const playerOneName = document.querySelector('.player-one-input') // getting player 1 name
const playerTwoName = document.querySelector('.player-two-input') // getting player 2 name

// for show the name of the player
const playerOneScreen = document.getElementById('player-one-screen')
const playerTwoScreen = document.getElementById('player-two-screen')

// getting card for player
const gamePlayerOne = document.querySelector('.game-player-one')
const gamePlayerTwo = document.querySelector('.game-player-two')

// removing doubleclick
document.ondblclick = function() { return false }

// game playing related start
let gameBoard = ['', '', '', '', '', '', '', '', '']
let playerPlay = 1



function playingGame(e) {
	// check the current player
	if(playerPlay == 1){
		gamePlayerOne.classList.add('add-opacity')
		gamePlayerTwo.classList.remove('add-opacity')
		e.target.innerHTML = 'x'
		playerPlay = 2
	} else if(playerPlay == 2){
		gamePlayerOne.classList.remove('add-opacity')
		gamePlayerTwo.classList.add('add-opacity')
		e.target.innerHTML = 'o'
		playerPlay = 1
	}

}

// game playing related end

function createBlock(dataset) {
	let divBlock = document.createElement('div') // creating a div
	divBlock.classList.add('block-part', 'no-select')
	divBlock.setAttribute('data-block', dataset) // creating custom dataset
	blockContainer.appendChild(divBlock) 
}

function buttonStart() {
	startScreenContainer.style.display = "none"
	inputPlayerScreen.style.display = "block"
}

function buttonPlay() {
	// check if the player is entering the name
	if(!playerOneName.value || !playerTwoName.value) {
		alert('Please enter name for player!')
	} else {
		inputPlayerScreen.style.display = 'none'
		gameScreen.style.display = 'block'
		playerOneScreen.innerHTML = playerOneName.value
		playerTwoScreen.innerHTML = playerTwoName.value

		// creating the block for game
		for(let i = 1; i <= 9; i++) {
			createBlock(i)
		}
		
		// generating event listener to the game board
		document.querySelectorAll('.block-part').forEach(key => key.addEventListener('click', playingGame))
	}
}

startButton.addEventListener('click', buttonStart) // start button
playButton.addEventListener('click', buttonPlay) // play button
