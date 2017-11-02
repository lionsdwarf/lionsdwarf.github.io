
import { generateShuffledDeck } from './game/blackjack/Deck'

import { dealGame } from './game/blackjack/Deal'

import UIEvent from './game/blackjack/ui/Event'


const initializeGame = type => {

  UIEvent.initListeners()

  const deck = generateShuffledDeck()

  dealGame(deck)

}


window.onload = initializeGame