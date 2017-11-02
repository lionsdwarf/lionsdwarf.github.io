const buildCard = card => {

  const cardEl = document.createElement('li')

  cardEl.innerHTML = (card.face ? card.face : card.value) + card.suit

  return cardEl

}


const updateHand = (participant, card) => {

  const hand = document.querySelector('#hand #' + participant)

  const cardEl = buildCard(card)

  hand.append(cardEl)

}


export default {

  updateHand: updateHand

}