<template>
  <div class='dashboard-index'>
    Blank
    <app-card :card='card'>
      <div>class</div>
    </app-card>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import AppCard from '~/components/dashboard/AppCard.vue'

export default Vue.extend({
  name: 'DashboardIndex',
  components: { AppCard },
  layout: 'custom',
  computed: {
    card() {
      return {
        score: 80,
        comment: 'User',
        icon: 'user'
      }
    }
  }
})
</script>
<style lang='scss' scoped>
.dashboard-index {
  position: relative;
  margin-top: 70px;
}
</style>
