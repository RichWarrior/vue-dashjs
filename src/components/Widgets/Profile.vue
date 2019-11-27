<template>
  <v-hover v-slot:default="{hover}">
    <v-card :elevation="hover ? 12 : 2">
      <v-card-text>
        <v-row class="ma-0">
          <v-col class="pa-1 text-center" cols="6">
            <v-avatar size="128">
              <v-img src="http://themicon.co/theme/angle/v4.6/vue/img/user/09.jpg"></v-img>
            </v-avatar>
          </v-col>
          <v-col class="pa-1 text-center" cols="6">
            <v-col class="pa-1 text-left" cols="12">
              <h1 class="title black--text">Peggy Peters</h1>
            </v-col>
            <v-col class="pa-1 text-left" cols="12">
              <v-icon>fa fa-map-marker</v-icon>
              <span class="subtitle-1 ml-1">ASD, Qwerty</span>
            </v-col>
            <v-col class="pa-1 text-left" cols="12">
              <v-icon>fab fa-twitter</v-icon>
              <span class="subtitle-1 ml-1">@asdasd</span>
            </v-col>
            <v-col class="pa-1 text-left" cols="12">
              <v-icon>fa fa-envelope</v-icon>
              <span class="subtitle-1 ml-1">asdasd@gmail.com</span>
            </v-col>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions class="pa-0">
        <v-sheet color="black" width="100%">
          <v-row>
            <v-col class="text-center">
              <h1 class="title white--text">700</h1>
              <h1 class="caption white--text">Followers</h1>
            </v-col>
            <v-col class="text-center">
              <h1 class="title white--text">1500</h1>
              <h1 class="caption white--text">Following</h1>
            </v-col>
            <v-col class="text-center">
              <h1 class="title white--text">510</h1>
              <h1 class="caption white--text">Loved</h1>
            </v-col>
          </v-row>
        </v-sheet>
      </v-card-actions>
    </v-card>
  </v-hover>
</template>