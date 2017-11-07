import { DEALER, PLAYER } from '../constants'


const victoryRateEl = document.querySelector('#victory-rate')


const calcVictoryRate = victories => {

  const rounds = victories[PLAYER] + victories[DEALER]

  return Math.round((victories[PLAYER] / rounds) * 100)

}


const updateVictoryRate = rate => {

  victoryRateEl.innerHTML = rate + ' % win-rate'

}


const update = (victor, victories) => {

  // declareVictor(victor)

  updateVictoryRate(calcVictoryRate(victories))

}

export default {

  update: update

}