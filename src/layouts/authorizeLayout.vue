<template>
  <v-app>
    <dashjs-toolbar v-on:DrawerStatusChange="DrawerStatusChange" :drawerStatus="drawerStatus"></dashjs-toolbar>
    <dashjs-sidebar :drawerStatus="drawerStatus" v-on:transtionend="transtionend"></dashjs-sidebar>
    <v-content>
      <router-view></router-view>
    </v-content>
    <dashjs-footer :drawerStatus="drawerStatus"></dashjs-footer>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawerStatus: true
  }),
  methods: {
    DrawerStatusChange() {
      this.drawerStatus = !this.drawerStatus;
    },
    transtionend() {
      this.drawerStatus = false;
    }
  }
};
</script>