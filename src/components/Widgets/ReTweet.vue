<template>
  <v-hover v-slot:default="{hover}">
    <v-card :elevation="hover?12:2">
      <v-card-text class="pa-0">
        <v-sheet color="#38A1F3" height="100%" width="100%">
          <v-row justify="center" align="center">
            <v-col class="text-center" cols="12">
              <h1 class="display-1 white--text">300</h1>
            </v-col>
            <v-col class="pa-1 text-center" cols="12">
              <h1 class="title white--text">Re-Tweets</h1>
            </v-col>
            <v-col class="text-center" cols="12">
              <v-icon color="white">fab fa-twitter</v-icon>
            </v-col>           
          </v-row>
        </v-sheet>
      </v-card-text>
    </v-card>
  </v-hover>
</template>