<template>
  <div class="bottom-navbar" style="height: 60px;">
    <va-tabs v-model="value" grow hide-slider>
      <template #tabs>
        <va-tab v-for="tab in tabs" :key="tab.icon" color="info">
          <i :class="tab.icon"></i>
        </va-tab>
      </template>
    </va-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: 0,
      tabs: [
        { icon: 'fas fa-plane icon_nav' },
        { icon: 'fas fa-user icon_nav' }
      ]
    }
  },
  name: 'AppNavigation'
}
</script>

<style>
.bottom-navbar {
  position: fixed !important;
  bottom: 0 !important;
  top: auto !important;
  width: 100%;
  height: 70px;
  padding: 10px 0 0;
  background: #BCDEE0;
}
.icon_nav{
  font-size: 24px;
}
</style>
