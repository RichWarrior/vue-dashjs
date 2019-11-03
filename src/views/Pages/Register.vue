<template>
  <v-container fluid>
    <v-row align="center" justify="center" class="ma-3">
      <v-col cols="12" md="5" sm="10">
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
    valid: false
  }),
  created() {
    this.$store.dispatch(CHECK_AUTHORIZE_STATUS, false);
  }
};
</script>