<template>
  <v-col class="pa-0" cols="12">
    <v-card width="100%">
      <v-toolbar>
        <v-toolbar-title>
          <h1 class="title">Date Picker React To Display</h1>
        </v-toolbar-title>
      </v-toolbar>
      <v-card-text class="pa-1">
        <v-row class="ma-0">
          <v-col cols="12" sm="6" class="pa-0">
            <v-date-picker width="100%" ref="picker" v-model="date" :picker-date.sync="pickerDate" full-width></v-date-picker>
          </v-col>
          <v-col cols="12" sm="6" class="pa-0">
            <div class="title">Month news ({{ pickerDate || 'change month...' }})</div>
            <div class="subheading">Change month to see other news</div>
            <ul class="ma-4">
              <li v-for="note in notes" :key="note">{{ note }}</li>
            </ul>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-col>
</template>

<script>
  export default {
    data: () => ({
      date: new Date().toISOString().substr(0, 10),
      pickerDate: null,
      notes: [],
      allNotes: [
        'President met with prime minister',
        'New power plant opened',
        'Rocket launch announced',
        'Global warming discussion cancelled',
        'Company changed its location',
      ],
    }),
    watch: {
      pickerDate () {
        this.notes = [
          this.allNotes[Math.floor(Math.random() * 5)],
          this.allNotes[Math.floor(Math.random() * 5)],
          this.allNotes[Math.floor(Math.random() * 5)],
        ].filter((value, index, self) => self.indexOf(value) === index)
      },
    },
  }
</script>