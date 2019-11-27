<template>
  <v-hover v-slot:default="{hover}">
    <v-card :elevation="hover? 12 :2">
      <v-card-text class="pa-0">
        <v-row class="ma-0">
          <v-col cols="12" class="text-right pa-1">
            <v-btn color="green" dark>
              <span class="caption">FOLLOW</span>
            </v-btn>
          </v-col>
          <v-col cols="4" class="text-center pa-0 ma-1"> 
            <v-avatar size="128">
              <v-img src="http://themicon.co/theme/angle/v4.6/vue/img/user/06.jpg"></v-img>
            </v-avatar>
          </v-col>
          <v-col cols="6" class="text-center ma-1">
            <h1 class="title black--text">Sarah Pierce</h1>
            <h1 class="caption">150 Following/100 Followers</h1>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-hover>
</template>