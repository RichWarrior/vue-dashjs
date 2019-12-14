<template>
  <v-row class="ma-0">
    <v-col class="pa-1" cols="12">
      <v-hover v-slot:default="{hover}">
        <v-card :elevation="hover ? 12 : 2">
          <v-toolbar>
            <v-toolbar-title>
              <h1 class="title">Month Picker</h1>
            </v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-row class="ma-0">
              <v-col class="pa-1" cols="12" lg="6" md="6">
                <monthusage />
              </v-col>
              <v-col class="pa-1" cols="12" lg="6" md="6">
                <monthplayground />
              </v-col>
              <v-col class="pa-1" cols="12" lg="6" md="6">
                <monthcolors />
              </v-col>
              <v-col class="pa-1" cols="12" lg="6" md="6">
                <monthalloweddate />
              </v-col>
              <v-col class="pa-1" cols="12" lg="6" md="6">
                <monthfullwidth />
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-hover>
    </v-col>
    <v-col class="pa-1" cols="12">
      <v-hover v-slot:default="{hover}">
        <v-card :elevation="hover ? 12 : 2">
          <v-toolbar>
            <v-toolbar-title>
              <h1 class="title">Time Picker</h1>
            </v-toolbar-title>
          </v-toolbar>
          <v-card-text></v-card-text>
        </v-card>
      </v-hover>
    </v-col>
    <v-col class="pa-1" cols="12">
      <v-hover v-slot:default="{hover}">
        <v-card :elevation="hover ? 12 : 2">
          <v-toolbar>
            <v-toolbar-title>
              <h1 class="title">Color Picker</h1>
            </v-toolbar-title>
          </v-toolbar>
          <v-card-text></v-card-text>
        </v-card>
      </v-hover>
    </v-col>
  </v-row>
</template>

<script>
import monthusage from "@/components/Pickers/Month/Usage";
import monthplayground from "@/components/Pickers/Month/Playground";
import monthcolors from '@/components/Pickers/Month/Colors';
import monthalloweddate from '@/components/Pickers/Month/AllowedDate';
import monthfullwidth from '@/components/Pickers/Month/FullWidth';
export default {
  components: {
    monthusage,
    monthplayground,
    monthcolors,
    monthalloweddate,
    monthfullwidth
  }
};
</script>