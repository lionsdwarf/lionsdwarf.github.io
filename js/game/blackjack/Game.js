import { PLAYER, DEALER, INITIAL_CARDS_DEALT, GAME_PARTICIPANTS } from './constants'

import Deck from './Deck'

import Hand from './Hand'

import UICards from './ui/Cards'

import UIButtons from './ui/Buttons'


export default class Game {


  constructor() {

    UIButtons.initListeners(this)

    this.deck = new Deck()

    this.hands = {

      player: new Hand(PLAYER),

      dealer: new Hand(DEALER),

    }

  }


  deal() {
    //buttons: enable hit/stand, disable deal
    UIButtons.toggleActions()
    
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
    //if not first dealer Card, reveal it
    !firstDealerCard(participant, this.hands[participant].cards) && UICards.updateHand(participant, card)

    participant === DEALER && this.hands[participant].setStand()

    gameOver(this.hands) ? declareVictor(this.hands) : this.nextTurn(participant)

  }


  nextTurn(participant) {

    if (dealerShouldPlay(this.hands)) {

      participant === PLAYER && dealerUI(this.hands[DEALER].cards[0])

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

const firstDealerCard = (participant, cards) => participant === DEALER && cards.length === 1

const gameOver = hands => hands[DEALER].bust || hands[PLAYER].bust || (hands[PLAYER].stand || hands[PLAYER].blackjack) && (hands[DEALER].stand || hands[DEALER].blackjack)

const determineVictor = hands => hands[DEALER].bust || (!hands[PLAYER].bust && hands[PLAYER].cumulativeVal > hands[DEALER].cumulativeVal) ? PLAYER : DEALER

//util
const dealerUI = firstDealerCard => {

  UIButtons.toggleActions()

  UICards.revealDealerHand(firstDealerCard)

}


const declareVictor = (hands) => {

  dealerUI(hands[DEALER].cards[0])
  
  console.log('victor: ', determineVictor(hands))

  return determineVictor(hands)

}
