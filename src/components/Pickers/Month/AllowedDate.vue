<template>
  <v-row class="ma-0">
    <v-col class="pa-1" cols="12">
      <v-hover v-slot:default="{hover}">
        <v-card :elevation="hover ? 12 :2">
          <v-toolbar>
            <v-toolbar-title>
              <h1 class="title">Date pickers - Allowed dates</h1>
            </v-toolbar-title>
          </v-toolbar>
          <v-card-text class="pa-1">
            <v-row class="ma-0">
              <v-col class="pa-0 text-center" cols="12">
                <v-date-picker
                  v-model="date"
                  :allowed-dates="allowedDates"
                  class="mt-4"
                  min="2016-06-15"
                  max="2018-03-20"
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
    date: "2018-03-02"
  }),
  methods: {
    allowedDates: val => parseInt(val.split("-")[2], 10) % 2 === 0
  }
};
</script>