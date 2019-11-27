<template>
  <div>
    <v-row class="ma-2">
      <v-col class="pa-1" cols="12" lg="4" md="4">
        <gamepad />
      </v-col>
      <v-col class="pa-1" cols="12" lg="4" md="4">
        <coffee />
      </v-col>
      <v-col class="pa-1" cols="12" lg="4" md="4">
        <storage />
      </v-col>
      <v-col class="pa-1" cols="12" lg="4" md="4">
        <connections />
      </v-col>
      <v-col class="pa-1" cols="12" lg="4" md="4">
        <star />
      </v-col>
      <v-col class="pa-1" cols="12" lg="4" md="4">
        <achievements />
      </v-col>
      <v-col class="pa-1" cols="12" lg="4" md="4">
        <Chart1 />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import gamepad from "@/components/Widgets/Gamepad";
import coffee from "@/components/Widgets/Coffee";
import storage from "@/components/Widgets/Storage";
import connections from "@/components/Widgets/Connections";
import star from "@/components/Widgets/Star";
import achievements from "@/components/Widgets/Achievements";
import Chart1 from '@/components/Widgets/Chart1';
export default {
  components: {
    gamepad,
    coffee,
    storage,
    connections,
    star,
    achievements,
    Chart1
  }
};
</script>