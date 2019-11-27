<template>
  <v-hover v-slot:default="{hover}">
    <v-card :elevation="hover ? 12 : 2">
      <v-card-text>
        <v-row justify="end" class="mr-2">
          <v-icon size="32">fa fa-download</v-icon>
        </v-row>
        <h1 class="title black--text">1000 GB</h1>
        <h1 class="caption">Average Monthly Uploads</h1>
        <v-progress-linear color="light-blue" height="10" value="10" striped></v-progress-linear>
      </v-card-text>
    </v-card>
  </v-hover>
</template>