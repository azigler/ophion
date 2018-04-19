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
import ModalLevelUp from '@/components/ModalLevelUp'
import { mapState } from 'vuex'

export default {
  name: 'TheFooter',
  computed: mapState([
    'regionName', 'level', 'exp', 'maxExp'
  ]),
  watch: {
    exp () {
      if (this.exp >= this.maxExp) {
        // increase level
        this.$store.commit('increment', { property: 'level', value: 1 })

        // calculate leftover experience
        const leftoverExp = this.exp - this.maxExp
        this.$store.commit('setValue', { property: 'exp', value: leftoverExp })

        // calculate new max experience
        const newMaxExp = Math.floor(100 * Math.pow(this.level, (3 / 2)))
        this.$store.commit('setValue', { property: 'maxExp', value: newMaxExp })

        // calculate level up rewards
        if (this.level % 2 === 0) {
          // TODO: change this to call an action that returns a 'rewards' array
          this.$store.commit('increment', { property: 'minerals', value: 100 * this.level, stash: 'resources' })
          this.$store.commit('increment', { property: 'energy', value: 50 * this.level, stash: 'resources' })
        } else {
          this.$store.commit('increment', { property: 'minerals', value: 50 * this.level, stash: 'resources' })
          this.$store.commit('increment', { property: 'energy', value: 100 * this.level, stash: 'resources' })
        }

        // TODO: write level up modal content
        const props = {
          topContent: 'top content test',
          botContent: 'bottom content my new test'
          // TODO: add rewards object
        }

        // announce level up and launch modal
        console.log('level up!')
        // TODO: save level up modal content to log
        this.$store.commit('addLog', { text: `You reached level ${this.level}!`, modal: 'levelUp', props })
        this.$modal.open({
          component: ModalLevelUp,
          props
        })
      }
    }
  }
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
