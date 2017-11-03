import { PLAYER } from '../constants'

let Game

export const buttons = {

  hit: document.getElementById('hit'),

  stand: document.getElementById('stand'),

}

const initHit = () => {

  buttons.hit.onclick = () => Game.dealCard(PLAYER)

}


const initStand = () => {

  buttons.stand.onclick = () => Game.setStandPlayer()

}


const disable = () => {

  buttons.hit.disabled = true

  buttons.stand.disabled = true

}


const initListeners = (game) => {

  Game = game

  initHit()

  initStand()

}


export default {

  initListeners: initListeners,

  disable: disable,

}