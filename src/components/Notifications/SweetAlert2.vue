<template>
  <v-hover v-slot:default="{hover}">
    <v-card :elevation="hover ? 12 : 2">
      <v-toolbar>
        <h1 class="title">SweatAlert2</h1>
      </v-toolbar>
      <v-card-text>
        <v-row class="ma-0">
          <v-col class="pa-1 text-center" cols="12" md="6" lg="6">
            <v-btn class="ma-1" color="success" @click="showSuccessMessage" width="100%">
              <h1 class="caption">Show Success Message</h1>
            </v-btn>
          </v-col>
          <v-col class="pa-1 text-center" cols="12" md="6" lg="6">
            <v-btn color="warning" class="ma-1" @click="showWarningMessage" width="100%">
              <h1 class="caption">Show Warning Message</h1>
            </v-btn>
          </v-col>
          <v-col class="pa-1 text-center" cols="12" md="6" lg="6">
            <v-btn class="ma-1" color="error" @click="showErrorMessage" width="100%">
              <h1 class="caption">Show Error Message</h1>
            </v-btn>
          </v-col>
          <v-col class="pa-1 text-center" cols="12" md="6" lg="6">
            <v-btn color="primary" class="ma-1" @click="showBasicMessage" width="100%">
              <h1 class="caption">Show Basic Message</h1>
            </v-btn>
          </v-col>
          <v-col class="pa-1 text-center" cols="12" md="6" lg="6">
            <v-btn color="primary" class="ma-1" @click="showFooterMessage" width="100%">
              <h1 class="caption">Show Footer Message</h1>
            </v-btn>
          </v-col>
          <v-col class="pa-1 text-center" cols="12" md="6" lg="6">
            <v-btn color="primary" class="ma-1" @click="showCustomHtmlMessage" width="100%">
              <h1 class="caption">Show Custom Html Message</h1>
            </v-btn>
          </v-col>
          <v-col class="pa-1 text-center" cols="12" md="6" lg="6">
            <v-btn color="primary" class="ma-1" @click="showCustomPositionMessage" width="100%">
              <h1 class="caption">Show Custom Position Message</h1>
            </v-btn>
          </v-col>
          <v-col class="pa-1 text-center" cols="12" md="6" lg="6">
            <v-btn color="primary" class="ma-1" @click="showConfirmDialogMessage" width="100%">
              <h1 class="caption">Show Confirm Dialog Message</h1>
            </v-btn>
          </v-col>
          <v-col class="pa-1 text-center" cols="12" md="6" lg="6">
            <v-btn color="primary" class="ma-1" @click="showMixingMessage" width="100%">
              <h1 class="caption">Show Mixin Message</h1>
            </v-btn>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-hover>
</template>

<script>
export default {
  methods: {
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