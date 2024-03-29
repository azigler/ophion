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
    let scaledCost = this.returnScaledCost(this.id, this.type, this.cost, this.$store.state.level)
    return { scaledCost }
  },
  computed: mapState([
    'resources', 'level'
  ]),
  props: {
    id: {
      type: String,
      default: 'MISSING ID'
    },
    name: {
      type: String,
      default: 'MISSING NAME'
    },
    type: {
      type: String,
      default: 'MISSING TYPE'
    },
    desc: {
      type: String,
      default: 'MISSING DESCRIPTION'
    },
    cost: {
      type: Object,
      default: function () { return {} }
    },
    requirement: {
      type: Object,
      default: function () { return { level: 1 } }
    }
  },
  watch: {
    level () {
      this.scaledCost = this.returnScaledCost(this.id, this.type, this.cost, this.$store.state.level)
    }
  },
  methods: {
    returnScaledCost (id, type, cost, level) {
      const scaledCost = {}
      for (let resource in cost) {
        let structCount = this.$store.state.structures[id]
        let scaled
        switch (type) {
          case 'storage': {
            structCount += 1
            scaled = Math.ceil(Math.pow(cost[resource], (structCount / 2)) * Math.pow(level, 2.2))
            break
          }
          case 'collector': {
            scaled = Math.ceil(Math.pow(cost[resource], structCount) * Math.pow(level, 1.1))
            break
          }
        }
        if (scaled > 0) {
          scaledCost[resource] = scaled
        } else {
          scaledCost[resource] = 1
        }
      }
      console.log('cost scaled...')
      return scaledCost
    },
    build (name, cost) {
      // check if can build
      this.scaledCost = this.returnScaledCost(this.id, this.type, this.cost, this.$store.state.level)
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
      this.scaledCost = this.returnScaledCost(this.id, this.type, this.cost, this.$store.state.level)

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
        case 'mineralSilo': {
          this.$store.commit('increment', { property: 'minerals', value: 50 * this.level, stash: 'storage' })
          break
        }
        case 'saltBattery': {
          this.$store.commit('increment', { property: 'energy', value: 50 * this.level, stash: 'storage' })
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
