<template>
  <v-col class="pa-0" cols="12">
    <v-card width="100%">
      <v-toolbar>
        <v-toolbar-title>
          <h1 class="title">Month Pickers Allowed Months</h1>
        </v-toolbar-title>
      </v-toolbar>
      <v-card-text class="pa-1">
        <v-row class="ma-0">
          <v-date-picker
            v-model="date"
            :allowed-dates="allowedMonths"
            type="month"
            class="mt-4"
            min="2017-06"
            max="2019-10"
            width="100%"
          ></v-date-picker>
        </v-row>
      </v-card-text>
    </v-card>
  </v-col>
</template>

<script>
export default {
  data: () => ({
    date: "2017-12"
  }),
  methods: {
    allowedMonths: val => parseInt(val.split("-")[1], 10) % 2 === 0
  }
};
</script>