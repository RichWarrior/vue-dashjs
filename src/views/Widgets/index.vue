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
      <v-col class="pa-1" cols="12" lg="4" md="4">
        <post />
      </v-col>
      <v-col class="pa-1" cols="12" lg="4" md="4">
        <profile />
      </v-col>
      <v-col class="pa-1" cols="12" lg="4" md="4">
        <profile2 />
      </v-col>
      <v-col class="pa-1" cols="12" lg="4" md="4">
        <retweet />
      </v-col>
      <v-col class="pa-1" cols="12" lg="4" md="4">
        <usertaskcomplete />
      </v-col>
      <v-col class="pa-1" cols="12" lg="4" md="4">
        <basket />
      </v-col>
      <v-col class="pa-1" cols="12" lg="4" md="4">
        <basket />
      </v-col>
      <v-col class="pa-1" cols="12" lg="4" md="4">
        <basket />
      </v-col>
      <v-col class="pa-1" cols="12" lg="4" md="4">
        <comments />
      </v-col>
       <v-col class="pa-1" cols="12" lg="4" md="4">
        <comments />
      </v-col>
       <v-col class="pa-1" cols="12" lg="4" md="4">
        <comments />
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
import Chart1 from "@/components/Widgets/Chart1";
import post from "@/components/Widgets/Post";
import profile from "@/components/Widgets/Profile";
import profile2 from "@/components/Widgets/Profile2";
import retweet from "@/components/Widgets/ReTweet";
import usertaskcomplete from "@/components/Widgets/UserTaskComplete";
import basket from "@/components/Widgets/Basket";
import comments from "@/components/Widgets/Comments";
export default {
  components: {
    gamepad,
    coffee,
    storage,
    connections,
    star,
    achievements,
    Chart1,
    post,
    profile,
    profile2,
    retweet,
    usertaskcomplete,
    basket,
    comments
  }
};
</script>