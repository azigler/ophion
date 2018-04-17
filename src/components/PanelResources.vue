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
                :class="valueClass(key, value)"
                :key="value"
              >
                {{ value }}
              </td>
            </transition>
            <span class="has-text-weight-bold">/</span>
            <td
              class="storage"
              :key="$store.state.storage[key]"
            >
              {{ $store.state.storage[key] }}
            </td>
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
    aboveZero (key) {
      if (key <= 0) {
        return 'is-invisible'
      }
    },
    valueClass (key, value) {
      if (value === this.$store.state.storage[key]) {
        return 'has-text-weight-bold'
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
      &.storage {
        font-size: 11px;
        vertical-align: baseline;
      }
    }
  }
}
</style>
