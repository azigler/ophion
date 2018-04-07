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
import { store } from '@/store'
import baseGrammar from '@/assets/grammar/base'
import initGrammar from '@/assets/grammar/init'

const grammar = {...initGrammar, ...baseGrammar}

const corpus = tracery.createGrammar(grammar)
corpus.addModifiers(tracery.baseEngModifiers)

export default {
  name: 'ModalScanRegion',
  data () {
    const topContent = corpus.flatten(`#initFragment.capitalize#, and #adverbialPhrase# you perceive #mysterious.a# new #world#.`)
    const botContent = corpus.flatten(`Using #longGizmo#, you #sendBeacon# to your origin,
      but you #noResponse#. You name this #mysterious# #world# after ${store.getters.getNamingInspiration}, ${store.getters.getRegionName}.`)

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
