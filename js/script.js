const startScreenContainer = document.querySelector('.start-screen-container') // getting start screen container
const inputPlayerScreen = document.querySelector('.input-player-screen') // getting input player screen
const gameScreen = document.querySelector('.game-screen')

const startButton = document.querySelector('.start-button') // getting start button
const playButton = document.querySelector('.play-button') // getting the play button

const playerOneName = document.querySelector('.player-one-input') // getting player 1 name
const playerTwoName = document.querySelector('.player-two-input') // getting player 2 name

// for show the name of the player
const playerOneScreen = document.getElementById('player-one-screen')
const playerTwoScreen = document.getElementById('player-two-screen')

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
    }

}

startButton.addEventListener('click', buttonStart) // start button
playButton.addEventListener('click', buttonPlay) // play button