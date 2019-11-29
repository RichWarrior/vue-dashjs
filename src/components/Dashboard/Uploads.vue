<template>
  <v-hover v-slot:default="{hover}">
    <v-card :elevation="hover ? 12 :2">
      <v-card-text class="pa-0">
        <v-sheet color="toolbarColor" max-height="100%" max-width="100%">
          <v-row class="ma-0">
            <v-col class="text-center" cols="4">
              <v-icon color="white" size="48">fa fa-upload</v-icon>
            </v-col>
            <v-col class="text-left" cols="7">
              <h1 class="title white--text">1700</h1>
              <h1 class="title white--text">UPLOADS</h1>
            </v-col>
          </v-row>
        </v-sheet>
      </v-card-text>
    </v-card>
  </v-hover>
</template>