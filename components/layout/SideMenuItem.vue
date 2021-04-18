<template>
  <div class="side-menu-item">
    <transition name="fade-animation">
      <side-menu-link :url="item.href">
        <span class="title">{{ item.title }}</span>
      </side-menu-link>
    </transition>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import SideMenuLink from '~/components/layout/SideMenuLink.vue'

export default Vue.extend({
  name: 'SideMenuItem',
  components: { SideMenuLink },
  props: {
    item: {
      type: Object,
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
.side-menu-item {
  position: relative;
  display: block;
  width: 100%;
}
</style>
