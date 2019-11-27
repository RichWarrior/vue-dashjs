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