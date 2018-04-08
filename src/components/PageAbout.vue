<template>
  <main>
    <section>
      <p class="about">About - Coming Soon!</p>
    </section>
  </main>
</template>

<script>
export default {
  name: 'PageAbout',
  head: {
    title: function () {
      return {
        inner: this.$store.state.head.inner,
        separator: '-',
        complement: 'About'
      }
    }
  }
}
</script>
