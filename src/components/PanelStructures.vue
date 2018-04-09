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
          <td class="key">{{ key }}</td>
          <td
            class="value"
            :key="value"
          >
            {{ value }}
          </td>
        </tr>
      </table>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PanelStructures'
  // TODO: add onBuy logic to check name against collection of functions and eval if found
}
</script>

<style lang="scss">
.structures {
  display: grid;

  .structure-list {
    display: inline-table;

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
