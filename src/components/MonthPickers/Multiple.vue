<template>
  <v-col class="pa-0" cols="12">
    <v-card width="100%">
      <v-toolbar>
        <v-toolbar-title>
          <h1 class="title">Month Pickers Multiple</h1>
        </v-toolbar-title>
      </v-toolbar>
      <v-card-text class="pa-1">
        <v-row class="ma-0">
          <v-date-picker v-model="months" type="month" multiple width="100%"></v-date-picker>
        </v-row>
      </v-card-text>
    </v-card>
  </v-col>
</template>

<script>
export default {
  data: () => ({
    months: ["2018-09", "2018-10"]
  })
};
</script>