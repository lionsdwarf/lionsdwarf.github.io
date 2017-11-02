import UI from './ui/'

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
  //select card, remove it from deck
  const card = gameDeck.splice(0, 1)[0]
  //add card to hand
  HAND[participant].cards.push(card)
  //accumulate value of hand
  HAND[participant].cumulativeVal += card.value
  //if hand contains an Ace, set 'soft' prop 
  if (card.face && card.face === 'A') {

    HAND[participant].soft = true

  }
  //do not reveal first dealer card
  (participant === 'player' || HAND[participant].cards.length > 1) && UI.updateHand(participant, card)

}


export const dealGame = deck => {

  gameDeck = deck

  dealCard('player')

  dealCard('dealer')

  dealCard('player')

  dealCard('dealer')

  console.log('hands', HAND)

}