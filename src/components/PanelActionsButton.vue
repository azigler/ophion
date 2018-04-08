<template>
  <button
    class="button is-accent"
    @click="method"
  >
    {{ title }}
  </button>
</template>

<script>
export default {
  name: 'PanelActionsButton',
  props: {
    method: {
      type: Function,
      default: function () { console.log('test') }
    },
    title: {
      type: String,
      default: 'Action'
    }
  }
}
</script>

<style lang="scss" scoped>
button {
  &.is-accent {
    margin: 0.25rem;
  }
}
</style>
