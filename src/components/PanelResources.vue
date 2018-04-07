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
              {{ $store.state.rates[key] }}/{{ heartbeat }}s
            </td>
            <transition
              name="slide-fade"
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
    heartbeat: function () {
      return this.$store.state.heartbeat / 1000
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
      }
    }
  }
}

.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for <2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
