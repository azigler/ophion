<template>
  <div class="tile box bold purple">
    <div class="top">
      {{ topContent }}
    </div>
    <div class="bottom">
      {{ botContent }}
    </div>
  </div>
</template>

<script>
import tracery from 'tracery-grammar'
import baseGrammar from '@/assets/grammar/base'
import initGrammar from '@/assets/grammar/init'
import { store } from '@/store'

const grammar = {...initGrammar, ...baseGrammar}

const corpus = tracery.createGrammar(grammar)
corpus.addModifiers(tracery.baseEngModifiers)

export default {
  name: 'ModalScanRegion',
  data () {
    const topContent = corpus.flatten(`#fragment.capitalize#, and soon you are thrust into a strange world.`)
    const botContent = corpus.flatten(`With your remaining battery power, your equipment pings the home server,
      but receives no response. You name this #mysterious# world after ${store.getters.getNamingInspiration}, ${store.getters.getRegionName}.`)

    return { topContent, botContent }
  }
}
</script>

<style lang="scss" scoped>
.top {
  min-height: 6rem;
  text-align: center;
  padding: 0.5rem;
}

.bottom {
  min-height: 6rem;
  text-align: center;
  padding: 0.5rem;
}
</style>
