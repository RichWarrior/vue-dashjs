<template>
  <div class="toolbar">
      <v-app-bar app dark color="toolbarColor" class="elevation-3">
          <v-app-bar-nav-icon text @click="drawerStatusChange">
              <v-icon>fa fa-bars</v-icon>
          </v-app-bar-nav-icon>
          <v-toolbar-title class="text-uppercase">
              DashJs
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <v-row class="mr-2"></v-row>
      </v-app-bar>
  </div>
</template>

<script>
export default {
    name:'Toolbar',
    methods:{
        drawerStatusChange(){
            this.$emit('DrawerStatusChange')
        }
    }
}
</script>