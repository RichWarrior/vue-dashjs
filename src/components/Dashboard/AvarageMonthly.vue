<template>
  <v-hover v-slot:default="{hover}">
    <v-card :elevation="hover ? 12 : 2">
      <v-toolbar>
        <v-toolbar-title>
          <h1 class="title">Avarage Monthly Uploads</h1>
        </v-toolbar-title>
        <v-col class="text-right pa-1">
          <v-btn icon>
            <v-icon>fa fa-arrow-right</v-icon>
          </v-btn>
        </v-col>
      </v-toolbar>
      <v-card-text class="pa-0">
        <v-container fill-height>
          <v-row class="ma-0" align="center" justify="center">
            <v-col class="pa-1 text-center" cols="12">
              <v-progress-circular
                :rotate="360"
                :size="100"
                :width="15"
                :value="value"
                color="toolbarColor"
              >{{ value }}</v-progress-circular>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions class="pa-0">
        <v-row class="ma-0">
          <v-col class="pa-0" cols="12">
            <v-sheet color="#808080" max-width="100%" max-height="100%">
              <v-row class="ma-0">
                <v-col class="pa-1 text-left" cols="12">
                  <v-btn icon>
                    <v-icon color="white">fa fa-upload</v-icon>
                  </v-btn>
                  <span class="caption white--text">This Month 1000 Gb</span>
                </v-col>
              </v-row>
            </v-sheet>
          </v-col>
        </v-row>
      </v-card-actions>
    </v-card>
  </v-hover>
</template>

<script>
export default {
  data: () => ({
    value: 70
  })
};
</script>