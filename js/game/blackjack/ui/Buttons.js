import { PLAYER } from '../constants'

let Game

export const buttons = {

  hit: document.getElementById('hit'),

  stand: document.getElementById('stand'),

  deal: document.getElementById('deal'),

}


const setDealText = text => {

  buttons.deal.innerHTML = text

}


const initHit = () => {

  buttons.hit.onclick = () => Game.dealCard(PLAYER)

}


const initStand = () => {

  buttons.stand.onclick = () => Game.setStandPlayer()

}


const initDeal = () => {

  buttons.deal.onclick = () => Game.dealHands()

}


const updateHitStandButtons = bool => {

  buttons.hit.disabled = !bool

  buttons.hit.style.display = bool ? '' : 'none'

  buttons.stand.disabled = !bool
  
  buttons.stand.style.display = bool ? '' : 'none'
  
}

const updateDealButton = bool => {

  buttons.deal.disabled = bool
  
  buttons.deal.style.display = bool ? 'none' : ''
  
}


const setState = bool => {

  updateHitStandButtons(bool)

  updateDealButton(bool)

}


const initListeners = (game) => {

  Game = game

  initHit()

  initStand()

  initDeal()

}


export default {

  initListeners: initListeners,

  setHitStandState: setState,

  setDealText: setDealText,

}