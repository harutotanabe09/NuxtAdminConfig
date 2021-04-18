<template>
  <div class="main">
    <side-menu :menu="menu" />
    <Nuxt class="container" />
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
}
</style>
<script lang="ts">
import Vue from 'vue'
import SideMenu from '~/components/layout/SideMenu.vue'

export default Vue.extend({
  components: { SideMenu },
  computed: {
    menu() {
      return [
        {
          href: '/home',
          title: 'ホーム',
          icon: 'home',
        },
        {
          href: '/home2',
          title: 'ホーム2',
          icon: 'home',
        },
      ]
    },
  },
})
</script>
