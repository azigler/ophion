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

// Sticky bottom footer
#root {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}
#router {
  flex: 1;
  margin-top: 50px;
}

// Root container
#root {
  font-family: 'Source Sans Pro', sans-serif;
  text-align: center;
  color: #181818;
}
</style>
