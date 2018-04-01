<template>
  <main>
    <section>
      <span>Guide - Coming Soon!</span>
      <div class="tile is-ancestor">
        <div class="tile is-4 is-vertical is-parent">
          <div class="tile is-child box">
            <p class="title">One</p>
          </div>
          <div class="tile is-child box">
            <p class="title">Two</p>
          </div>
        </div>
        <div class="tile is-parent">
          <div class="tile is-child box">
            <p class="title">Three</p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: 'PageGuide'
}
</script>

<style lang="scss" scoped>
// Base styles
main {
  margin: 0.8rem 0.8rem 4rem 0.8rem;

  .box {
    background-color: rgba(173, 193, 188, 0.6);
  }
}
</style>
