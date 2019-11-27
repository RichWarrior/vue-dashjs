<template>
  <v-hover v-slot:default="{hover}">
    <v-card :elevation="hover?12:2">
      <v-card-text class="pa-0">
        <v-sheet color="red" height="100%" width="100%">
          <v-row justify="center" align="center">
            <v-col class="text-center" cols="12">
              <v-progress-circular
                rotate="360"
                size="125"
                width="15"
                :value="value"
                dark
                color="white"
              >
                <v-avatar class="ma-0 pa-0" size="100" @click="valueChange">
                  <v-img src="http://themicon.co/theme/angle/v4.6/vue/img/user/03.jpg"></v-img>
                </v-avatar>
              </v-progress-circular>
            </v-col>
            <v-col class="pa-1 text-center" cols="12">
              <h1 class="title white--text">{{value}}% Complete</h1>
            </v-col>
          </v-row>
        </v-sheet>
      </v-card-text>
    </v-card>
  </v-hover>
</template>

<script>
export default {
  data: () => ({
    value: 5,
    increment: true
  }),
  methods: {
    valueChange() {
      if (this.increment) {
        if (this.value != 100) {
          this.value += 5;
        } else {
          this.increment = false;
          this.valueChange();
        }
      } else {
        if (this.value != 0) {
          this.value -= 5;
        } else {
          this.increment = true;
          this.valueChange();
        }
      }
    }
  }
};
</script>