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
  props: {
    topContent: {
      type: String,
      default: 'top content'
    },
    botContent: {
      type: String,
      default: 'bot content'
    }
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
