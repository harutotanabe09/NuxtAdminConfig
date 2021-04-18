<template>
  <div class="side-menu-item">
    <div>{{ item.title }}</div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'SideMenuItem',
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
      font-size: 12px;
      line-height: 40px;
      color: $text-app-button-disable;
    }
  }
}
</style>
