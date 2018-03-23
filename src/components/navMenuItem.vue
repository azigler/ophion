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
      default: 'is-light'
    },
    text: {
      type: String,
      default: 'Placeholder'
    }
  },
  methods: {
    closeMenu: function () {
      this.navIsActive = false
    }
  }
}
</script>

<style lang="scss" scoped>
.menu-item {
  justify-content: center;
  display: flex;

  .icon {
    padding-top: 0.375rem;
    margin-right: 0.5625rem;
  }
}

.navbar-item {
  &:hover {
    span {
      color: $accent!important;
    }
  }
}
</style>
