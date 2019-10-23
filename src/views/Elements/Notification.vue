<template>
  <v-row class="ma-2">
    <v-col cols="12" md="6" sm="12">
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
              <v-col cols="12" md="12" sm="12">
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
    </v-col>
    <v-col cols="12" md="6" sm="12">
      <v-hover v-slot:default="{hover}">
        <v-card :elevation="hover ? 12 : 2">
          <v-toolbar>
            <h1 class="title">SweatAlert2</h1>
          </v-toolbar>
          <v-card-text>
            <v-row class="ma-2">
              <v-col cols="12" md="12" sm="12">
                <v-btn depressed class="ma-1" color="success" @click="showSuccessMessage">
                  <h1 class="caption">Show Success Message</h1>
                </v-btn>
                <v-btn depressed color="warning" class="ma-1" @click="showWarningMessage">
                  <h1 class="caption">Show Warning Message</h1>
                </v-btn>
                <v-btn depressed class="ma-1" color="error" @click="showWarningMessage">
                  <h1 class="caption">Show Error Message</h1>
                </v-btn>
                <v-btn depressed color="primary" class="ma-1" @click="showBasicMessage">
                  <h1 class="caption">Show Basic Message</h1>
                </v-btn>
                <v-btn depressed color="primary" class="ma-1" @click="showFooterMessage">
                  <h1 class="caption">Show Footer Message</h1>
                </v-btn>
                <v-btn depressed color="primary" class="ma-1" @click="showCustomHtmlMessage">
                  <h1 class="caption">Show Custom Html Message</h1>
                </v-btn>
                <v-btn depressed color="primary" class="ma-1" @click="showCustomPositionMessage">
                  <h1 class="caption">Show Custom Position Message</h1>
                </v-btn>
                <v-btn depressed color="primary" class="ma-1" @click="showConfirmDialogMessage">
                  <h1 class="caption">Show Confirm Dialog Message</h1>
                </v-btn>
                <v-btn depressed color="primary" class="ma-1" @click="showMixingMessage">
                  <h1 class="caption">Show Mixin Message</h1>
                </v-btn>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-hover>
    </v-col>
  </v-row>
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
    },
    showSuccessMessage() {
      this.$swal("Good job!", "You clicked the button!", "success");
    },
    showWarningMessage() {
      this.$swal("Warning", "You clicked the button!", "warning");
    },
    showErrorMessage() {
      this.$swal("Error", "You clicked the button!", "error");
    },
    showBasicMessage() {
      this.$swal("Any fool can use a computer");
    },
    showFooterMessage() {
      this.$swal({
        type: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: "<a href>Why do I have this issue?</a>"
      });
    },
    showCustomHtmlMessage() {
      this.$swal({
        title: "<strong>HTML <u>example</u></strong>",
        type: "info",
        html:
          "You can use <b>bold text</b>, " +
          '<a href="//sweetalert2.github.io">links</a> ' +
          "and other HTML tags",
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText: '<i class="fa fa-thumbs-up"></i> Great!',
        confirmButtonAriaLabel: "Thumbs up, great!",
        cancelButtonText: '<i class="fa fa-thumbs-down"></i>',
        cancelButtonAriaLabel: "Thumbs down"
      });
    },
    showCustomPositionMessage() {
      this.$swal({
        position: "top-end",
        type: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500
      });
    },
    showConfirmDialogMessage() {
      this.$swal({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then(result => {
        if (result.value) {
          this.$swal("Deleted!", "Your file has been deleted.", "success");
        }
      });
    },
    showMixingMessage() {     
      this.$swal({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        type: "success",
        title: "Signed in successfully"
      });
    }
  }
};
</script>