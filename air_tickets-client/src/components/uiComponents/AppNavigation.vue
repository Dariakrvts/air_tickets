<template>
      <va-tabs v-model="value" grow>
        <template #tabs>
          <va-tab v-for="tab in tabs" :key="tab.icon">
            <i :class="tab.icon"></i>
          </va-tab>
        </template>
      </va-tabs>
</template>

<script>
export default {
  data() {
    return {
      value: 0,
      tabs: [ 
        { icon: 'fas fa-plane' },
        { icon: 'fas fa-user' }
      ]
    }
  },
  name: 'AppNavigation'
}
</script>

<style>
</style>