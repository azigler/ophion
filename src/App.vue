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

html {
  // Prevent overscroll
  overflow-y: hidden!important;
  height: 100%;
}

body {
  // Prevent overscroll
  height: 100%;
  overflow: auto;
  background: #0cebeb;
  background: linear-gradient(to bottom, #29ffc6, #20e3b2, #0cebeb);

  .box {
    background-color: rgba(173, 193, 188, 0.6);
  }

  .panel {
    h3 {
      font-size: 13px;
      text-decoration: underline;
      text-align: left;
      margin-bottom: 0.2rem;
    }
  }
}

#app {
  font-family: 'Source Sans Pro', sans-serif;
  text-align: center;
}
</style>
