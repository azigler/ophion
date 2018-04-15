<template>
  <div class="tile box bold purple">
    <div class="top">
      {{ topContent }}
    </div>
    <div class="bottom">
      {{ botContent }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModalLevelUp',
  data () {
    const topContent = 'top content'
    const botContent = 'bottom content'

    return { topContent, botContent }
  }
}
</script>

<style lang="scss" scoped>
// TODO: customize styles

.top {
  min-height: 6rem;
  text-align: center;
  padding: 0.5rem;
}

.bottom {
  min-height: 6rem;
  text-align: center;
  padding: 0.5rem;
}
</style>
