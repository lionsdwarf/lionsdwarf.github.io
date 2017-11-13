/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CARD_PROPS = exports.ACE_VALUE = exports.CSS_CARD_OFFSET = exports.DEALER_STAND_MIN = exports.BUST_LIMIT = exports.FACE_VALUE = exports.ROUNDS_UNTIL_SHUFFLE = exports.GAME_PARTICIPANTS = exports.SHUFFLE_AND_DEAL = exports.DEAL = exports.ACE = exports.DEALER = exports.PLAYER = void 0;
var PLAYER = 'player';
exports.PLAYER = PLAYER;
var DEALER = 'dealer';
exports.DEALER = DEALER;
var ACE = 'A';
exports.ACE = ACE;
var DEAL = 'Deal';
exports.DEAL = DEAL;
var SHUFFLE_AND_DEAL = 'Shuffle & Deal';
exports.SHUFFLE_AND_DEAL = SHUFFLE_AND_DEAL;
var GAME_PARTICIPANTS = [PLAYER, DEALER];
exports.GAME_PARTICIPANTS = GAME_PARTICIPANTS;
var ROUNDS_UNTIL_SHUFFLE = 6;
exports.ROUNDS_UNTIL_SHUFFLE = ROUNDS_UNTIL_SHUFFLE;
var FACE_VALUE = 10;
exports.FACE_VALUE = FACE_VALUE;
var BUST_LIMIT = 21;
exports.BUST_LIMIT = BUST_LIMIT;
var DEALER_STAND_MIN = 17;
exports.DEALER_STAND_MIN = DEALER_STAND_MIN;
var CSS_CARD_OFFSET = 100;
exports.CSS_CARD_OFFSET = CSS_CARD_OFFSET;
var ACE_VALUE = {
  high: 11,
  low: 1
};
exports.ACE_VALUE = ACE_VALUE;
var CARD_PROPS = {
  title: [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'],
  suit: ['spades', 'hearts', 'diamonds', 'clubs']
};
exports.CARD_PROPS = CARD_PROPS;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Game = _interopRequireDefault(__webpack_require__(2));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.onload = new _Game.default();

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _constants = __webpack_require__(0);

var _Deck = _interopRequireDefault(__webpack_require__(3));

var _Hand = _interopRequireDefault(__webpack_require__(4));

var _ui = _interopRequireDefault(__webpack_require__(5));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Game =
/*#__PURE__*/
function () {
  function Game() {
    _classCallCheck(this, Game);

    (0, _ui.default)('init', this);
    this.victoryCount = {
      player: 0,
      dealer: 0
    };
    this.shouldShuffle = true;
    this.dealHands();
  }

  _createClass(Game, [{
    key: "shuffleDeck",
    value: function shuffleDeck() {
      this.roundsSinceShuffle = 1;
      this.deck = new _Deck.default();
      this.shouldShuffle = false;
    }
  }, {
    key: "dealHands",
    value: function dealHands() {
      this.hands = clearHands();
      this.shouldShuffle && this.shuffleDeck(); //pass last victor--must update losing player's hand UI

      (0, _ui.default)('renderNewRound', this);

      for (var i = 0; i < 2; i++) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = _constants.GAME_PARTICIPANTS[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var _participant = _step.value;
            //if Player is dealt blackjack, nextTurn() deals final Dealer card, so don't call it again.
            !this.hands[_constants.PLAYER].blackjack && this.dealCard(_participant);
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      }
    }
  }, {
    key: "dealCard",
    value: function dealCard(participant) {
      var card = this.deck.drawCard();
      this.hands[participant].setCard(card);
      (0, _ui.default)('renderCard', this, {
        participant: participant,
        card: card
      });
      this.victoryCheck(participant);
    }
  }, {
    key: "setStandPlayer",
    value: function setStandPlayer() {
      this.hands[_constants.PLAYER].setStand();

      this.victoryCheck();
    }
  }, {
    key: "victoryCheck",
    value: function victoryCheck(participant) {
      isGameOver(this.hands) ? this.declareVictor() : this.nextTurn(participant === _constants.PLAYER);
    }
  }, {
    key: "nextTurn",
    value: function nextTurn(isDealersFirstTurn) {
      if (shouldDealerPlay(this.hands)) {
        isDealersFirstTurn && (0, _ui.default)('renderDealerHand', this);
        this.dealCard(_constants.DEALER);
      }
    }
  }, {
    key: "declareVictor",
    value: function declareVictor() {
      this.roundsSinceShuffle++;
      this.shouldShuffle = shouldShuffle(this.roundsSinceShuffle);
      this.victor = determineVictor(this.hands);
      this.victoryCount[this.victor] += 1;
      (0, _ui.default)('renderVictory', this);
    }
  }]);

  return Game;
}(); //logic


exports.default = Game;

var isPlayerFinished = function isPlayerFinished(hands) {
  return hands[_constants.PLAYER].blackjack || hands[_constants.PLAYER].stand;
};

var shouldDealerPlay = function shouldDealerPlay(hands) {
  return !hands[_constants.DEALER].blackjack && !hands[_constants.DEALER].stand && isPlayerFinished(hands);
};

var isFirstDealerCard = function isFirstDealerCard(participant, cards) {
  return participant === _constants.DEALER && cards.length === 1;
};

var isGameOver = function isGameOver(hands) {
  return hands[_constants.DEALER].blackjack || hands[_constants.DEALER].bust || hands[_constants.PLAYER].bust || hands[_constants.DEALER].stand && (hands[_constants.PLAYER].stand || hands[_constants.PLAYER].blackjack);
};

var shouldShuffle = function shouldShuffle(roundsSinceShuffle) {
  return roundsSinceShuffle === _constants.ROUNDS_UNTIL_SHUFFLE;
}; //returns string


var determineVictor = function determineVictor(hands) {
  return hands[_constants.DEALER].bust || !hands[_constants.PLAYER].bust && hands[_constants.PLAYER].cumulativeVal > hands[_constants.DEALER].cumulativeVal ? _constants.PLAYER : _constants.DEALER;
};

var clearHands = function clearHands() {
  return {
    player: new _Hand.default(_constants.PLAYER),
    dealer: new _Hand.default(_constants.DEALER)
  };
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _constants = __webpack_require__(0);

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Deck =
/*#__PURE__*/
function () {
  function Deck() {
    _classCallCheck(this, Deck);

    this.cards = generateShuffledDeck();
  }

  _createClass(Deck, [{
    key: "drawCard",
    value: function drawCard() {
      return this.cards.splice(0, 1)[0];
    }
  }]);

  return Deck;
}();

exports.default = Deck;

var generateShuffledDeck = function generateShuffledDeck() {
  var cardVals = buildCardVals();
  var deck = buildDeck(cardVals);
  return shuffleDeck(deck);
};

var shuffleDeck = function shuffleDeck(deck) {
  var shuffledDeck = [];
  var unshuffledCount = deck.length;
  var selectedIndex;

  while (unshuffledCount) {
    selectedIndex = Math.floor(Math.random() * unshuffledCount--);
    shuffledDeck.push(deck.splice(selectedIndex, 1)[0]);
  }

  return shuffledDeck;
};

var buildDeck = function buildDeck(cardVals) {
  var deck = [];
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = cardVals[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var _cardVal = _step.value;
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = _constants.CARD_PROPS.suit[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var _suit = _step2.value;
          deck.push(_extends({
            suit: _suit
          }, _cardVal));
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return deck;
};

var buildCardVals = function buildCardVals() {
  return _constants.CARD_PROPS.title.map( //if face or ace card, include it's value. otherwise value is equal to title.
  function (cardTitle) {
    return typeof cardTitle === 'number' ? {
      value: cardTitle
    } : {
      value: cardTitle === _constants.ACE ? _constants.ACE_VALUE.high : _constants.FACE_VALUE,
      face: cardTitle
    };
  });
  return cardVals;
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _constants = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Hand =
/*#__PURE__*/
function () {
  function Hand(participant) {
    var _this = this;

    _classCallCheck(this, Hand);

    this.cards = [];
    this.shouldToggleAce = participant === _constants.DEALER ? shouldToggleAceDealer : bustWithoutToggle;
    this.shouldStand = participant === _constants.DEALER ? function () {
      return shouldStandDealer(_this.cumulativeVal);
    } : function () {
      return false;
    };
  }

  _createClass(Hand, [{
    key: "setCard",
    value: function setCard(card) {
      this.cards.push(card);
      this.updateProps();
      this.shouldStand() && this.setStand();
    }
  }, {
    key: "updateProps",
    value: function updateProps() {
      this.cumulativeVal = calcCumulativeVal(this.cards);
      toggleableAce(this.cards) && this.shouldToggleAce(this.cumulativeVal) && this.toggleAceAndUpdateProps();
      this.bust = didBust(this.cumulativeVal);
      this.blackjack = hasBlackjack(this.cumulativeVal);
    }
  }, {
    key: "toggleAceAndUpdateProps",
    value: function toggleAceAndUpdateProps() {
      this.cards = toggleAce(this.cards);
      this.updateProps();
    }
  }, {
    key: "setStand",
    value: function setStand() {
      this.stand = true;
    }
  }]);

  return Hand;
}(); //logic


exports.default = Hand;

var bustWithoutToggle = function bustWithoutToggle(cumulativeVal) {
  return cumulativeVal > _constants.BUST_LIMIT;
};

var shouldToggleAceDealer = function shouldToggleAceDealer(cumulativeVal) {
  return bustWithoutToggle(cumulativeVal) || cumulativeVal === _constants.DEALER_STAND_MIN;
};

var hasBlackjack = function hasBlackjack(cumulativeVal) {
  return cumulativeVal === _constants.BUST_LIMIT;
};

var didBust = function didBust(cumulativeVal) {
  return cumulativeVal > _constants.BUST_LIMIT;
}; //participant specific logic


var shouldStandDealer = function shouldStandDealer(cumulativeVal) {
  return cumulativeVal < _constants.BUST_LIMIT && cumulativeVal >= _constants.DEALER_STAND_MIN;
}; //util


var toggleAce = function toggleAce(cards) {
  var newHand = []; //if multiple aces in hand, only toggle 1

  var aceToggled = false;
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = cards[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var _card = _step.value;

      if (!aceToggled && _card.face && _card.face === _constants.ACE && _card.value === _constants.ACE_VALUE.high) {
        _card.value = 1;
        aceToggled = true;
      }

      newHand.push(_card);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return newHand;
};

var toggleableAce = function toggleableAce(cards) {
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = cards[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var _card2 = _step2.value;

      if (_card2.face && _card2.face === _constants.ACE && _card2.value === _constants.ACE_VALUE.high) {
        return true;
      }
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
        _iterator2.return();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  return false;
}; //accumulate value of cards in hand


var calcCumulativeVal = function calcCumulativeVal(cards) {
  var cumulativeVal = 0;
  var _iteratorNormalCompletion3 = true;
  var _didIteratorError3 = false;
  var _iteratorError3 = undefined;

  try {
    for (var _iterator3 = cards[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
      var _card3 = _step3.value;
      cumulativeVal += _card3.value;
    }
  } catch (err) {
    _didIteratorError3 = true;
    _iteratorError3 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
        _iterator3.return();
      }
    } finally {
      if (_didIteratorError3) {
        throw _iteratorError3;
      }
    }
  }

  return cumulativeVal;
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _constants = __webpack_require__(0);

var _Hands = _interopRequireDefault(__webpack_require__(6));

var _Stats = _interopRequireDefault(__webpack_require__(7));

var _Buttons = _interopRequireDefault(__webpack_require__(8));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UIUpdate = function UIUpdate(type, Game, payload) {
  switch (type) {
    case 'init':
      _Buttons.default.initListeners(Game);

      break;

    case 'renderNewRound':
      _Buttons.default.setTextDeal(_constants.DEAL);

      _Buttons.default.setHitStandState(true);

      _Hands.default.clear(Game.victor);

      break;

    case 'renderCard':
      _Hands.default.dealCard(payload.participant, payload.card, Game.hands[payload.participant].cards.length - 1);

      break;

    case 'renderVictory':
      Game.shouldShuffle && _Buttons.default.setTextDeal(_constants.SHUFFLE_AND_DEAL);

      _Hands.default.declareVictor(Game.victor);

      _Stats.default.update(Game.victor, Game.victoryCount, Game.shouldShuffle);

    //no 'break' statement as renderDealerHand should occur on renderVictory, in case it hasn't been called yet

    case 'renderDealerHand':
      _Buttons.default.setHitStandState(false);

      _Hands.default.revealDealer(Game.hands[_constants.DEALER].cards[0]);

  }
};

var _default = UIUpdate;
exports.default = _default;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _constants = __webpack_require__(0);

// hand opposite the victor's
var opposingHands = {
  dealer: document.querySelector('#player'),
  player: document.querySelector('#dealer') //hand methods:

};

var declareLoser = function declareLoser(victor) {
  opposingHands[victor].style.opacity = 0.5;
};

var resetLostHand = function resetLostHand(victor) {
  opposingHands[victor].style.opacity = 1;
};

var dealCard = function dealCard(participant, card, cardNum) {
  var handEl = document.querySelector('#hands #' + participant); //if card is dealer's first, it's face down--do not reveal yet

  var cardEl = participant === _constants.DEALER && !handEl.children.length ? buildCardFaceDown() : buildCardFaceUp(card, cardNum);
  handEl.append(cardEl);
};

var clear = function clear(victor) {
  var hands = document.querySelectorAll('#hands ol');
  victor && resetLostHand(victor);
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = hands[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var _hand = _step.value;
      _hand.innerHTML = '';
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
};

var revealDealer = function revealDealer(card) {
  var cardEl = document.querySelector('.faceDown');

  if (cardEl) {
    cardEl.classList.remove('faceDown');
    cardEl.append(constructCardVal(card));
    cardEl.append(constructCardVal(card));
  }
}; //card methods:


var calcCardDisplayOffset = function calcCardDisplayOffset(cardNum) {
  //number of pixels card gets shifted, to display it's value
  return '-' + _constants.CSS_CARD_OFFSET * cardNum + 'px';
};

var constructCardVal = function constructCardVal(card) {
  var val = document.createElement('div');
  val.innerHTML = card.face ? card.face : card.value;
  val.className += ' suit' + card.suit;
  return val;
};

var buildCardFaceUp = function buildCardFaceUp(card, cardNum) {
  var cardEl = document.createElement('li');
  cardEl.append(constructCardVal(card));
  cardEl.append(constructCardVal(card));
  cardEl.className += ' card';
  cardEl.style.left = calcCardDisplayOffset(cardNum);
  return cardEl;
};

var buildCardFaceDown = function buildCardFaceDown() {
  var cardEl = document.createElement('li');
  cardEl.className += 'card faceDown';
  return cardEl;
};

var _default = {
  revealDealer: revealDealer,
  dealCard: dealCard,
  clear: clear,
  declareVictor: declareLoser
};
exports.default = _default;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _constants = __webpack_require__(0);

var victoryRateEl = document.querySelector('#victory-rate');

var calcVictoryRate = function calcVictoryRate(victories) {
  var rounds = victories[_constants.PLAYER] + victories[_constants.DEALER];
  return Math.round(victories[_constants.PLAYER] / rounds * 100);
};

var updateVictoryRate = function updateVictoryRate(victor, victories) {
  victoryRateEl.innerHTML = calcVictoryRate(victories) + ' % win-rate';
};

var _default = {
  update: updateVictoryRate
};
exports.default = _default;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.buttons = void 0;

var _constants = __webpack_require__(0);

var Game;
var buttons = {
  hit: document.getElementById('hit'),
  stand: document.getElementById('stand'),
  deal: document.getElementById('deal')
};
exports.buttons = buttons;

var setTextDeal = function setTextDeal(text) {
  buttons.deal.innerHTML = text;
};

var initHit = function initHit() {
  buttons.hit.onclick = function () {
    return Game.dealCard(_constants.PLAYER);
  };
};

var initStand = function initStand() {
  buttons.stand.onclick = function () {
    return Game.setStandPlayer();
  };
};

var initDeal = function initDeal() {
  buttons.deal.onclick = function () {
    return Game.dealHands();
  };
};

var updateHitStand = function updateHitStand(bool) {
  buttons.hit.disabled = !bool;
  buttons.hit.style.display = bool ? '' : 'none';
  buttons.stand.disabled = !bool;
  buttons.stand.style.display = bool ? '' : 'none';
};

var updateDeal = function updateDeal(bool) {
  buttons.deal.disabled = bool;
  buttons.deal.style.display = bool ? 'none' : '';
};

var setState = function setState(bool) {
  updateHitStand(bool);
  updateDeal(bool);
};

var initListeners = function initListeners(game) {
  Game = game;
  initHit();
  initStand();
  initDeal();
};

var _default = {
  initListeners: initListeners,
  setHitStandState: setState,
  setTextDeal: setTextDeal
};
exports.default = _default;

/***/ })
/******/ ]);