<template>
  <nav
    class="navbar"
    role="navigation"
    aria-label="main navigation"
  >
    <div
      class="navbar-brand"
      :class="{'is-active': navIsActive}"
    >
      <router-link
        class="navbar-item"
        to="/"
      >
        <b-icon
          pack="fab"
          icon="quinscape"
          size="is-small"
          class="navbar-item"
        />
        <h1>Ophion</h1>
      </router-link>
      <div
        class="navbar-burger burger"
        @click="toggleMenu"
        :class="{'is-active': navIsActive}"
        data-target="mainNav"
      >
        <span />
        <span />
        <span />
      </div>
    </div>
    <div
      id="mainNav"
      class="navbar-menu is-bold is-primary"
      :class="{'is-active': navIsActive}"
    >
      <div class="navbar-end">
        <nav-menu-item
          v-for="(item, index) in menu"
          :key="index"
          v-bind="menu[index]"
        />
        <a class="navbar-item">
          <div class="menu-item">
            <b-icon
              pack="fab"
              icon="discord"
              size="is-small"
            />
            Discord
          </div>
        </a>
      </div>
    </div>
  </nav>
</template>

<script>
import TheNavMenuItem from '@/components/TheNavMenuItem'

const aboutMenuItem = {
  url: '/about',
  pack: 'fa',
  icon: 'indent',
  text: 'About'
}

const guideMenuItem = {
  url: '/guide',
  pack: 'fa',
  icon: 'book',
  text: 'Guide'
}

export default {
  name: 'TheNav',
  data () {
    return {
      navIsActive: false,
      menu: [
        aboutMenuItem,
        guideMenuItem
      ]
    }
  },
  methods: {
    toggleMenu: function () {
      this.navIsActive = !this.navIsActive
    }
  },
  components: {'nav-menu-item': TheNavMenuItem}
}
</script>

<style lang="scss">
.navbar-brand {
  border-bottom: 1px dotted white;

  &.is-active {
    border-bottom: initial;
  }

  h1 {
    font-weight: bold;
  }

  .navbar-burger {
    color: $white;
    margin-top: 0.3rem;
  }
}

#mainNav.is-active {
  border-bottom: 1px white dotted;
}

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
    color: $primary;

    span {
      color: $primary;
    }
  }
}
</style>
