<template>
  <v-row class="ma-0">
    <v-col class="pa-1" cols="12" lg="6" md="6">
      <v-card>
        <v-toolbar>
          <v-toolbar-title>
            <h1 class="title">Colored</h1>
          </v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <v-row class="ma-0">
            <v-col cols="12" class="pa-1 text-center">
              <v-progress-circular :value="100" color="blue-grey" class="mr-1"></v-progress-circular>

              <v-progress-circular :value="80" color="deep-orange lighten-2" class="mr-1"></v-progress-circular>

              <v-progress-circular :value="60" color="brown" class="mr-1"></v-progress-circular>

              <v-progress-circular :value="40" color="lime" class="mr-1"></v-progress-circular>

              <v-progress-circular :value="20" color="indigo darken-2" class="mr-1"></v-progress-circular>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col class="pa-1" cols="12" lg="6" md="6">
      <v-card>
        <v-toolbar>
          <v-toolbar-title>
            <h1 class="title">Indeterminate</h1>
          </v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <v-row class="ma-0">
            <v-col cols="12" class="pa-1 text-center">
              <v-progress-circular indeterminate color="primary" class="mr-1"></v-progress-circular>

              <v-progress-circular indeterminate color="red" class="mr-1"></v-progress-circular>

              <v-progress-circular indeterminate color="purple" class="mr-1"></v-progress-circular>

              <v-progress-circular indeterminate color="green" class="mr-1"></v-progress-circular>

              <v-progress-circular indeterminate color="amber" class="mr-1"></v-progress-circular>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col class="pa-1" cols="12" lg="6" md="6">
      <v-card>
        <v-toolbar>
          <v-toolbar-title>
            <h1 class="title">Rotate</h1>
          </v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <v-row class="ma-0">
            <v-col cols="12" class="pa-1 text-center">
              <v-progress-circular
                :rotate="360"
                :size="100"
                :width="15"
                :value="value"
                color="teal"
              >{{ value }}</v-progress-circular>

              <v-progress-circular
                :rotate="-90"
                :size="100"
                :width="15"
                :value="value"
                color="primary"
              >{{ value }}</v-progress-circular>

              <v-progress-circular
                :rotate="90"
                :size="100"
                :width="15"
                :value="value"
                color="red"
              >{{ value }}</v-progress-circular>

              <v-progress-circular
                :rotate="180"
                :size="100"
                :width="15"
                :value="value"
                color="pink"
              >{{ value }}</v-progress-circular>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col class="pa-1" cols="12" lg="6" md="6">
      <v-card>
        <v-toolbar>
          <v-toolbar-title>
            <h1 class="title">Size & Width</h1>
          </v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <v-row class="ma-0">
            <v-col cols="12" class="pa-1 text-center">
              <v-progress-circular :size="50" color="primary" indeterminate class="mr-1"></v-progress-circular>

              <v-progress-circular :width="3" color="red" indeterminate class="mr-1"></v-progress-circular>

              <v-progress-circular :size="70" :width="7" color="purple" indeterminate class="mr-1"></v-progress-circular>

              <v-progress-circular :width="3" color="green" indeterminate class="mr-1"></v-progress-circular>

              <v-progress-circular :size="50" color="amber" indeterminate class="mr-1"></v-progress-circular>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      interval: {},
      value: 0
    };
  },
  beforeDestroy() {
    clearInterval(this.interval);
  },
  mounted() {
    this.interval = setInterval(() => {
      if (this.value === 100) {
        return (this.value = 0);
      }
      this.value += 10;
    }, 1000);
  }
};
</script>

<style scoped>
.v-progress-circular {
  margin: 1rem;
}
</style>