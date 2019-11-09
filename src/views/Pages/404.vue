<template>
  <v-container fill-height>
    <v-row align="center" justify="center">
      <v-col cols="12" class="text-center pa-1">
       <span class="display-1 black--text">404</span>
      </v-col>
      <v-col cols="12" class="text-center pa-1">
          <span class="caption">We couldn't find this page.</span>
          <br>
          <span class="caption">The page you are looking for does not exists.</span>
      </v-col>
      <v-col cols="12" lg="4" md="4" sm="6" xs="6" class="text-center pa-1">
          <v-text-field
            v-model="search"
            outlined
            label="Try with a search"
            append-icon="fa fa-search"
          ></v-text-field>
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
    data:() => ({
        search:''
    }),
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