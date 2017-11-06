import { DEALER } from '../constants'

const constructCardHTML = card => {

  return (card.face ? card.face : card.value) + card.suit

}

const buildCardFaceUp = card => {

  const cardEl = document.createElement('li')

  cardEl.innerHTML = constructCardHTML(card)

  return cardEl

}


const buildCardFaceDown = () => {

  const cardEl = document.createElement('li')

  cardEl.innerHTML = 'static'

  cardEl.className += 'faceDown'

  return cardEl

}


const update = (participant, card) => {

  const handEl = document.querySelector('#hands #' + participant)
  //if card is dealer's first, it's face down--do not reveal yet
  const cardEl = participant === DEALER && !handEl.children.length ? buildCardFaceDown() : buildCardFaceUp(card)

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