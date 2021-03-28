<template>
  <div class="container">
    <div>
      <h1 class="title">admin-project</h1>
      <app-button type="danger">ボタン</app-button><br />
      <app-button type="secondary">ボタン</app-button><br />
      <app-button type="primary">ボタン</app-button><br />
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import AppButton from '~/components/ui/AppButton.vue'

export default Vue.extend({
  components: { AppButton },
})
</script>

<style scoped="scss">
.container {
  display: flex;
  min-height: 100vh;
  margin: 0 auto;
  text-align: center;
  justify-content: center;
  align-items: center;
}

.title {
  display: block;
  font-family: sans-serif;
  font-size: 100px;
  font-weight: 300;
  letter-spacing: 1px;
}

.subtitle {
  padding-bottom: 15px;
  font-size: 42px;
  font-weight: 300;
  word-spacing: 5px;
}

.links {
  padding-top: 15px;
}
</style>
