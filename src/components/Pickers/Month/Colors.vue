<template>
  <v-row class="ma-0">
    <v-col class="pa-1" cols="12">
      <v-hover v-slot:default="{hover}">
        <v-card :elevation="hover ? 12 :2">
          <v-toolbar>
            <v-toolbar-title>
              <h1 class="title">Date pickers - Colors</h1>
            </v-toolbar-title>
          </v-toolbar>
          <v-card-text class="pa-1">
            <v-row class="ma-0" justify="space-around">
              <v-date-picker class="mb-1" v-model="picker" color="green lighten-1"></v-date-picker>
              <v-date-picker v-model="picker2" color="green lighten-1" header-color="primary"></v-date-picker>
            </v-row>
          </v-card-text>
        </v-card>
      </v-hover>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    picker: new Date().toISOString().substr(0, 10),
    picker2: new Date().toISOString().substr(0, 10)
  })
};
</script>