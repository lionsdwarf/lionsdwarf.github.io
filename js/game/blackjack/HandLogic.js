import { HAND } from './Hand'

import { ACE_VALUE } from './constants'

import { endRound } from './Deal'


const BUST_LIMIT = 21

const DEALER_STAND_MIN = 17


const toggleSoftAce = participant => {

  const newHand = []

  let aceToggled = false

  for (let card of HAND[participant].cards) {

    if (!aceToggled && card.face && card.face === 'A' && card.value === ACE_VALUE.high) {

      card.value = 1

      aceToggled = true

    }

    newHand.push(card)

  }

  updateHand(participant)

}


export const blackjack = participant => {

  return HAND[participant].cumulativeVal === BUST_LIMIT

}


const dealerContinuesOn17 = () => {

  if (HAND[DEALER].aces) {

    toggleSoftAce(DEALER)

    return true

  }

  return false

}


export const dealerContinues = () => {

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


export const handBusts = participant => {

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


export const updateHand = participant => {

  let totalVal = 0 

  let aces = 0

  for (let card of HAND[participant].cards) {
    //accumulate value of hand
    totalVal += card.value
    //hand is soft with aces, so tally them (performance enhancement to avoid redundant iterations)
    if (card.face && card.face === 'A') {

      aces++
       
    }

  }

  HAND[participant].cumulativeVal = totalVal

  HAND[participant].aces = aces
  
}
