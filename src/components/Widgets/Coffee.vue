<template>
  <v-hover v-slot:default="{hover}">
    <v-card :elevation="hover ? 12 : 2">
      <v-card-text>
        <v-row justify="end" class="mr-2">
          <v-icon size="32">fa fa-coffee</v-icon>
        </v-row>
        <h1 class="title black--text">300</h1>
        <h1 class="caption">Coffee cups per day</h1>
        <v-progress-linear color="light-green" height="10" value="20" striped></v-progress-linear>
      </v-card-text>
    </v-card>
  </v-hover>
</template>