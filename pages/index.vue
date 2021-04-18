<template>
  <div class="container">
    <div class="main">
      <div class="body">
        <Nuxt class="content" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  layout: 'custom',
})
</script>
