<template>
  <div class="main">
    <side-menu :menu="menu" />
    <div class="body">
      <app-header />
      <Nuxt class="content" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.main {
  .body {
    position: fixed;
    left: 250px;
  }
}
</style>
<script lang="ts">
import Vue from 'vue'
import SideMenu from '~/components/layout/SideMenu.vue'
import AppHeader from '~/components/layout/AppHeader.vue'

export default Vue.extend({
  components: { AppHeader, SideMenu },
  computed: {
    menu() {
      return [
        {
          href: '/dashboard/',
          title: 'Dashboard',
          icon: 'home',
        },
        {
          href: '/table/',
          title: 'Table',
          icon: 'home',
        },
      ]
    },
  },
})
</script>
