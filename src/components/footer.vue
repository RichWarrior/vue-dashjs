<template>
  <div>
    <v-footer dark class="transparent elevation-12 hidden-md-and-down" inset app>
      <v-col class="text-left" cols="12">
        <span class="black--text">
          <strong>DashJs Footer</strong>
        </span>
      </v-col>
    </v-footer>
     <v-footer dark class="transparent elevation-12 hidden-lg-and-up" inset app v-if="!drawerStatus">
      <v-col class="text-left" cols="12">
        <span class="black--text">
          <strong>DashJs Footer</strong>
        </span>
      </v-col>
    </v-footer>
  </div>
</template>

<script>
export default {
  props: {
    drawerStatus: {
      type: Boolean,
      required: true
    }
  }
};
</script>

<style scoped>
.transparent {
  background-color: white !important;
  opacity: 0.65;
  border-color: transparent !important;
}
</style>