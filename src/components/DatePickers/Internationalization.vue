<template>
  <v-col class="pa-0" cols="12">
    <v-card class="elevation-6" width="100%">
      <v-toolbar>
        <v-toolbar-title>
          <h1 class="title">Date Pickers Internationalization</h1>
        </v-toolbar-title>
      </v-toolbar>
      <v-card-text class="pa-1">
        <v-row class="ma-0">
          <v-col class="pa-0 text-center" cols="12">
            <v-date-picker v-model="picker" class="mb-1" width="100%" :first-day-of-week="0" locale="tr"></v-date-picker>
            <v-date-picker v-model="picker" width="100%" :first-day-of-week="1" locale="en"></v-date-picker>
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
      }
    },
  }
</script>