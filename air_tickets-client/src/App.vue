<template>
  <div id="app">
    <router-view />
    <app-navigation></app-navigation>
  </div>
</template>


<script>
import AppNavigation from './components/uiComponents/AppNavigation.vue'
export default {
  components: {
    AppNavigation,
  },
  data() {
    return {}
  },
  name: 'App'
}
</script>

<style>

</style>
