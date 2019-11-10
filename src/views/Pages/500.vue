<template>
  <v-container fill-height>
    <v-row class="ma-0" justify="center" align="center">
      <v-col class="pa-1 text-center" cols="12">
        <v-icon size="128">fa fa-tools</v-icon>
      </v-col>
      <v-col class="ma-1 text-center" cols="12">
        <span class="display-1">500</span>
        <br />
        <span class="subtitle-1 gray--text">Oh! Something went wrong :(</span>
        <br />
        <span class="subtitle-1">Don't worry, we're now checking this.</span>
      </v-col>
      <v-col class="ma-1 text-center" cols="12">
        <span
          class="subtitle-1"
        >In the meantime,please try one of those links below or come back in a moment</span>
      </v-col>
      <v-col cols="12" class="text-center">
        <span class="caption link" @click="$router.push({path:'/'})">Go to App</span>
        <span class="mr-2 ml-2">|</span>
        <span class="caption link" @click="$router.push({path:'/Login'})">Login</span>
        <span class="mr-2 ml-2">|</span>
        <span class="caption link" @click="$router.push({path:'/Register'})">Register</span>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { CHANGE_BLANK_STATUS } from "@/store/actions.type";
export default {
  created() {
    this.$store.dispatch(CHANGE_BLANK_STATUS, true);
  }
};
</script>

<style scoped>
.link{
    cursor: pointer;
}
</style>