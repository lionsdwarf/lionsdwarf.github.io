import { DEALER, CSS_CARD_OFFSET } from '../constants'

const constructCardHTML = card => {

  return card.face ? card.face : card.value

}

const buildCardFaceUp = (card, cardNum) => {

  const cardEl = document.createElement('li')

  cardEl.innerHTML = constructCardHTML(card)

  cardEl.className += 'card suit' + card.suit

  cardEl.style.left = '-' + CSS_CARD_OFFSET * cardNum + 'px'

  return cardEl

}


const buildCardFaceDown = () => {

  const cardEl = document.createElement('li')

  cardEl.innerHTML = 'static'

  cardEl.className += 'faceDown'

  return cardEl

}


const update = (participant, card, cardNum) => {

  const handEl = document.querySelector('#hands #' + participant)
  //if card is dealer's first, it's face down--do not reveal yet
  const cardEl = participant === DEALER && !handEl.children.length ? buildCardFaceDown() : buildCardFaceUp(card, cardNum)

  handEl.append(cardEl)

}


const clear = () => {

  const hands = document.querySelectorAll('#hands ul')

  for (let hand of hands) {
    
    hand.innerHTML = ''

  }

}


const revealDealer = (card) => {

  const handEl = document.querySelector('.faceDown')

  handEl.innerHTML = constructCardHTML(card)

}


export default {

  revealDealer: revealDealer,

  update: update,

  clear: clear,

}