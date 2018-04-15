<template>
  <section class="is-parent tile is-3">
    <div class="panel resources tile is-child box">
      <div>
        <h3>Resources</h3>
        <table class="resource-list">
          <tr
            v-for="(value, key) in this.$store.state.resources"
            v-if="value > 0"
            :key="key"
          >
            <td class="key">{{ key }}</td>
            <td
              class="rate"
              :class="aboveZero($store.state.rates[key])"
            >
              {{ $store.state.rates[key] }}/{{ heartrate }}s
            </td>
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
    </div>
  </section>
</template>

<script>
export default {
  name: 'PanelResources',
  computed: {
    heartrate: function () {
      return this.$store.state.heartrate / 1000
    }
  },
  methods: {
    aboveZero: function (key) {
      if (key <= 0) {
        return 'is-invisible'
      }
    }
  }
}
</script>

<style lang="scss">
.resources {
  display: grid;

  .resource-list {
    display: inline-table;
    width: 100%;

    td {
      &.key {
        padding-right: 1.5rem;
      }
      &.rate {
        margin-left: -4rem;
        margin-top: 1.2rem;
        display: inline-block;
        font-size: 10px;
        font-style: italic;
      }
      &.value {
        padding-left: 1.5rem;
        min-width: 4rem;
        text-align: right;
      }
    }
  }
}
</style>
