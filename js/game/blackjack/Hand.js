import { DEALER, ACE_VALUE, ACE, BUST_LIMIT, DEALER_STAND_MIN, } from './constants'


export default class Hand {

  constructor(participant) {

    this.cards = []

    this.shouldToggleAce = participant === DEALER ? shouldToggleAceDealer : bustWithoutToggle

    this.shouldStand = participant === DEALER ? () => shouldStandDealer(this.cumulativeVal) : shouldStandPlayer

  }


  setCard(card) {

    this.cards.push(card)

    this.updateProps()

  } 


  updateProps() {

    this.cumulativeVal = calcCumulativeVal(this.cards)

    toggleableAce(this.cards) && this.shouldToggleAce(this.cumulativeVal) && this.toggleAceAndUpdateProps()

    this.bust = didBust(this.cumulativeVal)
    
    this.blackjack = hasBlackjack(this.cumulativeVal)

  }


  toggleAceAndUpdateProps() {

    this.cards = toggleAce(this.cards)

    this.updateProps()

  }

  setStand() {

    this.stand = this.shouldStand(this.cumulativeVal)

  }

}

//logic
const bustWithoutToggle = cumulativeVal => cumulativeVal > BUST_LIMIT

const hasBlackjack = cumulativeVal => cumulativeVal === BUST_LIMIT

const didBust = cumulativeVal => cumulativeVal > BUST_LIMIT
//participant specific logic
const shouldStandDealer = cumulativeVal => cumulativeVal < BUST_LIMIT && cumulativeVal >= DEALER_STAND_MIN

const shouldToggleAceDealer = cumulativeVal => bustWithoutToggle(cumulativeVal) || cumulativeVal === DEALER_STAND_MIN

const shouldStandPlayer = () => true

//util
const toggleAce = cards => {

  const newHand = []

  let aceToggled = false

  for (let card of cards) {
    //in case of multiple aces, only toggle 1
    if (!aceToggled && card.face && card.face === ACE && card.value === ACE_VALUE.high) {

      card.value = 1

      aceToggled = true

    }

    newHand.push(card)

  }

  return newHand

}


const toggleableAce = cards => {

  for (let card of cards) {

    if (card.face && card.face === ACE && card.value === ACE_VALUE.high) {

      return true

    }

  }

  return false

}


const calcCumulativeVal = cards => {

  let cumulativeVal = 0 
  //accumulate value of cards in hand
  for (let card of cards) {
  
    cumulativeVal += card.value

  }

  return cumulativeVal

}

