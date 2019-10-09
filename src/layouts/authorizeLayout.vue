<template>
  <div>
    <dashjs-toolbar v-on:DrawerStatusChange="DrawerStatusChange"></dashjs-toolbar>
    <dashjs-sidebar :drawerStatus="drawerStatus" v-on:transtionend="transtionend"></dashjs-sidebar>
  </div>
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