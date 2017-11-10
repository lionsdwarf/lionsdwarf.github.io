import { DEALER, PLAYER } from '../constants';


const victoryRateEl = document.querySelector('#victory-rate');


const calcVictoryRate = victories => {

  const rounds = victories[PLAYER] + victories[DEALER];

  return Math.round((victories[PLAYER] / rounds) * 100);

}


const updateVictoryRate = (victor, victories) => {

  victoryRateEl.innerHTML = calcVictoryRate(victories) + ' % win-rate';

}


export default {

  update: updateVictoryRate,

}