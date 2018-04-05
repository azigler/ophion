export function logModal(key) => {
  if (this.$store.log[key].hasModal) {
	this.$modal.open({
	  content: `<p class="tile box log-modal">
		<span>${this.log[key].text}</span>
	  </p>`,
	  canCancel: ['x', 'escape', 'outside']
	})
  }
}
