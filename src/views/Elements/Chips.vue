<template>
  <v-row class="ma-0">
    <v-col class="pa-1">
      <v-hover v-slot:default="{hover}">
        <v-card :elevation="hover ? 12 : 2">
          <v-toolbar>
            <v-toolbar-title>
              <h1 class="title">Chips</h1>
            </v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-row class="ma-0">
              <v-col class="pa-1" cols="12" lg="6" md="6">
                <v-card height="150">
                  <v-toolbar>
                    <v-toolbar-title>
                      <h1 class="title">Usage</h1>
                    </v-toolbar-title>
                  </v-toolbar>
                  <v-card-text>
                    <v-row class="ma-0">
                      <v-col class="pa-1 text-center">
                        <v-chip class="mr-1">Default</v-chip>
                        <v-chip close class="mr-1">Close</v-chip>
                        <v-chip outlined class="mr-1">Outlined</v-chip>
                        <v-chip v-model="value" filter class="mr-1">Filter</v-chip>
                        <v-chip pill>
                          <v-avatar left color="red" class="mr-1">P</v-avatar>Pill
                        </v-chip>
                        <v-chip>
                          <v-icon left color="red" class="mr-1">mdi-account</v-icon>Icon
                        </v-chip>
                      </v-col>
                    </v-row>
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col class="pa-1 text-center" cols="12" lg="6" md="6">
                <v-card height="150">
                  <v-toolbar>
                    <v-toolbar-title>
                      <h1 class="title">Colored</h1>
                    </v-toolbar-title>
                  </v-toolbar>
                  <v-card-text>
                    <v-row class="ma-0">
                      <v-col class="pa-1 text-center">
                        <v-chip class="ma-2">Default</v-chip>

                        <v-chip class="ma-2" color="primary">Primary</v-chip>

                        <v-chip class="ma-2" color="secondary">Secondary</v-chip>

                        <v-chip class="ma-2" color="red" text-color="white">Red Chip</v-chip>

                        <v-chip class="ma-2" color="green" text-color="white">Green Chip</v-chip>
                      </v-col>
                    </v-row>
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col class="pa-1 text-center" cols="12" lg="6" md="6">
                <v-card>
                  <v-toolbar>
                    <v-toolbar-title>
                      <h1 class="title">Icon</h1>
                    </v-toolbar-title>
                  </v-toolbar>
                  <v-card-text>
                    <v-row class="ma-0">
                      <v-col class="pa-1 text-center">
                        <v-chip class="ma-2" color="indigo" text-color="white">
                          <v-avatar left>
                            <v-icon>mdi-account-circle</v-icon>
                          </v-avatar>Ranee
                        </v-chip>

                        <v-chip class="ma-2" color="orange" text-color="white">
                          Premium
                          <v-icon right>mdi-star</v-icon>
                        </v-chip>

                        <v-chip class="ma-2" color="primary" text-color="white">
                          1 Year
                          <v-icon right>mdi-cake-variant</v-icon>
                        </v-chip>

                        <v-chip class="ma-2" color="green" text-color="white">
                          <v-avatar left class="green darken-4">1</v-avatar>Years
                        </v-chip>

                        <v-chip class="ma-2" close color="teal" text-color="white">
                          <v-avatar left>
                            <v-icon>mdi-checkbox-marked-circle</v-icon>
                          </v-avatar>Confirmed
                        </v-chip>

                        <v-chip
                          class="ma-2"
                          close
                          color="teal"
                          text-color="white"
                          close-icon="mdi-delete"
                        >
                          <v-avatar left>
                            <v-icon>mdi-checkbox-marked-circle</v-icon>
                          </v-avatar>Confirmed
                        </v-chip>
                      </v-col>
                    </v-row>
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col class="pa-1 text-center" cols="12" lg="6" md="6">
                <v-card>
                  <v-toolbar>
                    <v-toolbar-title>
                      <h1 class="title">Outlined</h1>
                    </v-toolbar-title>
                  </v-toolbar>
                  <v-card-text>
                    <v-row class="ma-0">
                      <v-col class="pa-1 text-center">
                        <v-chip class="ma-2" color="success" outlined>
                          <v-icon left>mdi-server-plus</v-icon>Server Status
                        </v-chip>

                        <v-chip class="ma-2" color="primary" outlined pill>
                          User Account
                          <v-icon right>mdi-account-outline</v-icon>
                        </v-chip>

                        <v-chip class="ma-2" color="deep-purple accent-4" outlined>
                          <v-icon left>mdi-wrench</v-icon>Update Settings
                        </v-chip>

                        <v-chip class="ma-2" close color="indigo darken-3" outlined>
                          <v-icon left>mdi-fire</v-icon>New Posts Available
                        </v-chip>
                      </v-col>
                    </v-row>
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col class="pa-1 text-center" cols="12" lg="6" md="6">
                <v-card>
                  <v-toolbar>
                    <v-toolbar-title>
                      <h1 class="title">Label</h1>
                    </v-toolbar-title>
                  </v-toolbar>
                  <v-card-text>
                    <v-row class="ma-0">
                      <v-col class="pa-1 text-center">
                        <v-chip class="ma-2" label>Label</v-chip>

                        <v-chip class="ma-2" color="pink" label text-color="white">
                          <v-icon left>mdi-label</v-icon>Tags
                        </v-chip>

                        <v-chip class="ma-2" color="primary" label>
                          <v-icon left>mdi-account-circle-outline</v-icon>John Leider
                        </v-chip>

                        <v-chip class="ma-2" close color="cyan" label text-color="white">
                          <v-icon left>mdi-twitter</v-icon>New Tweets
                        </v-chip>
                      </v-col>
                    </v-row>
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col class="pa-1 text-center" cols="12" lg="6" md="6">
                <v-card>
                  <v-toolbar>
                    <v-toolbar-title>
                      <h1 class="title">Label</h1>
                    </v-toolbar-title>
                  </v-toolbar>
                  <v-card-text>
                    <v-row class="ma-0">
                      <v-col class="pa-1 text-center">
                        <v-btn
                          v-if="!chip1 && !chip2 && !chip3 && !chip4"
                          close
                          color="primary"
                          dark
                          @click="chip1 = true, chip2 = true, chip3 = true, chip4= true"
                        >Reset Chips</v-btn>

                        <v-chip
                          v-if="chip1"
                          class="ma-2"
                          close
                          @click:close="chip1 = false"
                        >Closable</v-chip>

                        <v-chip
                          v-if="chip2"
                          class="ma-2"
                          close
                          color="red"
                          text-color="white"
                          @click:close="chip2 = false"
                        >Remove</v-chip>

                        <v-chip
                          v-if="chip3"
                          class="ma-2"
                          close
                          color="green"
                          outlined
                          @click:close="chip3 = false"
                        >Success</v-chip>

                        <v-chip
                          v-if="chip4"
                          class="ma-2"
                          close
                          color="orange"
                          label
                          outlined
                          @click:close="chip4 = false"
                        >Complete</v-chip>
                      </v-col>
                    </v-row>
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col class="pa-1 text-center" cols="12" lg="6" md="6">
                <v-card>
                  <v-toolbar>
                    <v-toolbar-title>
                      <h1 class="title">Sizes</h1>
                    </v-toolbar-title>
                  </v-toolbar>
                  <v-card-text>
                    <v-row class="ma-0">
                      <v-col class="pa-1 text-center">
                        <v-chip class="ma-2" x-small>x-small chip</v-chip>

                        <v-chip class="ma-2" small>small chip</v-chip>

                        <v-chip class="ma-2">Default</v-chip>

                        <v-chip class="ma-2" large>large chip</v-chip>

                        <v-chip class="ma-2" x-large>x-large chip</v-chip>
                      </v-col>
                    </v-row>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-hover>
    </v-col>
  </v-row>
</template>
<script>
export default {
  data: () => ({
    value: true,
    chip1: true,
    chip2: true,
    chip3: true,
    chip4: true
  })
};
</script>