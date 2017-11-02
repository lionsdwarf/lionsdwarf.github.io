import { hit } from '../Deal'

import { PLAYER } from '../constants'

const hitButton = () => {

  const hitButton = document.getElementById('hit')

  hitButton.onclick = () => hit(PLAYER)

}


const initListeners = () => {

  hitButton()

}

export default {

  initListeners: initListeners

}