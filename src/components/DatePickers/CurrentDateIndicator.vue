<template>
  <v-col class="pa-0" cols="12">
    <v-card width="100%">
      <v-toolbar>
        <v-toolbar-title>
          <h1 class="title">Date Picker Current Date Indicator</h1>
        </v-toolbar-title>
      </v-toolbar>
      <v-card-text class="pa-1">
        <v-col class="pa-1" cols="12">
          <v-date-picker v-model="date" show-current="2013-07-13" width="100%"></v-date-picker>
        </v-col>
      </v-card-text>
    </v-card>
  </v-col>
</template>
<script>
export default {
  data() {
    return {
      date: new Date().toISOString().substr(0, 10)
    };
  }
};
</script>