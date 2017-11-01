import { generateDeck } from './game/blackjack'

const initializeGame = type => {

  generateDeck()

}

window.onload = initializeGame()