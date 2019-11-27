<template>
  <v-hover v-slot:default="{hover}">
    <v-card :elevation="hover ? 12 : 2">
      <v-card-text class="pa-0">
        <v-row class="ma-0">
          <v-col cols="3" class="text-center pa-2">
            <v-icon size="48" color="primary">fa fa-trophy</v-icon>
          </v-col>
          <v-divider vertical class="ma-0 pa-0"></v-divider>
          <v-col cols="8" class="pa-2">
            <h1 class="display-1 black--text">10</h1>
            <h1 class="caption">ACHIEVEMENTS</h1>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-hover>
</template>