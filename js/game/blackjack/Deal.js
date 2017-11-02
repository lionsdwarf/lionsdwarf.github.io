import UIDeal from './ui/Deal'

import { PLAYER, DEALER } from './constants'

let gameDeck

const BUST_LIMIT = 21

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


const updateHand = participant => {

  let totalVal = 0 

  let aces = 0

  for (let card of HAND[participant].cards) {
    //accumulate value of hand
    totalVal += card.value
    //hand is soft with aces, so tally them 
    if (card.face && card.face === 'A') {

      aces++
       
    }

  }

  HAND[participant].cumulativeVal = totalVal

  HAND[participant].aces = aces
  
}


const dealCard = participant => {
  //select card, remove it from deck
  const card = gameDeck.splice(0, 1)[0]
  //add card to hand
  HAND[participant].cards.push(card)

  updateHand(participant)

  return card

}


const handBusts = participant => {

  //add soft logic//

  if (HAND[participant].cumulativeVal > BUST_LIMIT) {

    if (HAND[participant].aces) {

      toggleSoftAce(participant)

      return false

    }

    endRound()

    return true

  } 

  return false

}


const blackjack = participant => {

  return HAND[participant].cumulativeVal === BUST_LIMIT

}


const dealCardToPlayer = () => {

  const card = dealCard(PLAYER)

  UIDeal.updateHand(PLAYER, card)
  
  handBusts(PLAYER) || blackjack(PLAYER) && dealCardToDealer()

}


const dealCardToDealer = () => {

  const card = dealCard(DEALER)
  //show all cards except dealer's first
  HAND[DEALER].cards.length > 1 && UIDeal.updateHand(DEALER, card)

  handBusts(DEALER) || dealerContinues() && dealCardToDealer()

}


const toggleSoftAce = participant => {

  const newHand = []

  let aceToggled = false

  for (let card of HAND[participant].cards) {

    if (!aceToggled && card.face && card.face === 'A' && card.value === 11) {

      card.value = 1

      aceToggled = true

    }

    newHand.push(card)

  }

  updateHand(participant)

}


const dealerContinuesOn17 = () => {

  if (HAND[DEALER].aces) {

    toggleSoftAce(DEALER)

    return true

  }

  return false

}


const dealerContinues = () => {

  const handVal = HAND[DEALER].cumulativeVal

  if (blackjack(DEALER)) {

    //game ends, dealer wins

    return false

  } else if (handVal > 17 && handVal < BUST_LIMIT) {

    //dealer stands, determineWinner...

    return false

  } else if (handVal === 17) {

    return dealerContinuesOn17()

  }

  return true

}

// const endRound = () => {



// }


export const dealGame = deck => {

  gameDeck = deck

  dealCardToPlayer()

  dealCardToDealer()

  dealCardToPlayer()

  dealCardToDealer()

}

export const hit = dealCardToPlayer