<template>
  <v-hover v-slot:default="{hover}">
    <v-card :elevation="hover ? 12 : 2">
      <v-card-text>
        <v-row class="ma-0">
          <v-col cols="12" class="pa-1">
            <barChart />
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions>
        <v-row class="ma-0">
          <v-col class="text-center pa-0">
            <h1 class="title black--text">15080</h1>
            <h1 class="caption">Shots</h1>
          </v-col>
          <v-divider vertical></v-divider>
          <v-col class="text-center  pa-0">
            <h1 class="title black--text">12000</h1>
            <h1 class="caption">Likes</h1>
          </v-col>
          <v-divider vertical></v-divider>
          <v-col class="text-center  pa-0">
            <h1 class="title black--text">5100</h1>
            <h1 class="caption">Comments</h1>
          </v-col>
        </v-row>
      </v-card-actions>
    </v-card>
  </v-hover>
</template>

<script>
import barChart from "@/components/Charts/Bar";
export default {
  components: {
    barChart
  }
};
</script>