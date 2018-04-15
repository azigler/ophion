<template>
  <section class="is-parent tile is-3">
    <div class="panel structures tile is-child box">
      <h3>
        Structures
      </h3>
      <table class="structure-list">
        <tr
          v-for="(value, key) in this.$store.state.structures"
          v-if="value > 0"
          :key="key"
        >
          <td class="key">{{ getName(key) }}</td>
          <transition
            name="flash"
            mode="out-in"
          >
            <td
              class="value"
              :key="value"
            >
              {{ value }}
            </td>
          </transition>
        </tr>
      </table>
    </div>
  </section>
</template>

<script>
import structureList from '@/assets/structures'

export default {
  name: 'PanelStructures',
  methods: {
    getName (key) {
      return structureList[key].name
    }
  }
  // TODO: add onBuy logic to check name against collection of functions and eval if found
}
</script>

<style lang="scss">
.structures {
  display: grid;

  .structure-list {
    display: inline-table;
    width: 100%;

    td {
      &.key {
        padding-right: 1.5rem;
      }
      &.value {
        padding-left: 4rem;
        min-width: 4rem;
        text-align: right;
      }
    }
  }
}
</style>
