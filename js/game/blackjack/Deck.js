import { FACE_VALUE, ACE_VALUE, CARD, ACE, } from './constants'


export default class Deck {

  constructor() {

    this.cards = generateShuffledDeck()

  }


  drawCard() {

    return this.cards.splice(0, 1)[0]

  }

}


const generateShuffledDeck = () => {

  const cardVals = buildCardVals()

  const deck = buildDeck(cardVals)

  return shuffleDeck(deck)

}


const shuffleDeck = (deck) => {

  let shuffledDeck = []

  let unshuffledCount = deck.length

  let selectedIndex

  while (unshuffledCount) {

    selectedIndex = Math.floor(Math.random() * unshuffledCount--)

    shuffledDeck.push(deck.splice(selectedIndex, 1)[0])

  }

  return shuffledDeck

}



const buildCardVals = () => {

  return CARD.title.map(
    //if face or ace card, include it's value. otherwise value is equal to title.
    cardTitle => typeof(cardTitle) === 'number' ?
        
      {

        value: cardTitle,

      }

      :

      {

        value: cardTitle === ACE ? ACE_VALUE.high : FACE_VALUE,

        face: cardTitle,

      }

  )

  return cardVals

}


const buildDeck = cardVals => {

  const deck = []

  for (let cardVal of cardVals) {

    for (let suit of CARD.suit) {

      deck.push({

        suit: suit,

        ...cardVal,

      })

    }

  }

  return deck

}
