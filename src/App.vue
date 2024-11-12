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
  font-family: "SF Pro Rounded", ui-rounded, system-ui, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  font-style: normal;
  margin: 0px;
  padding-top: 0px;
}

main {
  margin: 0px;
  padding-top: 20px;
}

a:active, /* активная/посещенная ссылка */
a:hover,  /* при наведении */
a {
  text-decoration: none;
  color: #ff9d6d;
}
</style>
