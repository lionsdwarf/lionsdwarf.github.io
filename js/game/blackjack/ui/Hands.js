import { DEALER, CSS_CARD_OFFSET } from '../constants'

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


const update = (participant, card, cardNum) => {

  const handEl = document.querySelector('#hands #' + participant)
  //if card is dealer's first, it's face down--do not reveal yet
  const cardEl = participant === DEALER && !handEl.children.length ? buildCardFaceDown() : buildCardFaceUp(card, cardNum)

  handEl.append(cardEl)

}


const clear = () => {

  const hands = document.querySelectorAll('#hands ol')

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


export default {

  revealDealer: revealDealer,

  update: update,

  clear: clear,

}