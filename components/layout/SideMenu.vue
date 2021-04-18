<template>
  <div class="wrapper">
    <div class="side-menu">
      <div class="title">Title</div>
      <div v-for="item in menu" :key="item.key" class="column">
        <div>{{ item.title }}</div>
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
    return {}
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
