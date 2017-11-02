import { hit } from '../Deal'


const hitButton = () => {

  const hitButton = document.getElementById('hit')

  hitButton.onclick = () => hit('player')

}


const initListeners = () => {

  hitButton()

}

export default {

  initListeners: initListeners

}