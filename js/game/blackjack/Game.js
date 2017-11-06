import { PLAYER, DEALER, INITIAL_CARDS_DEALT, GAME_PARTICIPANTS } from './constants'

import Deck from './Deck'

import Hand from './Hand'

import UIHands from './ui/Hands'

import UIButtons from './ui/Buttons'


export default class Game {


  constructor() {

    UIButtons.initListeners(this)

    this.deck = new Deck()

    this.hands = clearHands()

  }


  deal() {

    renderNewRound()

    this.hands = clearHands()

    for (var i = 0; i < 2; i++) {

      for (let participant of GAME_PARTICIPANTS) {
        //if Player is dealt blackjack, nextTurn() method deals final Dealer card, so don't call it again.
        !this.hands[PLAYER].blackjack && this.dealCard(participant)
        
      }

    }

  }

  
  dealCard(participant) {
    //select card, remove it from deck
    const card = this.deck.drawCard()
    //add card to hand
    this.hands[participant].setCard(card)
//isFirstDealerCard(participant, this.hands[participant].cards)
    UIHands.update(participant, card)

    participant === DEALER && this.hands[participant].setStand()

    gameOver(this.hands) ? declareVictor(this.hands) : this.nextTurn(participant)

  }


  nextTurn(participant) {

    if (dealerShouldPlay(this.hands)) {

      participant === PLAYER && renderDealerUI(this.hands[DEALER].cards[0])

      this.dealCard(DEALER)

    }


  }


  setStandPlayer() {

    this.hands[PLAYER].setStand()

    gameOver(this.hands) ? declareVictor(this.hands) : this.nextTurn(DEALER)

  }


}

//logic
const playerFinished = hands => hands[PLAYER].blackjack || hands[PLAYER].stand

const dealerShouldPlay = hands => !hands[DEALER].blackjack && !hands[DEALER].stand && playerFinished(hands)

const isFirstDealerCard = (participant, cards) => participant === DEALER && cards.length === 1

const gameOver = hands => hands[DEALER].bust || hands[PLAYER].bust || (hands[PLAYER].stand || hands[PLAYER].blackjack) && (hands[DEALER].stand || hands[DEALER].blackjack)

const determineVictor = hands => hands[DEALER].bust || (!hands[PLAYER].bust && hands[PLAYER].cumulativeVal > hands[DEALER].cumulativeVal) ? PLAYER : DEALER

//UI util
const renderDealerUI = firstDealerCard => {

  UIButtons.toggleState()

  UIHands.revealDealer(firstDealerCard)

}

const renderNewRound = () => {

  UIButtons.toggleState()

  UIHands.clear()

}


const declareVictor = (hands) => {

  renderDealerUI(hands[DEALER].cards[0])
  
  console.log('victor: ', determineVictor(hands))

  return determineVictor(hands)

}


// const getNewHand = participant => new Hand(participant)


const clearHands = () => {

  return {

    // player: getNewHand(PLAYER),

    // dealer: getNewHand(PLAYER),

    player: new Hand(PLAYER),

    dealer: new Hand(PLAYER),

  }

}