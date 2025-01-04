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

<style lang="sass">
@use "@styles/variables" as *

#app
  display: flex
  flex-direction: column
  height: 100dvh
  font-family: "SF Pro Rounded", ui-rounded, system-ui, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center

body
  font-style: normal
  margin: 0
  padding-top: 0

main
  flex-grow: 1
  margin: 0
  padding-top: 60px

a
  text-decoration: none
  color: $blue

  &:visited
    color: $blue

  &:active,
  &:hover
    text-decoration: none
    color: $orange

  &:active
    opacity: 0.7
</style>
