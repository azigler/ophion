<template>
  <div class="tile box bold purple">
    <div class="top">
      {{ topContent }}
    </div>
    <div class="bottom">
      {{ botContent }}
    </div>
    <p
      v-for='(reward, index) in rewards'
      :key='index'
      v-bind='reward'
    >
      {{ reward.name }}: {{ reward.value }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'ModalLevelUp',
  props: {
    topContent: {
      type: String,
      default: 'MISSING TOP CONTENT'
    },
    botContent: {
      type: String,
      default: 'MISSING BOTTOM CONTENT'
    }
  },
  data () {
    return {
      rewards: [ {name: 'minerals', value: 50}, {name: 'energy', value: 100} ]
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
