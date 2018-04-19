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
  name: 'ModalScanRegion',
  props: {
    topContent: {
      type: String,
      default: 'MISSING TOP CONTENT'
    },
    botContent: {
      type: String,
      default: 'MISSING BOTTOM CONTENT'
    }
  }
}
</script>

<style lang="scss" scoped>
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
