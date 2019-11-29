<template>
  <v-hover v-slot:default="{hover}">
    <v-card :elevation="hover ? 12 :2">
      <v-card-text class="pa-0">
        <v-row class="ma-0">
          <v-col class="text-center pa-0" cols="6">
            <v-sheet color="#37BC9B" max-height="100%" max-width="100%" class="pa-3">
              <h1 class="title white--text">{{moment(date).format('MMMM')}}</h1>
              <h1 class="title white--text">{{date.getDate()}}</h1>
            </v-sheet>
          </v-col>
          <v-col class="text-center pa-3" cols="6">
            <h1 class="title black--text">{{moment(date).format('dddd')}}</h1>
            <h1 class="title black--text">{{moment(date).format('HH:mm')}}</h1>
          </v-col>
        </v-row>
        <!-- <v-sheet color="#37BC9B" max-height="100%" max-width="100%">
          <v-row class="ma-0">
            <v-col class="text-center" cols="4">
              <v-icon color="white" size="48">fa fa-comments</v-icon>
            </v-col>
            <v-col class="text-left" cols="7">
              <h1 class="title white--text">500</h1>
              <h1 class="title white--text">REVIEWS</h1>
            </v-col>
          </v-row>
        </v-sheet>-->
      </v-card-text>
    </v-card>
  </v-hover>
</template>

<script>
export default {
  data: () => ({
    date: new Date()
  })
};
</script>