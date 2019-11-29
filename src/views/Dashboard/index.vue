<template>
  <div>
    <v-row class="ma-2">
      <v-col class="pa-1" cols="12" lg="3" md="3">
        <uploads />
      </v-col>
      <v-col class="pa-1" cols="12" lg="3" md="3">
        <quota />
      </v-col>
      <v-col class="pa-1" cols="12" lg="3" md="3">
        <reviews />
      </v-col>
      <v-col class="pa-1" cols="12" lg="3" md="3">
        <times />
      </v-col>
      <v-col class="pa-1" cols="12" lg="3" md="4">
        <comments />
      </v-col>
      <v-col class="pa-1" cols="12" lg="3" md="4">
        <comments />
      </v-col>
      <v-col class="pa-1" cols="12" lg="3" md="4">
        <comments />
      </v-col>
      <v-col class="pa-1 hidden-md-and-down" cols="12" lg="3" md="4">
        <comments />
      </v-col>
      <v-col class="pa-1" cols="12" lg="3" md="4">
        <basket />
      </v-col>
      <v-col class="pa-1" cols="12" lg="3" md="4">
        <basket />
      </v-col>
      <v-col class="pa-1" cols="12" lg="3" md="4">
        <basket />
      </v-col>
      <v-col class="pa-1 hidden-md-and-down" cols="12" lg="3" md="4">
        <basket />
      </v-col>
      <v-col class="pa-1" cols="12" lg="8" md="8">
        <visitorStatistic />
      </v-col>
      <v-col class="pa-1 hidden-sm-and-down" cols="12" lg="4" md="4">
        <avaragemonthly />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import uploads from "@/components/Dashboard/Uploads";
import quota from "@/components/Dashboard/Quota";
import reviews from "@/components/Dashboard/Reviews";
import times from "@/components/Dashboard/Time";
import visitorStatistic from "@/components/Dashboard/VisitorStatistics";
import avaragemonthly from "@/components/Dashboard/AvarageMonthly";
import comments from "@/components/Widgets/Comments";
import basket from '@/components/Widgets/Basket';
export default {
  components: {
    uploads,
    quota,
    reviews,
    times,
    visitorStatistic,
    avaragemonthly,
    comments,
    basket
  }
};
</script>