<template>
  <v-col class="pa-1" cols="12">
    <v-card>
      <v-toolbar>
        <v-toolbar-title>
          <h1 class="title">Time Picker Dialog</h1>
        </v-toolbar-title>
      </v-toolbar>
      <v-card-text class="pa-1">
        <v-row class="ma-0">
          <v-col  class="pa-1" cols="12">
            <v-menu
              ref="menu"
              v-model="menu2"
              :close-on-content-click="false"
              :nudge-right="40"
              :return-value.sync="time"
              transition="scale-transition"
              offset-y
              max-width="290px"
              min-width="290px"
            >
              <template v-slot:activator="{ on }">
                <v-text-field
                  v-model="time"
                  label="Picker in menu"
                  prepend-icon="fa fa-clock"
                  readonly
                  v-on="on"
                ></v-text-field>
              </template>
              <v-time-picker
                v-if="menu2"
                v-model="time"
                @click:minute="$refs.menu.save(time)"
              ></v-time-picker>
            </v-menu>
          </v-col>
          <v-spacer></v-spacer>
          <v-col cols="12">
            <v-dialog
              ref="dialog"
              v-model="modal2"
              :return-value.sync="time"
              persistent
              width="290px"
            >
              <template v-slot:activator="{ on }">
                <v-text-field
                  v-model="time"
                  label="Picker in dialog"
                  prepend-icon="fa fa-clock"
                  readonly
                  v-on="on"
                ></v-text-field>
              </template>
              <v-time-picker v-if="modal2" v-model="time">
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="modal2 = false">Cancel</v-btn>
                <v-btn text color="primary" @click="$refs.dialog.save(time)">OK</v-btn>
              </v-time-picker>
            </v-dialog>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-col>
</template>

<script>
export default {
  data() {
    return {
      time: null,
      menu2: false,
      modal2: false
    };
  }
};
</script>