<template>
  <v-col class="pa-0" cols="12">
    <v-card class="elevation-6" width="100%">
      <v-toolbar>
        <v-toolbar-title>
          <h1 class="title">Date Picker Colors</h1>
        </v-toolbar-title>
      </v-toolbar>
      <v-card-text class="pa-1">
        <v-row class="ma-0">
          <v-col class="pa-0 text-center" cols="12">
            <v-date-picker v-model="picker" width="100%" class="mb-1" color="green lighten-1"></v-date-picker>
            <v-date-picker v-model="picker2" width="100%" color="green lighten-1" header-color="primary"></v-date-picker>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-col>
</template>

<script>
  export default {
    data () {
      return {
        picker: new Date().toISOString().substr(0, 10),
        picker2: new Date().toISOString().substr(0, 10),
      }
    },
  }
</script>