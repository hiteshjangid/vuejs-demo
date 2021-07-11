<template>
  <div id="app">
    <ContentsLayout>
      <template v-slot:contents>
        <router-view></router-view>
      </template>
    </ContentsLayout>
  </div>
</template>

<script>

import { ContentsLayout } from './components/layout-components/'


export default {
  name: 'App',
  components: {
    ContentsLayout,
  }
}
</script>

<style type="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
}
</style>
