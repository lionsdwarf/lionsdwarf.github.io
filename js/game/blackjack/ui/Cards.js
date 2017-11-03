const constructCardHTML = card => {

  return (card.face ? card.face : card.value) + card.suit

}

const buildCardEl = card => {

  const cardEl = document.createElement('li')

  cardEl.innerHTML = constructCardHTML(card)

  return cardEl

}


const updateHandEl = (participant, card) => {

  const handEl = document.querySelector('#hand #' + participant)

  const cardEl = buildCardEl(card)

  handEl.append(cardEl)

}


const revealDealerHand = (card) => {

  const hiddenCard = document.querySelector('.hidden')

  hiddenCard.innerHTML = constructCardHTML(card)

}


export default {

  updateHand: updateHandEl,

  revealDealerHand: revealDealerHand,

}