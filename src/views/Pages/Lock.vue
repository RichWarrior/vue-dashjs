<template>
  <v-container fill-height>
    <v-row class="ma-2" justify="center" align="center">
      <v-row>
        <v-col class="pa-1 text-center" cols="12" lg="12" md="12">
          <v-avatar class="ma-1" size="64">
            <v-img src="../../assets/avatar.png"></v-img>
          </v-avatar>
          <v-row align="center" justify="center">
            <v-col class="pa-1 text-center" cols="12" lg="5" md="5">
              <v-hover v-slot:default="{hover}">
                <v-card :elevation="hover?12 : 2">
                  <v-card-text>
                    <v-row class="ma-0" justify="center">
                      <v-col class="pa-1 text-center" cols="12">
                        <span class="black--text">Please login to unlock your screen.</span>
                      </v-col>
                      <v-col class="pa-1" cols="12">
                        <v-text-field
                          v-model="password"
                          outlined
                          label="Password"
                          append-icon="fa fa-lock"
                        ></v-text-field>
                      </v-col>
                      <v-col class="pa-1" cols="12">
                        <v-btn block color="primary" @click="$router.push({path:'/'})">Unlock</v-btn>
                      </v-col>
                      <v-col class="pa-1 text-center" cols="12">
                        <span>Forgot your password?</span>
                      </v-col>
                    </v-row>
                  </v-card-text>
                </v-card>
              </v-hover>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-row>   
  </v-container>
</template>

<script>
import { CHANGE_BLANK_STATUS } from "@/store/actions.type";
export default {
  data: () => ({
    password: ""
  }),
  created() {
    this.$store.dispatch(CHANGE_BLANK_STATUS, true);
  }
};
</script>