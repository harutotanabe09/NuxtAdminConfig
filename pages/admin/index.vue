<template>
  <div class="container">
    <div>
      <h1 class="title">ip-adress</h1>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  layout: 'index',
  async asyncData({ $axios }) {
    const getRes = await $axios.get(
      'https://jsondata.okiba.me/v1/json/z9Hu6180423002129'
    )
    console.log(getRes)
    await $axios.get
      .get('https://httpbin.org/get')
      .then((res) => console.log(res.data.origin))
  },
  data(): {} {
    return {
      currentTab: 'basic',
      tabs: [
        {
          name: '基本情報設定',
          label: 'basic',
        },
        {
          name: 'アカウント設定',
          label: 'account',
        },
        {
          name: '上司設定',
          label: 'senior',
        },
      ],
      loading: false,
    }
  },
  methods: {},
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
