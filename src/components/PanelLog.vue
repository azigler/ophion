<template>
  <section class="is-parent tile is-6">
    <div class="panel log tile is-child box">
      <h3>
        Log
      </h3>
      <p
        v-for="(entry, key) in this.log"
        :key="key"
        :class="[entry.hasModal ? 'has-modal' : '', 'log-entry']"
        @click="logModal(key)"
      >
        {{ entry.text }}
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
  ]),
  methods: {
    logModal (key) {
      if (this.log[key].hasModal) {
        this.$modal.open({
          content: `<p class="tile box log-modal">
            <span>${this.log[key].text}</span>
          </p>`,
          canCancel: ['x', 'escape', 'outside']
        })
      }
    }
  }
}
</script>

<style lang="scss">
.panel.log {
  display: grid;
  max-height: 19rem;
  overflow-y: scroll;

  .log-entry {
    text-align: left;
    font-size: 14px;
    font-style: italic;
    margin: 0;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;

    @include touch {
      padding: 0.5rem 0;
    }

    &.has-modal {
      &:hover {
        cursor: pointer;
        color: $primary-invert;
        font-weight: bold;
      }
    }
  }
}

.box {
  &.log-modal {
    background-color:$accent;
    color: $white;
  }
}
</style>
