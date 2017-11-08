import { PLAYER, DEALER, INITIAL_CARDS_DEALT, GAME_PARTICIPANTS, ROUNDS_UNTIL_SHUFFLE, DEAL, SHUFFLE_AND_DEAL } from './constants'

import Deck from './Deck'

import Hand from './Hand'

import UIHand from './ui/Hands'

import UIStats from './ui/Stats'

import UIButtons from './ui/Buttons'


export default class Game {


  constructor() {

    UIButtons.initListeners(this)

    this.victoryCount = {

      player: 0,

      dealer: 0,

    }

    this.shuffleDeck()

    this.dealHands()

  }


  shuffleDeck() {
    
    this.roundsSinceShuffle = 1

    this.deck = new Deck()

  }


  dealHands() {

    this.hands = clearHands()

    shouldShuffle(this.roundsSinceShuffle) && this.shuffleDeck()
    //pass last victor--must update losing player's hand UI
    renderNewRound(this.victor)

    for (var i = 0; i < 2; i++) {

      for (let participant of GAME_PARTICIPANTS) {
        //if Player is dealt blackjack, nextTurn() deals final Dealer card, so don't call it again.
        !this.hands[PLAYER].blackjack && this.dealCard(participant)
        
      }

    }

  }

  
  dealCard(participant) {

    const card = this.deck.drawCard()

    this.hands[participant].setCard(card)

    UIHand.update(participant, card, this.hands[participant].cards.length - 1)
//maybe refactor this
    participant === DEALER && this.hands[participant].setStand()

    this.victoryCheck(participant)

  }


  setStandPlayer() {

    this.hands[PLAYER].setStand()

    this.victoryCheck()

  }
  

  victoryCheck(participant) {

    isGameOver(this.hands) ? this.declareVictor() : this.nextTurn(participant === PLAYER)

  }


  nextTurn(isDealersFirstTurn) {

    if (shouldDealerPlay(this.hands)) {
      //if participant is player, this is the dealer's first turn
      isDealersFirstTurn && renderDealerHand(this.hands[DEALER].cards[0])

      this.dealCard(DEALER)

    }

  }


  declareVictor() {

    this.roundsSinceShuffle++

    this.victor = determineVictor(this.hands)
    
    renderDealerHand(this.hands[DEALER].cards[0])

    this.victoryCount[this.victor] += 1

    renderVictory(this.victor, this.victoryCount, shouldShuffle(this.roundsSinceShuffle))

  }


}

//logic
const isPlayerFinished = hands => hands[PLAYER].blackjack || hands[PLAYER].stand


const shouldDealerPlay = hands => !hands[DEALER].blackjack && !hands[DEALER].stand && isPlayerFinished(hands)


const isFirstDealerCard = (participant, cards) => participant === DEALER && cards.length === 1


const isGameOver = hands => hands[DEALER].blackjack || hands[DEALER].bust || hands[PLAYER].bust || hands[DEALER].stand && (hands[PLAYER].stand || hands[PLAYER].blackjack) 


const shouldShuffle = roundsSinceShuffle => roundsSinceShuffle === ROUNDS_UNTIL_SHUFFLE

//returns string
const determineVictor = hands => hands[DEALER].bust || (!hands[PLAYER].bust && hands[PLAYER].cumulativeVal > hands[DEALER].cumulativeVal) ? PLAYER : DEALER

//UI utils
const renderDealerHand = firstDealerCard => {

  UIButtons.setHitStandState(false)

  UIHand.revealDealer(firstDealerCard)

}


const renderNewRound = victor => {

  UIButtons.setTextDeal(DEAL)

  UIButtons.setHitStandState(true)

  UIHand.clear(victor)

}


const renderVictory = (victor, victoryCount, shouldShuffle) => {

  shouldShuffle && UIButtons.setTextDeal(SHUFFLE_AND_DEAL)

  UIHand.declareVictor(victor)

  UIStats.update(victor, victoryCount)

}


const clearHands = () => {

  return {

    player: new Hand(PLAYER),

    dealer: new Hand(DEALER),

  }

}
