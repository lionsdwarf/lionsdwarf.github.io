//game transaction contol

import UIDeal from './ui/Deal'

import { PLAYER, DEALER } from './constants'

import { HAND } from './Hand'

import { handBusts, blackjack, dealerContinues, updateHand } from './HandLogic'

let gameDeck

let initDeal = true


const dealCard = participant => {
  //select card, remove it from deck
  const card = gameDeck.splice(0, 1)[0]
  //add card to hand
  HAND[participant].cards.push(card)

  updateHand(participant)

  return card

}


const dealCardToPlayer = () => {

  const card = dealCard(PLAYER)

  UIDeal.updateHand(PLAYER, card)
  
  if (!initDeal) {
    
    handBusts(PLAYER) || blackjack(PLAYER) && dealCardToDealer()

  }

}


const dealCardToDealer = () => {

  const card = dealCard(DEALER)
  //show all cards except dealer's first
  HAND[DEALER].cards.length > 1 && UIDeal.updateHand(DEALER, card)

  if (!initDeal) {
    
    handBusts(DEALER) || dealerContinues() && dealCardToDealer()

  }

}


export const endRound = () => {

  console.log('END')

}


export const dealGame = deck => {

  gameDeck = deck

  dealCardToPlayer()

  dealCardToDealer()

  dealCardToPlayer()

  dealCardToDealer()

  initDeal = false

}

export const hit = dealCardToPlayer