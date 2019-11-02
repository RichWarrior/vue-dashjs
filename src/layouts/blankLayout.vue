<template>
  <v-app>
    <v-content class="mb-5">
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </v-content>
    <dashjs-footer :drawerStatus="drawer"></dashjs-footer>
  </v-app>
</template>

<script>
export default {
  data:() => ({
    drawer:false
  })
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>