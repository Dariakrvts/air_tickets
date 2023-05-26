<template>
  <div id="app">

    <router-view />
    <app-navigation></app-navigation>
    <home-view></home-view>
    
  </div>
</template>

<script>
import AppNavigation from './components/uiComponents/AppNavigation.vue'
import HomeView from './views/HomeView.vue'

export default {
  components: {
    HomeView,
    AppNavigation
  },
  data() {
    return {}
  },
  name: 'App'
}
</script>

<style>

</style>
