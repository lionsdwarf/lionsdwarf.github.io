import { DEAL, SHUFFLE_AND_DEAL, DEALER } from '../constants';

import UIHands from './Hands';

import UIStats from './Stats';

import UIButtons from './Buttons';


const UIUpdate = (type, Game, payload) => {

  switch (type) {

    case 'init':

      UIButtons.initListeners(Game);

      break

    case 'renderNewRound':

      UIButtons.setTextDeal(DEAL);

      UIButtons.setHitStandState(true);

      UIHands.clear(Game.victor);

      break

    case 'renderCard':

      UIHands.dealCard(payload.participant, payload.card, Game.hands[payload.participant].cards.length - 1);

      break

    case 'renderVictory':

      Game.shouldShuffle && UIButtons.setTextDeal(SHUFFLE_AND_DEAL);

      UIHands.declareVictor(Game.victor);

      UIStats.update(Game.victor, Game.victoryCount, Game.shouldShuffle);

    //no 'break' statement as renderDealerHand should occur on renderVictory, in case it hasn't been called yet
    case 'renderDealerHand':

      UIButtons.setHitStandState(false);

      UIHands.revealDealer(Game.hands[DEALER].cards[0]);

  }

}


export default UIUpdate;
