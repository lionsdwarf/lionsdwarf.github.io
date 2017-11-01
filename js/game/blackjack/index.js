
const FACE_VALUE = 10

const CARD = {

  suit: [ 'S', 'H', 'D', 'C' ],

  value: [ 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A' ],

}


const buildCardVals = () => {

  return CARD.value.map(
    //if face card, include it's value
    cardVal => typeof(cardVal) === 'number' ?
        
      {

        value: cardVal,

      }

      :

      {

        value: FACE_VALUE,

        face: cardVal,

      }

  )

  return cardVals

}


const buildCards = cardVals => {

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


export const generateDeck = () => {

  const cardVals = buildCardVals()

  const deck = buildCards(cardVals)

  console.log('deck : ', deck)

  return deck

}
