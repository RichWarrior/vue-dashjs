<template>
  <v-col class="pa-0" cols="12">
    <v-card width="100%">
      <v-toolbar>
        <v-toolbar-title>
          <h1 class="title">Month Usage</h1>
        </v-toolbar-title>
      </v-toolbar>
      <v-card-text class="pa-1">
        <v-col class="pa-0" cols="12">
          <v-date-picker v-model="picker" locale="tr" type="month" width="100%"></v-date-picker>
        </v-col>
      </v-card-text>
    </v-card>
  </v-col>
</template>

<script>
  export default {
    data () {
      return {
        picker: new Date().toISOString().substr(0, 7),
      }
    },
  }
</script>