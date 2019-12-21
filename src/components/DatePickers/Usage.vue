<template>
  <v-col class="pa-0" cols="12">
    <v-card class="elevation-6" width="100%">
      <v-toolbar>
        <v-toolbar-title>
          <h1 class="title">Date Picker Usage</h1>
        </v-toolbar-title>
      </v-toolbar>
      <v-card-text class="pa-1">
        <v-date-picker width="100%" v-model="picker"></v-date-picker>
      </v-card-text>
    </v-card>
  </v-col>
</template>

<script>
export default {
  data: () => ({
    picker: new Date().toISOString().substr(0, 10)
  })
};
</script>