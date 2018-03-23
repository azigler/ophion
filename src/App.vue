<template>
  <div id="app">
    <the-nav/>
    <div id="router">
      <router-view/>
    </div>
    <the-footer/>
  </div>
</template>

<script>
import TheNav from '@/components/TheNav'
import TheFooter from '@/components/TheFooter'

export default {
  name: 'App',
  components: {'the-nav': TheNav, 'the-footer': TheFooter}
}
</script>

<style lang='scss'>
@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');

// Prevent overscroll
html {
  overflow-y: hidden!important;
  height: 100%;
}
body {
  height: 100%;
  overflow: auto;
}

// Base styles
body {
  background-image: linear-gradient(141deg, #dfd8d9 0%, whitesmoke 71%, white 100%);
}
#app {
  font-family: 'Source Sans Pro', sans-serif;
  text-align: center;
}
</style>
