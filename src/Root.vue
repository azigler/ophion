<template>
  <div id="root">
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
body {
  background-image: linear-gradient(141deg, #dfd8d9 0%, whitesmoke 71%, white 100%);
}
#root {
  font-family: 'Source Sans Pro', sans-serif;
  text-align: center;
}
</style>
