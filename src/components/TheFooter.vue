<template>
  <footer class="footer">
    <div class="container">
      <div class="content">
        <span class="is-pulled-left">{{ regionName }}</span>
        <span class="is-pulled-right lvl">level {{ level }}</span>
        <progress
          class="progress"
          :value="exp"
          :max="maxExp"
        >
          {{ (exp/maxExp * 100) }}%
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
    'regionName', 'level', 'exp', 'maxExp'
  ])
}
</script>

<style lang="scss" scoped>
.footer {
  border-top: 1px dotted $secondary;
  padding: 0.5rem 1rem 1rem;
  left: 0;
  right: 0;
  z-index: 30;
  bottom: 0;
  position: fixed;

  .content {
    color: white;
    font-size: 14px;

    .lvl {
      font-style: italic;
      font-size: 12px;
    }
  }
}
</style>
