<template>
  <div class='app-card'>
    <div class='scope'>{{ card.score }}</div>
    <div class='comment'>{{ card.comment }}</div>
  </div>
</template>

<script lang='ts'>
import Vue, { PropType } from 'vue'

interface Dataset {
  score: number
  comment: string
}

export default Vue.extend({
  name: 'AppCard',
  props: {
    card: {
      type: Object as PropType<Dataset>,
      required: true
    }
  },
  data() {
  },
  computed: {},
  watch: {},
  methods: {}
})
</script>

<style lang='scss' scoped>
.app-card {
  background: $bg-card-white;
  border: 1px solid transparent;
  border-color: $text-app-button-default;
  border-radius: 2px;
  box-shadow: $box-shadow-app-card-block;

  > .scope {
    display: block;
    font-size: 28px;
  }
}
</style>
