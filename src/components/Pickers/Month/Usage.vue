<template>
  <v-row class="ma-0" align="center" justify="center">
    <v-col class="pa-0 text-center" cols="12">
      <v-hover v-slot:default="{hover}">
        <v-card :elevation="hover ? 12 :2">
          <v-toolbar>
            <v-toolbar-title>
              <h1 class="title">Usage</h1>
            </v-toolbar-title>
          </v-toolbar>
          <v-card-text class="pa-0">
            <v-row class="ma-1">
              <v-col class="pa-0 text-center" cols="12">
                <v-date-picker class="mb-2" v-model="picker"></v-date-picker>
              </v-col>
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
    picker: new Date().toISOString().substr(0, 10)
  })
};
</script>