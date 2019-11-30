<template>
  <v-hover v-slot:default="{hover}">
    <v-card :elevation="hover ? 12 :2">
      <v-toolbar>
        <v-toolbar-title>
          <h1 class="title">Sliders</h1>
        </v-toolbar-title>
      </v-toolbar>
      <v-card-text>
        <v-row class="ma-0">
          <v-col cols="12" md="6" sm="12" class="pa-1">
            <v-card>
              <v-toolbar>
                <v-toolbar-title>Usage</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-slider
                  v-model="volume"
                  append-icon="fa fa-volume-up"
                  prepend-icon="fa fa-volume-down"
                  label="Volume"
                ></v-slider>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" md="6" sm="12" class="pa-1">
            <v-card>
              <v-toolbar>
                <v-toolbar-title>
                  <h1 class="title">Min & Max Values</h1>
                </v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-row class="ma-0">
                  <v-col class="pr-4">
                    <v-slider
                      v-model="slider"
                      class="align-center"
                      :max="max"
                      :min="min"
                      hide-details
                    >
                      <template v-slot:append>
                        <v-text-field
                          v-model="slider"
                          class="mt-0 pt-0"
                          hide-details
                          single-line
                          type="number"
                          style="width: 60px"
                        ></v-text-field>
                      </template>
                    </v-slider>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col class="px-4">
                    <v-range-slider
                      v-model="range"
                      :max="max"
                      :min="min"
                      hide-details
                      class="align-center"
                    >
                      <template v-slot:prepend>
                        <v-text-field
                          v-model="range[0]"
                          class="mt-0 pt-0"
                          hide-details
                          single-line
                          type="number"
                          style="width: 60px"
                        ></v-text-field>
                      </template>
                      <template v-slot:append>
                        <v-text-field
                          v-model="range[1]"
                          class="mt-0 pt-0"
                          hide-details
                          single-line
                          type="number"
                          style="width: 60px"
                        ></v-text-field>
                      </template>
                    </v-range-slider>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" sm="12" md="6" class="pa-1">
            <v-card>
              <v-toolbar>
                <v-toolbar-title>
                  <h1 class="title">Disabled</h1>
                </v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-slider disabled label="Disabled" value="30"></v-slider>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" sm="12" md="6" class="pa-1">
            <v-card>
              <v-toolbar>
                <v-toolbar-title>
                  <h1 class="title">Readonly</h1>
                </v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-slider readonly label="Readonly" value="30"></v-slider>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" sm="12" md="6" class="pa-1">
            <v-card>
              <v-toolbar>
                <v-toolbar-title>
                  <h1 class="title">Vertical Sliders</h1>
                </v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-slider value="70" vertical label="Regular"></v-slider>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" sm="12" md="6" class="pa-1">
            <v-card>
              <v-toolbar>
                <v-toolbar-title>
                  <h1 class="title">Thumb</h1>
                </v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-slider class="ma-5" value="35" :thumb-size="24" thumb-label="always"></v-slider>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" sm="12" md="6" class="pa-1">
            <v-card>
              <v-toolbar>
                <v-toolbar-title>
                  <h1 class="title">Custom Range Sliders</h1>
                </v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-range-slider
                  :tick-labels="seasons"
                  :value="[0, 1]"
                  min="0"
                  max="3"
                  ticks="always"
                  tick-size="4"
                  class="ma-5"
                >
                  <template v-slot:thumb-label="props">
                    <v-icon dark>{{ season(props.value) }}</v-icon>
                  </template>
                </v-range-slider>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" sm="12" md="6" class="pa-1">
            <v-card>
              <v-toolbar>
                <v-toolbar-title>
                  <h1 class="title">Ticks</h1>
                </v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-slider value="4" step="10" ticks="always" tick-size="4"></v-slider>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" sm="12" md="6" class="pa-1">
            <v-card>
              <v-toolbar>
                <v-toolbar-title>
                  <h1 class="title">Custom Colors</h1>
                </v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-slider v-model="ex1.val" :color="ex1.color" :label="ex1.label"></v-slider>

                <v-slider v-model="ex2.val" :label="ex2.label" :track-color="ex2.color"></v-slider>

                <v-slider
                  v-model="ex3.val"
                  :label="ex3.label"
                  :thumb-color="ex3.color"
                  thumb-label="always"
                ></v-slider>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" md="6" sm="12" class="pa-1">
            <v-card>
              <v-toolbar>
                <v-toolbar-title>
                  <h1 class="title">Validation</h1>
                </v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-slider
                  v-model="validationvalue"
                  :rules="validationrules"
                  label="How many?"
                  step="10"
                  thumb-label="always"
                  ticks
                  class="ma-5"
                ></v-slider>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-hover>
</template>

<script>
export default {
  data: () => ({
    volume: 25,
    min: -50,
    max: 90,
    slider: 40,
    range: [-20, 70],
    seasons: ["Winter", "Spring", "Summer", "Fall"],
    icons: ["mdi-snowflake", "mdi-leaf", "mdi-fire", "mdi-water"],
    ex1: { label: "color", val: 25, color: "orange darken-3" },
    ex2: { label: "track-color", val: 75, color: "green lighten-1" },
    ex3: { label: "thumb-color", val: 50, color: "red" },
    validationvalue: 30,
    validationrules: [v => v <= 40 || "Only 40 in stock"]
  }),
  methods: {
    season(val) {
      return this.icons[val];
    }
  }
};
</script>