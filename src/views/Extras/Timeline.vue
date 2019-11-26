<template>
  <div>
    <v-row class="ma-2">
      <v-col class="pa-2" cols="12">
        <v-hover v-slot:default="{hover}">
          <v-card :elevation="hover ? 12 : 2">
            <v-toolbar>
              <v-col cols="12" class="pa-0">
                <v-toolbar-title>
                  <h1 class="title">Usage</h1>
                  <h1 class="caption">
                    <code>v-timeline's</code>in their simplest form display a vertical timeline that should contain at least one
                    <code>v-timeline-item.</code>
                  </h1>
                </v-toolbar-title>
              </v-col>
            </v-toolbar>
            <v-card-text>
              <v-timeline>
                <v-timeline-item>timeline item</v-timeline-item>
                <v-timeline-item class="text-right">timeline item</v-timeline-item>
                <v-timeline-item>timeline item</v-timeline-item>
              </v-timeline>
            </v-card-text>
          </v-card>
        </v-hover>
      </v-col>
      <v-col class="pa-2" cols="12">
        <v-hover v-slot:default="{hover}">
          <v-card :elevation="hover ? 12 :2">
            <v-toolbar>
              <v-col cols="12" class="pa-0">
                <h1 class="title">Samll Dots</h1>
                <h1 class="caption">
                  The
                  <code>small</code> prop allows alternate styles to provide a unique design
                </h1>
              </v-col>
            </v-toolbar>
            <v-card-text>
              <v-timeline :dense="$vuetify.breakpoint.smAndDown">
                <v-timeline-item color="purple lighten-2" fill-dot right>
                  <v-card>
                    <v-card-title class="purple lighten-2">
                      <v-icon dark size="42" class="mr-4">mdi-magnify</v-icon>
                      <h2 class="display-1 white--text font-weight-light">Title 1</h2>
                    </v-card-title>
                    <v-container>
                      <v-row>
                        <v-col
                          cols="12"
                          md="10"
                        >Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit.</v-col>
                        <v-col class="hidden-sm-and-down text-right" md="2">
                          <v-icon size="64">mdi-calendar-text</v-icon>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-card>
                </v-timeline-item>

                <v-timeline-item color="amber lighten-1" fill-dot left small>
                  <v-card>
                    <v-card-title class="amber lighten-1 justify-end">
                      <h2 class="display-1 mr-4 white--text font-weight-light">Title 2</h2>
                      <v-icon dark size="42">mdi-home-outline</v-icon>
                    </v-card-title>
                    <v-container>
                      <v-row>
                        <v-col
                          cols="12"
                          md="8"
                        >Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit.</v-col>
                        <v-col cols="12" md="4">Lorem ipsum dolor sit amet, no nam oblique veritus.</v-col>
                      </v-row>
                    </v-container>
                  </v-card>
                </v-timeline-item>

                <v-timeline-item color="cyan lighten-1" fill-dot right>
                  <v-card>
                    <v-card-title class="cyan lighten-1">
                      <v-icon class="mr-4" dark size="42">mdi-email-outline</v-icon>
                      <h2 class="display-1 white--text font-weight-light">Title 3</h2>
                    </v-card-title>
                    <v-container>
                      <v-row>
                        <v-col
                          v-for="n in 3"
                          :key="n"
                          cols="12"
                          md="4"
                        >Lorem ipsum dolor sit amet, no nam oblique veritus no nam oblique.</v-col>
                      </v-row>
                    </v-container>
                  </v-card>
                </v-timeline-item>

                <v-timeline-item color="red lighten-1" fill-dot left small>
                  <v-card>
                    <v-card-title class="red lighten-1 justify-end">
                      <h2 class="display-1 mr-4 white--text font-weight-light">Title 4</h2>
                      <v-icon dark size="42">mdi-account-multiple-outline</v-icon>
                    </v-card-title>
                    <v-container>
                      <v-row>
                        <v-col class="hidden-sm-and-down" md="2">
                          <v-icon size="64">mdi-server-network</v-icon>
                        </v-col>
                        <v-col
                          cols="12"
                          md="10"
                        >Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus.</v-col>
                      </v-row>
                    </v-container>
                  </v-card>
                </v-timeline-item>

                <v-timeline-item color="green lighten-1" fill-dot right>
                  <v-card>
                    <v-card-title class="green lighten-1">
                      <v-icon class="mr-4" dark size="42">mdi-phone-in-talk</v-icon>
                      <h2 class="display-1 white--text font-weight-light">Title 5</h2>
                    </v-card-title>
                    <v-container>
                      <v-row>
                        <v-col>Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.</v-col>
                      </v-row>
                    </v-container>
                  </v-card>
                </v-timeline-item>
              </v-timeline>
            </v-card-text>
          </v-card>
        </v-hover>
      </v-col>
      <v-col cols="12" class="pa-2">
        <v-hover v-slot:default="{hover}">
          <v-card :elevation="hover ? 12 : 2">
            <v-col class="pa-0">
              <v-toolbar>
                <v-toolbar-title>
                  <h1 class="title">Icon Dots</h1>
                  <h1 class="caption">
                    Conditionally use icons within the
                    <code>v-timeline-item</code>'s dot to provide additional context.
                  </h1>
                </v-toolbar-title>
              </v-toolbar>
            </v-col>
            <v-card-text>
              <v-timeline align-top :dense="$vuetify.breakpoint.smAndDown">
                <v-timeline-item
                  v-for="(item, i) in items"
                  :key="i"
                  :color="item.color"
                  :icon="item.icon"
                  fill-dot
                >
                  <v-card :color="item.color" dark>
                    <v-card-title class="title">Lorem Ipsum Dolor</v-card-title>
                    <v-card-text class="white text--primary">
                      <p>Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.</p>
                      <v-btn :color="item.color" class="mx-0" outlined>Button</v-btn>
                    </v-card-text>
                  </v-card>
                </v-timeline-item>
              </v-timeline>
            </v-card-text>
          </v-card>
        </v-hover>
      </v-col>
      <v-col cols="12" class="pa-2">
        <v-hover v-slot:default="{hover}">
          <v-card :elevation="hover ? 12: 2">
            <v-toolbar>
              <v-col class="pa-0">
                <v-toolbar-title>
                  <h1 class="title">Timeline Card</h1>
                  <h1 class="caption">
                    If you place a
                    <code>v-card</code> inside of a
                    <code>v-timeline-item</code>, a caret will appear on the side of the card.
                  </h1>
                </v-toolbar-title>
              </v-col>
            </v-toolbar>
            <v-card-text>
              <v-timeline>
                <v-timeline-item v-for="n in 3" :key="n" color="red lighten-2" large>
                  <template v-slot:opposite>
                    <span>Tus eu perfecto</span>
                  </template>
                  <v-card class="elevation-2">
                    <v-card-title class="headline">Lorem ipsum</v-card-title>
                    <v-card-text>Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.</v-card-text>
                  </v-card>
                </v-timeline-item>
              </v-timeline>
            </v-card-text>
          </v-card>
        </v-hover>
      </v-col>
      <v-col cols="12" class="pa-2">
        <v-hover v-slot:default="{hover}">
          <v-card :elevation="hover ? 12: 2">
            <v-toolbar>
              <v-col class="pa-0">
                <v-toolbar-title>
                  <h1 class="title">Opposite Slot</h1>
                  <h1
                    class="caption"
                  >The opposite slot provides an additional layer of customization within your timelines.</h1>
                </v-toolbar-title>
              </v-col>
            </v-toolbar>
            <v-card-text>
              <v-timeline>
                <v-timeline-item v-for="(year, i) in years" :key="i" :color="year.color" small>
                  <template v-slot:opposite>
                    <span
                      :class="`headline font-weight-bold ${year.color}--text`"
                      v-text="year.year"
                    ></span>
                  </template>
                  <div class="py-4">
                    <h2 :class="`headline font-weight-light mb-4 ${year.color}--text`">Lorem ipsum</h2>
                    <div>Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.</div>
                  </div>
                </v-timeline-item>
              </v-timeline>
            </v-card-text>
          </v-card>
        </v-hover>
      </v-col>
      <v-col cols="12" class="pa-2">
        <v-hover v-slot:default="{hover}">
          <v-card :elevation="hover ? 12: 2">
            <v-toolbar>
              <v-col class="pa-0">
                <v-toolbar-title>
                  <h1 class="title">Avatar dots</h1>
                  <h1 class="caption">
                    Insert avatars into dots with use of the
                    <code>icon</code> slot and
                    <code>v-avatar</code>.
                  </h1>
                </v-toolbar-title>
              </v-col>
            </v-toolbar>
            <v-card-text>
              <v-timeline>
                <v-timeline-item v-for="n in 4" :key="n" large>
                  <template v-slot:icon>
                    <v-avatar>
                      <img src="http://i.pravatar.cc/64" />
                    </v-avatar>
                  </template>
                  <template v-slot:opposite>
                    <span>Tus eu perfecto</span>
                  </template>
                  <v-card class="elevation-2">
                    <v-card-title class="headline">Lorem ipsum</v-card-title>
                    <v-card-text>Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.</v-card-text>
                  </v-card>
                </v-timeline-item>
              </v-timeline>
            </v-card-text>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        color: "red lighten-2",
        icon: "mdi-star"
      },
      {
        color: "purple darken-1",
        icon: "mdi-book-variant"
      },
      {
        color: "green lighten-1",
        icon: "mdi-airballoon"
      },
      {
        color: "indigo",
        icon: "mdi-buffer"
      }
    ],
    years: [
      {
        color: "cyan",
        year: "1960"
      },
      {
        color: "green",
        year: "1970"
      },
      {
        color: "pink",
        year: "1980"
      },
      {
        color: "amber",
        year: "1990"
      },
      {
        color: "orange",
        year: "2000"
      }
    ]
  })
};
</script>