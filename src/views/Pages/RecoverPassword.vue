<template>
  <v-container fill-height>
    <v-row class="ma-2" align="center" justify="center">
      <v-col class="pa-1" cols="12" lg="4" md="4">
        <v-hover v-slot:default="{hover}">
          <v-card :elevation="hover ? 12 :2">
            <v-toolbar color="#3A3F51" dark>
              <v-avatar class="ma-2" size="48">
                <v-img src="../../assets/logo.jpg"></v-img>
              </v-avatar>
              <v-toolbar-title>
                <span>DashJs</span>
              </v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-row class="ma-0">
                <v-col class="pa-1 text-center" cols="12">
                  <span class="black--text">PASSWORD RESET</span>
                </v-col>
                <v-col class="pa-1 text-center" cols="12">
                  <span
                    class="black--text"
                  >Fii with your mail to receive instructions on how to reset your password.</span>
                </v-col>
              </v-row>
              <v-row class="ma-0">
                <v-col class="pa-1" cols="12">
                  <v-text-field
                    v-model="email"
                    outlined
                    label="Enter Email"
                    append-icon="fa fa-envelope"
                  ></v-text-field>
                  <v-btn block color="error" @click="$router.push({path:'/Login'})">Reset</v-btn>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { CHECK_AUTHORIZE_STATUS } from "@/store/actions.type";
export default {
  data: () => ({
    email: ""
  }),
  created() {
    this.$store.dispatch(CHECK_AUTHORIZE_STATUS, false);
  }
};
</script>