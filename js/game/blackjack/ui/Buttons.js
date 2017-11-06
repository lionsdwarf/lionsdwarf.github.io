import { PLAYER } from '../constants'

let Game

export const buttons = {

  hit: document.getElementById('hit'),

  stand: document.getElementById('stand'),

  deal: document.getElementById('deal'),

}

const initHit = () => {

  buttons.hit.onclick = () => Game.dealCard(PLAYER)

}


const initStand = () => {

  buttons.stand.onclick = () => Game.setStandPlayer()

}


const initDeal = () => {

  buttons.deal.onclick = () => Game.deal()

}


const toggleState = () => {

  for (let prop in buttons) {

    buttons[prop].disabled = !buttons[prop].disabled

  }

}


const initListeners = (game) => {

  Game = game

  initHit()

  initStand()

  initDeal()

}


export default {

  initListeners: initListeners,

  toggleState: toggleState,

}