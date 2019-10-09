<template>
  <div class="toolbar">
    <v-app-bar app dark color="toolbarColor">
      <v-app-bar-nav-icon text @click="drawerStatusChange">
        <v-icon>fa fa-bars</v-icon>
      </v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase hidden-lg-and-up">
        <span>Dash</span>
        <span class="font-weight-black">JS</span>
      </v-toolbar-title>
      <v-toolbar-title class="text-uppercase hidden-md-and-down" v-if="!drawerStatus">
        <span>Dash</span>
        <span class="font-weight-black">JS</span>
      </v-toolbar-title>
      <v-row class="ml-2 hidden-sm-and-down">
        <v-btn icon>
          <v-icon small>fa fa-user</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon small>fa fa-lock</v-icon>
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon small>fa fa-search</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon small>fa fa-bell</v-icon>
        </v-btn>
      </v-row>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "Toolbar",
  props: {
    drawerStatus: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    drawerStatusChange() {
      this.$emit("DrawerStatusChange");
    }
  }
};
</script>