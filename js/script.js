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
let gameBoard = []
let playerPlay = 1

// check for the winner
function checkTheWinner(markPattern){
	console.log(markPattern)
	if(
		markPattern[0] == 'x' && markPattern[1] == 'x' && markPattern[2] == 'x' ||
		markPattern[3] == 'x' && markPattern[4] == 'x' && markPattern[5] == 'x' ||
		markPattern[6] == 'x' && markPattern[7] == 'x' && markPattern[8] == 'x' ||
		markPattern[0] == 'x' && markPattern[3] == 'x' && markPattern[6] == 'x' ||
		markPattern[1] == 'x' && markPattern[4] == 'x' && markPattern[7] == 'x' ||
		markPattern[2] == 'x' && markPattern[5] == 'x' && markPattern[8] == 'x' ||
		markPattern[0] == 'x' && markPattern[4] == 'x' && markPattern[8] == 'x' ||
		markPattern[2] == 'x' && markPattern[4] == 'x' && markPattern[6] == 'x'
	){
			console.log('Player using x is win')
	} else if(
		markPattern[0] == 'o' && markPattern[1] == 'o' && markPattern[2] == 'o' ||
		markPattern[3] == 'o' && markPattern[4] == 'o' && markPattern[5] == 'o' ||
		markPattern[6] == 'o' && markPattern[7] == 'o' && markPattern[8] == 'o' ||
		markPattern[0] == 'o' && markPattern[3] == 'o' && markPattern[6] == 'o' ||
		markPattern[1] == 'o' && markPattern[4] == 'o' && markPattern[7] == 'o' ||
		markPattern[2] == 'o' && markPattern[5] == 'o' && markPattern[8] == 'o' ||
		markPattern[0] == 'o' && markPattern[4] == 'o' && markPattern[8] == 'o' ||
		markPattern[2] == 'o' && markPattern[4] == 'o' && markPattern[6] == 'o'
	){
		console.log('Player using o is win')
	}
}

function playingGame(e) {
	console.log(e.target.dataset.block)
	// check the current player
	if(playerPlay == 1){
		gamePlayerOne.classList.add('add-opacity')
		gamePlayerTwo.classList.remove('add-opacity')
		e.target.innerHTML = 'x'
		gameBoard[ e.target.dataset.block -1 ] = 'x'
		playerPlay = 2
	} else if(playerPlay == 2){
		gamePlayerOne.classList.remove('add-opacity')
		gamePlayerTwo.classList.add('add-opacity')
		e.target.innerHTML = 'o'
		gameBoard[ e.target.dataset.block -1 ] = 'o'
		playerPlay = 1
	}

	// check for the winner
	checkTheWinner(gameBoard)
}

// game playing related end

function createBlock(dataset) {
	let divBlock = document.createElement('div') // creating a div
	divBlock.classList.add('block-part', 'no-select')
	divBlock.setAttribute('data-block', dataset) // creating custom dataset
	blockContainer.appendChild(divBlock)

	// push the block to the array
	gameBoard.push('')
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
