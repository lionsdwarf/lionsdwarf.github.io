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

  return card

}


const dealCardToPlayer = () => {

  const card = dealCard(PLAYER)

  UIDeal.updateHand(PLAYER, card)

  HAND[PLAYER].cumulativeVal === 21 && dealCardToDealer()

  HAND[PLAYER].cumulativeVal > 21 && endRound()

}


const dealCardToDealer = () => {

  const card = dealCard(DEALER)
  //show all cards except dealer's first
  HAND[DEALER].cards.length > 1 && UIDeal.updateHand(DEALER, card)

  dealerContinues() && dealCardToDealer()

}

const dealerContinues = () => {

  return false

}

const endRound = () => {



}


export const dealGame = deck => {

  gameDeck = deck

  dealCardToPlayer()

  dealCardToDealer()

  dealCardToPlayer()

  dealCardToDealer()

}

export const hit = dealCardToPlayer