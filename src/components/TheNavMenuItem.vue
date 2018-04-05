<template>
  <router-link
    @:click.native="closeMenu"
    class="navbar-item"
    :to="url"
  >
    <div class="menu-item">
      <b-icon
        :pack="pack"
        :icon="icon"
        :size="size"
        :type="type"
      />
      <h2>{{ text }}</h2>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'NavMenuItem',
  props: {
    url: {
      type: String,
      default: '/'
    },
    pack: {
      type: String,
      default: 'fab'
    },
    icon: {
      type: String,
      default: 'font-awesome-flag'
    },
    size: {
      type: String,
      default: 'is-small'
    },
    type: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: 'Menu Item'
    }
  },
  methods: {
    closeMenu: function () {
      this.navIsActive = false
    }
  }
}
</script>
