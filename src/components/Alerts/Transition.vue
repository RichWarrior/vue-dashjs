<template>
  <v-row class="ma-0">
    <v-col class="pa-1" cols="12">
      <v-col class="text-center" cols="12">
        <v-btn color="primary" @click="alert = !alert">Toggle</v-btn>
      </v-col>
      <v-alert
        :value="alert"
        color="pink"
        dark
        border="top"
        icon="mdi-home"
        transition="scale-transition"
      >
        Phasellus tempus. Fusce ac felis sit amet ligula pharetra condimentum. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Pellentesque posuere. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo.
        Phasellus nec sem in justo pellentesque facilisis. Phasellus magna. Cras risus ipsum, faucibus ut, ullamcorper id, varius ac, leo. In hac habitasse platea dictumst. Praesent turpis.
      </v-alert>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    alert: true
  })
};
</script>