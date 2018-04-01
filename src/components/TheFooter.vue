<template>
  <footer class="footer">
    <div class="container">
      <div class="content">
        <span class="is-pulled-left">{{ regionName }}</span>
        <span class="is-pulled-right">{{ credits }} credits</span>
        <progress
          class="progress is-tertiary"
          :value="progress"
          max="100"
        >
          {{ progress }}%
        </progress>
      </div>
    </div>
  </footer>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'TheFooter',
  computed: mapState([
    'regionName', 'credits', 'progress'
  ])
}
</script>

<style lang="scss" scoped>
.footer {
  font-weight: bold;
  border-top: 1px dotted white;
  padding: 0.5rem 1rem 1rem;
  left: 0;
  right: 0;
  z-index: 30;
  bottom: 0;
  position: fixed;

  .content {
    color: white;
    font-size: 14px;
  }
}
</style>
