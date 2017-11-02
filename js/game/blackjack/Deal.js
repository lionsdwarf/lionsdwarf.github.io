import UIDeal from './ui/Deal'

import { PLAYER, DEALER } from './constants'

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
  //show all cards except dealer's first
  (participant === PLAYER || HAND[participant].cards.length > 1) && UIDeal.updateHand(participant, card)

}


export const dealGame = deck => {

  gameDeck = deck

  dealCard(PLAYER)

  dealCard(DEALER)

  dealCard(PLAYER)

  dealCard(DEALER)

}

export const hit = dealCard