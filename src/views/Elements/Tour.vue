<template>
  <v-row class="ma-0">
    <v-col class="pa-1" cols="12" lg="3" md="3">
      <uploads id="uploads" />
    </v-col>
    <v-col class="pa-1" cols="12" lg="3" md="3">
      <quota id="quota" />
    </v-col>
    <v-col class="pa-1" cols="12" lg="3" md="3">
      <reviews id="reviews" />
    </v-col>
    <v-col class="pa-1" cols="12" lg="3" md="3">
      <times id="times" />
    </v-col>
    <v-tour name="myTour" :steps="steps" :options="myOptions"></v-tour>
  </v-row>
</template>

<script>
import uploads from "@/components/Dashboard/Uploads";
import quota from "@/components/Dashboard/Quota";
import reviews from "@/components/Dashboard/Reviews";
import times from "@/components/Dashboard/Time";
export default {
  components: {
    uploads,
    quota,
    reviews,
    times
  },
  data: () => ({
    myOptions: {
      useKeyboardNavigation: true,
      highlight : true,
      labels: {
        buttonSkip: "Skip tour",
        buttonPrevious: "Previous",
        buttonNext: "Next",
        buttonStop: "Finish"
      }
    },
    steps: [
      {
        target: "#uploads", // We're using document.querySelector() under the hood
        content:'uploads Widget',        
      },
      {
        target: "#quota", // We're using document.querySelector() under the hood
        content:'quota Widget'
      },
      {
        target: "#reviews", // We're using document.querySelector() under the hood
        content:'reviews Widget'
      },
      {
        target: "#times", // We're using document.querySelector() under the hood
        content:'times Widget'
      }
    ]
  }),
  mounted: function() {
    this.$tours["myTour"].start();
  }
};
</script>
