<template>
  <div class="side-menu-item">
    <transition name="fade-animation">
      <span class="title">{{ item.title }}</span>
    </transition>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'SideMenuItem',
  props: {
    item: {
      type: Array,
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
.wrapper {
  position: fixed;
  width: 250px;
  height: 100%;
  padding: 0;
  background: $bg-side-menu;

  > .side-menu {
    position: absolute;
    top: 0;
    bottom: 0;
    padding: 0;
    margin: 0;
    overflow-x: hidden;
    overflow-y: auto;
    text-indent: 20px;
    list-style: none;

    > .title {
      height: 35px;
      font-size: $font-size-11;
      color: $text-app-button-disable;

      &.fade-animation-enter-active {
        transition: opacity 0.15s ease, visibility 0.15s ease;
      }

      &.fade-animation-leave-active {
        transition: opacity 0.15s ease, visibility 0.15s ease;
      }
    }
  }
}
</style>
