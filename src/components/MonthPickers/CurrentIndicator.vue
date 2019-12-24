<template>
  <v-col class="pa-0" cols="12">
    <v-card>
      <v-toolbar>
        <v-toolbar-title>
          <h1 class="title">Month Pickers - Current Month Indicator</h1>
        </v-toolbar-title>
      </v-toolbar>
      <v-card-text class="pa-1">
        <v-row class="ma-0">
          <v-date-picker v-model="month1" :show-current="false" type="month" class="mb-2" width="100%"></v-date-picker>
          <v-date-picker v-model="month2" type="month" show-current="2013-07" width="100%"></v-date-picker>
        </v-row>
      </v-card-text>
    </v-card>
  </v-col>
</template>

<script>
  export default {
    data () {
      return {
        month1: new Date().toISOString().substr(0, 7),
        month2: '2013-09',
      }
    },
  }
</script>