<template>
  <ABHeader></ABHeader>

  <main>
    <router-view></router-view>
  </main>

  <ABFooter></ABFooter>
</template>

<script>
import ABHeader from './components/ABHeader.vue'
import ABFooter from './components/ABFooter.vue'

export default {
  name: 'App',

  components: {
    ABHeader,
    ABFooter,
  }
}
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  height: 100dvh;
  font-family: "SF Pro Rounded", ui-rounded, system-ui, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

body {
  font-style: normal;
  margin: 0;
  padding-top: 0;
}

main {
  flex-grow: 1;
  margin: 0;
  padding-top: 60px;
}

a:active,
a:hover,
a {
  text-decoration: none;
  color: #ff9d6d;
}
</style>
