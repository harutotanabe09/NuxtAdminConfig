<template>
  <div class="side-menu-link">
    <nuxt-link :to="url">
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
