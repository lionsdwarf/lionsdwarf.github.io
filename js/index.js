import { generateShuffledDeck } from './game/blackjack'

const initializeGame = type => {

  generateShuffledDeck()

}

window.onload = initializeGame()