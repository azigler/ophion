<template>
  <div id="root" class="hero is-bold is-light">
    <top-nav/>
      <div id="router">
        <router-view/>
      </div>
    <bot-footer/>
  </div>
</template>

<script>
import Nav from '@/components/topNav'
import Footer from '@/components/botFooter'

export default {
  name: 'Root',
  components: {'top-nav': Nav, 'bot-footer': Footer}
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
#root {
  min-height: 100vh;
  font-family: 'Source Sans Pro', sans-serif;
  text-align: center;
}
#router {
  padding: 4em 0;
}
</style>
