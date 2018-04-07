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

  .animation-content.modal-content {
    box-shadow: -4px 5px 13px 1px #1b0a0a;
  }

  .box {
    background-color: rgba(173, 193, 188, 0.6);
  }

  // bold purple modal
  .animation-content.modal-content > .bold.purple {
    background: linear-gradient(to bottom, #642b73, #c6426e);
    color: $white;
    display: block!important;
    border: 2px solid #1b0a0a;
    border-bottom: none;
    box-shadow: 6px 5px 3px #1b0a0a;
  }

  .panel {
    h3 {
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

#router {
  height: 89vh;
}
</style>
