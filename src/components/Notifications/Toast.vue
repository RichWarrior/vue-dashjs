<template>
  <v-hover v-slot:default="{hover}">
    <v-card :elevation="hover ? 12 : 2">
      <v-toolbar>
        <v-toolbar-title>
          <h1 class="title">Toast</h1>
        </v-toolbar-title>
      </v-toolbar>
      <v-card-text>
        <v-row>
          <v-col cols="12" md="12" sm="12">
            <v-text-field v-model="toastMessage" label="Toast Message" outlined></v-text-field>
          </v-col>
          <v-col class="pa-1" cols="12" md="12" sm="12">
            <h1 class="title">Position</h1>
            <v-radio-group v-model="toastLocation" row>
              <v-radio label="Top" value="top"></v-radio>
              <v-radio label="Bottom" value="bottom"></v-radio>
              <v-radio label="Top-Right" value="top-right"></v-radio>
              <v-radio label="Top-Left" value="top-left"></v-radio>
              <v-radio label="Bottom-Right" value="bottom-right"></v-radio>
              <v-radio label="Bottom-Left" value="bottom-left"></v-radio>
            </v-radio-group>
          </v-col>
          <v-col cols="12" md="12" sm="12">
            <h1 class="title">Type</h1>
            <v-radio-group v-model="toastType" row>
              <v-radio label="Success" value="success"></v-radio>
              <v-radio label="Info" value="info"></v-radio>
              <v-radio label="Warning" value="warning"></v-radio>
              <v-radio label="Error" value="error"></v-radio>
              <v-radio label="Default" value="default"></v-radio>
            </v-radio-group>
          </v-col>
          <v-col cols="12" md="12" sm="12">
            <h1 class="title">Duration</h1>
            <v-slider v-model="toastDuration" class="align-center" :max="10000" :min="1000" />
            <span>{{toastDuration}}</span>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions>
        <div class="flex-grow-1"></div>
        <v-btn icon @click="showToast">
          <v-icon>fa fa-bell</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-hover>
</template>

<script>
export default {
  data: () => ({
    toastLocation: "top-right",
    toastType: "success",
    toastMessage: "",
    toastDuration: 1000
  }),
  methods: {
    showToast() {
      this.$toast.open({
        message: this.toastMessage,
        type: this.toastType,
        position: this.toastLocation,
        duration: this.toastDuration
      });
    }
  }
};
</script>