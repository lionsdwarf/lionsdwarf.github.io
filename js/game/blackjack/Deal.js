let gameDeck

const clearHand = () => {

  return {

    cards: [],

    cumulativeVal: 0

  }

}

let HAND = {

  player: clearHand(),

  dealer: clearHand(),

}

const dealCard = participant => {

  const card = gameDeck.splice(0, 1)[0]
  //add card to hand
  HAND[participant].cards.push(card)
  //accumulate value of hand
  HAND[participant].cumulativeVal += card.value
  //if hand contains an Ace, set 'soft' prop 
  if (card.face && card.face === 'A') {

    HAND[participant].soft = true

  }

}


export const dealGame = deck => {

  gameDeck = deck

  dealCard('player')

  dealCard('dealer')

  dealCard('player')

  dealCard('dealer')

  console.log('h', HAND)

}