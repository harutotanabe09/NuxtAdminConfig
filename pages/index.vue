<template>
  <div class="container">
    <div class="main">
      <side-menu />
      <div class="body">
        <Nuxt class="content" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import SideMenu from '~/components/layout/SideMenu.vue'

export default Vue.extend({
  components: { SideMenu },
})
</script>
