import { PLAYER, DEALER, INITIAL_CARDS_DEALT, GAME_PARTICIPANTS, ROUNDS_UNTIL_SHUFFLE, DEAL, SHUFFLE_AND_DEAL } from './constants'

import Deck from './Deck'

import Hand from './Hand'

import UI from './ui'


export default class Game {


  constructor() {

    UI('init', this)

    this.victoryCount = {

      player: 0,

      dealer: 0,

    }

    this.shouldShuffle = true

    this.dealHands()

  }


  shuffleDeck() {
    
    this.roundsSinceShuffle = 1

    this.deck = new Deck()

    this.shouldShuffle = false

  }


  dealHands() {

    this.hands = clearHands()

    this.shouldShuffle && this.shuffleDeck()
    //pass last victor--must update losing player's hand UI
    UI('renderNewRound', this)

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

    UI('renderCard', this, {

      participant: participant,

      card: card,

    })

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

      isDealersFirstTurn && UI('renderDealerHand', this)

      this.dealCard(DEALER)

    }

  }


  declareVictor() {

    this.roundsSinceShuffle++

    this.shouldShuffle = shouldShuffle(this.roundsSinceShuffle)

    this.victor = determineVictor(this.hands)
    
    this.victoryCount[this.victor] += 1

    UI('renderVictory', this)

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


const clearHands = () => {

  return {

    player: new Hand(PLAYER),

    dealer: new Hand(DEALER),

  }

}
