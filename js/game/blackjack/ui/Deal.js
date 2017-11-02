const buildCardEl = card => {

  const cardEl = document.createElement('li')

  cardEl.innerHTML = (card.face ? card.face : card.value) + card.suit

  return cardEl

}


const updateHandEl = (participant, card) => {

  const handEl = document.querySelector('#hand #' + participant)

  const cardEl = buildCardEl(card)

  handEl.append(cardEl)

}


export default {

  updateHand: updateHandEl

}