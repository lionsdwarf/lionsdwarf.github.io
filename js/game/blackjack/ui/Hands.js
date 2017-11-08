import { DEALER, CSS_CARD_OFFSET } from '../constants'


// hand opposite the victor's
const opposingHands = {

  dealer: document.querySelector('#player'),

  player: document.querySelector('#dealer'),

}


//hand methods:

const declareLosingHand = victor => {

  opposingHands[victor].style.opacity = 0.5

}


const resetLostHand = victor => {

  opposingHands[victor].style.opacity = 1

}


const dealCard = (participant, card, cardNum) => {

  const handEl = document.querySelector('#hands #' + participant)
  //if card is dealer's first, it's face down--do not reveal yet
  const cardEl = participant === DEALER && !handEl.children.length ? buildCardFaceDown() : buildCardFaceUp(card, cardNum)

  handEl.append(cardEl)

}


const clear = victor => {

  const hands = document.querySelectorAll('#hands ol')

  victor && resetLostHand(victor)

  for (let hand of hands) {
    
    hand.innerHTML = ''

  }

}


const revealDealer = (card) => {

  const cardEl = document.querySelector('.faceDown')

  if (cardEl) {

    cardEl.classList.remove('faceDown')

    cardEl.append(constructCardVal(card))

    cardEl.append(constructCardVal(card))

  }
}


//card methods:

const calcCardDisplayOffset = cardNum => {
  //number of pixels card gets shifted, to display it's value
  return '-' + CSS_CARD_OFFSET * cardNum + 'px'

}


const constructCardVal = card => {

  const val = document.createElement('div')

  val.innerHTML = card.face ? card.face : card.value

  val.className += ' suit' + card.suit

  return val

}

const buildCardFaceUp = (card, cardNum) => {

  const cardEl = document.createElement('li')

  cardEl.append(constructCardVal(card))

  cardEl.append(constructCardVal(card))

  cardEl.className += ' card'

  cardEl.style.left = calcCardDisplayOffset(cardNum)

  return cardEl

}


const buildCardFaceDown = () => {

  const cardEl = document.createElement('li')

  cardEl.className += 'card faceDown'

  return cardEl

}


export default {

  revealDealer: revealDealer,

  dealCard: dealCard,

  clear: clear,

  declareVictor: declareLosingHand,

}