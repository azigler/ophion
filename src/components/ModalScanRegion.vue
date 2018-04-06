<template>
  <div class="tile box scan-region">
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
import grammar from '@/assets/grammar'

const corpus = tracery.createGrammar(grammar)
corpus.addModifiers(tracery.baseEngModifiers)


export default {
  name: 'ModalScanRegion',
  data () {
    const topContent = corpus.flatten(`#initialLog.capitalize#, and soon you are thrust into a strange world.`)
    const botContent = corpus.flatten(`With your remaining battery power, your equipment pings the home server,
      but receives no response. You name this mysterious world after the matron beacons of Xi-Rangus IX, #regionName#.`)

    return { topContent, botContent }
  }
}
</script>

<style lang="scss" scoped>
.scan-region {
  background-color: #5ac9c9;
  color: $black;
  display: block!important;

  .top {
    min-height: 6rem;
    text-align: center;
    border-radius: 1rem 1rem 0 0;
    border: 2px solid white;
    border-bottom: none;
    padding: 0.5rem;
  }

  .bottom {
    min-height: 6rem;
    text-align: center;
    border: 2px solid white;
    border-top: 2px dotted white;
    padding: 0.5rem;
  }
}
</style>
