<template>
  <v-row class="ma-0">
    <v-col cols="12" md="6" sm="12" class="pa-1">
      <toast />
    </v-col>
    <v-col cols="12" md="6" sm="12" class="pa-1">
      <sweetalert />
    </v-col>
    <v-col cols="12" md="6" sm="12" class="pa-1">
      <snackbar />
    </v-col>
  </v-row>
</template>

<script>
import toast from "@/components/Notifications/Toast";
import sweetalert from "@/components/Notifications/SweetAlert2";
import snackbar from '@/components/Notifications/Snackbar';
export default {
  components: {
    toast,
    sweetalert,
    snackbar
  }
};
</script>