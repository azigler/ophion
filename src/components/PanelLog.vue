<template>
  <section class="is-parent tile is-6">
    <div class="panel log tile is-child box">
      <h3>
        Log
      </h3>
      <p
        v-for="(entry, key) in this.$store.state.log"
        :key="key"
        class="log-entry"
      >
        {{ entry }}
      </p>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'PanelLog',
  computed: mapState([
    'log'
  ])
}
</script>

<style lang="scss">
.panel.log {
  display: grid;

  .log-entry {
    text-align: left;
    font-size: 14px;
    font-style: italic;
    margin: 0;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
}
</style>
