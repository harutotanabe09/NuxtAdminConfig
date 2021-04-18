<template>
  <div class="wrapper">
    <div
      class="side-menu"
      :class="sidebarClass"
      :style="[{ 'max-width': sidebarWidth }]"
    >
      <div class="title">Title</div>
      <div class="list">
        <div>aaa1</div>
      </div>
      <div class="list">
        <div>aaa2</div>
      </div>
      <div class="list">
        <div>aaa3</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'SideMenu',
  props: {
    menu: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      mobileItem: null,
      mobileItemPos: 0,
      mobileItemHeight: 0,
      mobileItemTimeout: null,
      activeShow: null,
      parentHeight: 0,
      parentWidth: 0,
      parentOffsetTop: 0,
      parentOffsetLeft: 0,
    }
  },
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

  .side-menu {
    position: absolute;
    top: 0;
    bottom: 0;
    padding: 0;
    margin: 0;
    overflow-x: hidden;
    overflow-y: auto;
    text-indent: 20px;
    list-style: none;

    .title {
      height: 35px;
      font-size: 12px;
      line-height: 40px;
      color: $text-app-button-disable;
    }
  }
}
</style>
