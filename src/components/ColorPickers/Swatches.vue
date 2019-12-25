<template>
  <v-col class="pa-0" cols="12">
    <v-card width="100%">
      <v-toolbar>
        <v-toolbar-title>
          <h1 class="title">Color Pickers Swatches</h1>
        </v-toolbar-title>
      </v-toolbar>
      <v-card-text class="pa-1">
        <v-row class="ma-0" justify="space-around">
          <v-color-picker class="ma-2" show-swatches></v-color-picker>
          <v-color-picker class="ma-2" :swatches="swatches" show-swatches></v-color-picker>
          <v-color-picker class="ma-2" show-swatches swatches-max-height="300px"></v-color-picker>
        </v-row>
      </v-card-text>
    </v-card>
  </v-col>
</template>