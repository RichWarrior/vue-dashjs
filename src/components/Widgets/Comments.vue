<template>
  <v-hover v-slot:default="{hover}">
    <v-card :elevation="hover? 12: 2">
      <v-card-text class="pa-0">
        <v-sheet color="toolbarColor" height="100%" width="100%" class="pa-2">
          <v-row class="ma-0" justify="center" align="center">
            <v-col class="pa-1 text-left" cols="6">
              <v-icon size="64" color="white">fa fa-comments</v-icon>
            </v-col>
            <v-col class="pa-2 text-right" cols="6">
              <h1 class="display-1 white--text">26</h1>
              <h1 class="title white--text">New Comments!</h1>
            </v-col>
          </v-row>
        </v-sheet>
      </v-card-text>
      <v-card-text class="pa-0">
        <v-sheet color="sidebarColor" height="100%" width="100%" class="pa-2">
          <v-row class="ma-0" justify="center" align="center">
            <v-col class="pa-1 text-left" cols="6">
              <h1 class="caption white--text">View Details</h1>
            </v-col>
            <v-col class="pa-1 text-right" cols="6">
              <v-btn icon small>
                <v-icon color="white">fa fa-arrow-right</v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-sheet>
      </v-card-text>
    </v-card>
  </v-hover>
</template>