<template>
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
                  <span class="black--text">SIGN IN TO CONTIUNE.</span>
                </v-col>
                <v-col cols="12" md="12" sm="12">
                  <v-text-field
                    v-model="email"
                    outlined
                    label="Email"
                    placeholder="Enter Email"
                    type="email"
                    prepend-icon="fa fa-envelope"
                  ></v-text-field>
                  <v-text-field
                    v-model="password"
                    outlined
                    label="Password"
                    placeholder="Enter Password"
                    :type="passwordFieldType"
                    prepend-icon="fa fa-key"
                    :append-icon="passwordAppendIcon"
                    @click:append="passwordAppendIconClick"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-card-actions>
                <v-checkbox v-model="rememberMe" label="Remember Me"></v-checkbox>
                <v-spacer></v-spacer>
                <span class="caption">Forgot your password?</span>
              </v-card-actions>
              <v-row>
                <v-col cols="12" md="12" sm="12">
                  <v-btn block color="#5D9CEC" dark @click="login">Login</v-btn>
                </v-col>
                <v-col cols="12" md="12" sm="12" class="text-center">
                  <span class="subtitle-1 black--text">Need to Signup?</span>
                </v-col>
                <v-col cols="12" md="12" sm="12">
                  <v-btn block color="#FFFFFF">Register Now</v-btn>
                </v-col>
              </v-row>
            </v-form>
          </v-card-text>
        </v-card>
      </v-hover>
    </v-col>
  </v-row>
</template>

<script>
import {
  CHECK_AUTHORIZE_STATUS,
  CHANGE_BLANK_STATUS
} from "@/store/actions.type";
export default {
  data: () => ({
    valid: false,
    email: "",
    password: "",
    passwordFieldType: "password",
    passwordAppendIcon: "fa fa-eye",
    rememberMe: false
  }),
  methods: {
    passwordAppendIconClick() {
      this.passwordFieldType =
        this.passwordFieldType === "password" ? "text" : "password";
      this.passwordAppendIcon =
        this.passwordAppendIcon === "fa fa-eye"
          ? "fa fa-eye-slash"
          : "fa fa-eye";
    },
    login() {
      this.$router.push({ path: "/" });
    }
  },
  beforeMount() {
    this.$store.dispatch(CHECK_AUTHORIZE_STATUS, false);
    this.$store.dispatch(CHANGE_BLANK_STATUS, true);
  }
};
</script>

<style scoped>
.caption {
  cursor: pointer;
}
.subtitle-1 {
  cursor: pointer;
}
</style>