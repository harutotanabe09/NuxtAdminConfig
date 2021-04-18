<template>
  <div class="side-menu-link">
    <!-- TODO: nuxt link how to pass -->
    <nuxt-link to=":url">
      {{ url }}
      <slot />
    </nuxt-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'SideMenuLink',
  props: {
    url: {
      type: String,
      required: true,
    },
  },
  data() {},
  computed: {},
  watch: {},
  methods: {},
})
</script>

<style lang="scss" scoped>
.empty {
  position: relative;
  display: block;
  width: 100%;
}
</style>
