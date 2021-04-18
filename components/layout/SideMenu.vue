<template>
  <div class="wrapper">
    <div class="side-menu">
      <div class="title">Title</div>
      <side-menu-item
        v-for="item in menu"
        :key="item.key"
        class="sidemenu"
        :item="item"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import SideMenuItem from '~/components/layout/SideMenuItem.vue'

export default Vue.extend({
  name: 'SideMenu',
  components: { SideMenuItem },
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
      height: 65px;
      font-size: $font-size-large;
      color: $text-app-button-disable;
    }
  }
}
</style>
