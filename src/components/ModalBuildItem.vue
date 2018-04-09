<template>
  <div
    v-if="level >= levelReq"
    class="tile panel box is-inline-block build-item "
  >
    <h4 class="header">{{ name }}</h4>
    <p>{{ desc }}</p>

    <h4 class="cost">cost</h4>
    <div
      v-for="(value, key) in cost"
      :key="key"
    >
      <span class="key">{{ key }}</span>: <span>{{ value }}</span>
    </div>

    <button
      class="button is-small is-primary is-pulled-right"
      @click="build(name, cost)"
    >
      build
    </button>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'ModalBuildMenuItem',
  computed: mapState([
    'resources', 'level'
  ]),
  props: {
    name: {
      type: String,
      default: 'TestBuyItem'
    },
    desc: {
      type: String,
      default: 'Test Buy Item'
    },
    cost: {
      type: Object,
      default: function () { return {} }
    },
    levelReq: {
      type: Number,
      default: 1
    }
  },
  methods: {
    build (name, cost) {
      // check if can build
      for (let resource in cost) {
        if (this.resources[resource] >= cost[resource]) {
          console.log(`pass: enough ${resource} for ${name}`)
        } else {
          console.log(`fail: enough ${resource} for ${name}`)
          return
        }
      }
      // now actually build
      for (let resource in cost) {
        this.$store.commit('increment', { property: resource, value: -cost[resource], stash: 'resources' })
      }
      console.log(`built: ${name}`)

      // TODO: add structure to structures panel
      this.$store.commit('addStructure', {name, value: 1})
    }
  }
}
</script>

<style lang="scss" scoped>
.build-item {
  min-width: 100%;
  background: rgba(173, 193, 188, 0.6);

  .header {
    font-weight: bold;
  }

  .cost {
    font-weight: bold;
    margin-top: 1rem;
  }
}
</style>
