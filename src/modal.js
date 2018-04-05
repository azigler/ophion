import { ModalProgrammatic } from 'buefy'
import { store } from '@/store'

export default {
  scanModal () {
    ModalProgrammatic.open({
      content: `<p class="tile box log-modal">
      <span>Welcome...</span>
      </p>`,
      // remove 'outside' after testing
      canCancel: ['x', 'escape', 'outside']
    })
  },
  logModal (key) {
    if (store.getters.getLog[key].hasModal) {
      ModalProgrammatic.open({
        content: `<p class="tile box log-modal">
        <span>${store.getters.getLog[key].text}</span>
        </p>`,
        canCancel: ['x', 'escape', 'outside']
      })
    }
  }
}
