<template>
  <div
    v-if="level >= requirement.level"
    class="tile panel box is-inline-block build-item "
  >
    <h4 class="header">{{ name }}</h4>
    <p>{{ desc }}</p>

    <h4 class="cost">cost</h4>
    <div
      v-for="(value, key) in scaledCost"
      :key="key"
    >
      <span class="key">{{ key }}</span>: <span>{{ value }}</span>
    </div>

    <button
      class="button is-small is-primary is-pulled-right"
      @click="build(id, scaledCost)"
    >
      build
    </button>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'ModalBuildMenuItem',
  data () {
    const scaledCost = this.returnScaledCost(this.id, this.cost, this.$store.state.level)
    return { scaledCost }
  },
  computed: mapState([
    'resources', 'level'
  ]),
  props: {
    id: {
      type: String,
      default: '<MISSING>'
    },
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
    requirement: {
      type: Object,
      default: function () { return {} }
    }
  },
  methods: {
    returnScaledCost (id, cost, level) {
      const scaledCost = {}
      for (let resource in cost) {
        const structCount = this.$store.state.structures[id]
        const scaled = Math.ceil(Math.pow(cost[resource], structCount) * Math.pow(level, 1.1))
        if (scaled > 0) {
          scaledCost[resource] = scaled
        } else {
          scaledCost[resource] = 1
        }
      }
      return scaledCost
    },
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
      this.$store.commit('increment', { property: 'exp', value: 10 })
      this.$store.commit('addStructure', {name, value: 1})

      // update cost
      this.scaledCost = this.returnScaledCost(this.id, this.cost, this.$store.state.level)

      // apply build effects
      switch (name) {
        case 'tentaCLAW': {
          this.$store.commit('increment', { property: 'minerals', value: 1, stash: 'rates' })
          break
        }
        case 'solarTurf': {
          this.$store.commit('increment', { property: 'energy', value: 1, stash: 'rates' })
          break
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.build-item {
  min-width: 100%;
  background: $transBox;
  background-image: $hexagonSVG;

  .header {
    font-weight: bold;
  }

  .cost {
    font-weight: bold;
    margin-top: 1rem;
  }
}
</style>
