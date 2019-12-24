<template>
  <v-col class="pa-0" cols="12">
    <v-card>
      <v-toolbar>
        <v-toolbar-title>
          <h1 class="title">Month Pickers Read Only</h1>
        </v-toolbar-title>
      </v-toolbar>
      <v-card-text class="pa-1">
        <v-row class="ma-0">
          <v-date-picker v-model="date" type="month" width="100%" readonly></v-date-picker>
        </v-row>
      </v-card-text>
    </v-card>
  </v-col>
</template>

<script>
  export default {
    data () {
      return {
        date: new Date().toISOString().substr(0, 7),
      }
    },
  }
</script>