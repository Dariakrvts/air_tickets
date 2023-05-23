<template>
    <div id="app">
     
    <router-view/>

   <app-navigation class="fixed-bottom"></app-navigation>

    </div>
 
</template>

<script>
import AppNavigation from './components/uiComponents/AppNavigation.vue';

export default {
  components: {
    AppNavigation,
  },
  data() {
    return {
    }
  },
  name: 'App'
}
</script>

<style>
.fixed-bottom {
  position: fixed !important;
  bottom: 0;
  left: 0;
  width: 100%;
  }
  </style>
