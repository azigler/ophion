import { ModalProgrammatic } from 'buefy'
import { store } from '@/store'

export default {
  logModal (key) {
    ModalProgrammatic.open({
      content: `<p class="tile box log-modal">
      <span>${store.getters.getLog[key].text}</span>
      </p>`,
      canCancel: ['x', 'escape', 'outside']
    })
  }
}
