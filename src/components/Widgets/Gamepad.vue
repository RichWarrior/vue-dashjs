<template>
  <v-hover v-slot:default="{hover}">
    <v-card :elevation="hover ? 12 : 2">
      <v-card-text>
        <v-row justify="end" class="mr-2">
          <v-icon size="32">fa fa-gamepad</v-icon>
        </v-row>
        <h1 class="title black--text">99.999</h1>
        <h1 class="caption">Games played last month</h1>
        <v-progress-linear value="60" height="10" striped color="primary"></v-progress-linear>
      </v-card-text>
    </v-card>
  </v-hover>
</template>