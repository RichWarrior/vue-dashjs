<template>
  <v-container fluid>
    <v-row align="center" justify="center" class="ma-3">
      <v-col cols="12" md="4" sm="10">
        <v-hover v-slot:default="{hover}">
          <v-card :elevation="hover ? 12 : 2">
            <v-toolbar color="#3A3F51" dark>
              <v-avatar class="ma-2" size="48">
                <v-img src="../../assets/logo.jpg"></v-img>
              </v-avatar>
              <v-toolbar-title>
                <span>DashJs</span>
              </v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-form v-model="valid">
                <v-row>
                  <v-col cols="12" md="12" sm="12" class="text-center">
                    <span class="black--text">SIGNUP TO GET INSTANT ACCESS.</span>
                  </v-col>
                </v-row>
                <v-row class="ma-0">
                  <v-col class="pa-1" cols="12">
                    <v-text-field
                      v-model="email"
                      label="Enter Email"
                      outlined
                      append-icon="fa fa-envelope"
                    ></v-text-field>
                    <v-text-field
                      v-model="password"
                      label="password"
                      outlined
                      append-icon="fa fa-lock"
                    ></v-text-field>
                    <v-text-field
                      v-model="rePassword"
                      label="Retype Password"
                      outlined
                      append-icon="fa fa-lock"
                    ></v-text-field>
                    <v-checkbox v-model="agreeTerms" label="I agree with the terms"></v-checkbox>
                  </v-col>
                  <v-row class="ma-0">
                    <v-col class="pa-1 text-center" cols="12">
                      <v-btn block color="primary">Create Account</v-btn>
                    </v-col>
                    <v-col class="pa-1 text-center" cols="12">
                      <span>Have an account ?</span>
                    </v-col>
                    <v-col class="pa-1 text-center" cols="12">
                      <v-btn block @click="$router.push({path:'/Login'})">Signup</v-btn>
                    </v-col>
                  </v-row>
                </v-row>
              </v-form>
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
    valid: false,
    email: "",
    password: "",
    rePassword: "",
    agreeTerms: false
  }),
  created() {
    this.$store.dispatch(CHECK_AUTHORIZE_STATUS, false);
  }
};
</script>