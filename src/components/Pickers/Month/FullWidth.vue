<template>
  <v-row class="ma-0">
    <v-col class="pa-1" cols="12">
      <v-hover v-slot:default="{hover}">
        <v-card :elevation="hover ? 12 : 2">
          <v-toolbar>
            <v-toolbar-title>
              <h1 class="title">Full Width</h1>
            </v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-row class="ma-0">
              <v-col class="pa-0 text-center">
                <v-date-picker
                  v-model="date"
                  full-width
                  :landscape="$vuetify.breakpoint.smAndUp"
                  class="mt-4"
                ></v-date-picker>
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
    date: new Date().toISOString().substr(0, 10)
  })
};
</script>