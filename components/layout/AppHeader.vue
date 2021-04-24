<template>
  <div class="app-haeder">
    <div class="wrapper">
      <div class="header">
        <div class="col">
          <div class="page">DashBoard Item</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'AppHeader',
})
</script>
<style lang="scss" scoped>
.app-haeder {
  > .wrapper {
    position: fixed;
    width: 100%;

    > .header {
      height: 60px;
      margin-bottom: 15px;
      background: $bg-header-white;
    }
  }
}
</style>
