<template>
  <v-col class="pa-0" cols="12">
    <v-card width="100%">
      <v-toolbar>
        <v-toolbar-title>
          <h1 class="title">Month Pickers Colors</h1>
        </v-toolbar-title>
      </v-toolbar>
      <v-card-text class="pa-1">
        <v-row class="ma-0" justify="space-around">
          <v-date-picker v-model="picker" class="mb-2" type="month" color="green lighten-1" width="100%"></v-date-picker>
          <v-date-picker
            v-model="picker2"
            type="month"
            color="green lighten-1"
            header-color="primary"
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
    picker: new Date().toISOString().substr(0, 7),
    picker2: new Date().toISOString().substr(0, 7)
  })
};
</script>