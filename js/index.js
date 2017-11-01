import { generateShuffledDeck } from './game/blackjack/Deck'
import { dealGame } from './game/blackjack/Deal'


const initializeGame = type => {

  const deck = generateShuffledDeck()

  dealGame(deck)

}


window.onload = initializeGame()