<template>
  <v-hover v-slot:default="{hover}">
    <v-card :elevation="hover ? 12 :2">
      <v-toolbar>
        <v-toolbar-title>
          <h1 class="title">Forms</h1>
        </v-toolbar-title>
      </v-toolbar>
      <v-card-text>
        <v-row class="ma-0">
          <v-col cols="12" sm="12" md="6" class="pa-1">
            <v-card>
              <v-toolbar>
                <v-toolbar-title>Usage</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form v-model="usageValid">
                  <v-container>
                    <v-row class="ma-0">
                      <v-col cols="12" md="4" class="pa-1">
                        <v-text-field
                          v-model="usagefirstname"
                          :rules="usagenameRules"
                          :counter="10"
                          label="First name"
                          required
                        ></v-text-field>
                      </v-col>

                      <v-col cols="12" md="4" class="pa-1">
                        <v-text-field
                          v-model="usagelastname"
                          :rules="usagenameRules"
                          :counter="10"
                          label="Last name"
                          required
                        ></v-text-field>
                      </v-col>

                      <v-col cols="12" md="4" class="pa-1">
                        <v-text-field
                          v-model="usageemail"
                          :rules="usageemailRules"
                          label="E-mail"
                          required
                        ></v-text-field>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-form>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" md="6" sm="12" class="pa-1">
            <v-card>
              <v-toolbar>
                <v-toolbar-title>
                  <h1 class="title">Validation</h1>
                </v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form ref="form" v-model="validationvalid" lazy-validation>
                  <v-text-field
                    v-model="validationname"
                    :counter="10"
                    :rules="validationnameRules"
                    label="Name"
                    required
                  ></v-text-field>

                  <v-text-field
                    v-model="validationemail"
                    :rules="validationemailRules"
                    label="E-mail"
                    required
                  ></v-text-field>

                  <v-select
                    v-model="validationselect"
                    :items="validationitems"
                    :rules="[v => !!v || 'Item is required']"
                    label="Item"
                    required
                  ></v-select>

                  <v-checkbox
                    v-model="validationcheckbox"
                    :rules="[v => !!v || 'You must agree to continue!']"
                    label="Do you agree?"
                    required
                  ></v-checkbox>

                  <v-btn
                    :disabled="!validationvalid"
                    color="success"
                    class="mr-4"
                    @click="validate"
                  >Validate</v-btn>

                  <v-btn color="error" class="mr-4" @click="reset">Reset Form</v-btn>

                  <v-btn color="warning" @click="resetValidation">Reset Validation</v-btn>
                </v-form>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-hover>
</template>

<script>
export default {
  data: () => ({
    usageValid: false,
    usagefirstname: "",
    usagelastname: "",
    usagenameRules: [
      v => !!v || "Name is required",
      v => v.length <= 10 || "Name must be less than 10 characters"
    ],
    usageemail: "",
    usageemailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+/.test(v) || "E-mail must be valid"
    ],
    validationvalid: true,
    validationname: "",
    validationnameRules: [
      v => !!v || "Name is required",
      v => (v && v.length <= 10) || "Name must be less than 10 characters"
    ],
    validationemail: "",
    validationemailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+\..+/.test(v) || "E-mail must be valid"
    ],
    validationselect: null,
    validationitems: ["Item 1", "Item 2", "Item 3", "Item 4"],
    validationcheckbox: false
  }),
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true;
      }
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    }
  }
};
</script>