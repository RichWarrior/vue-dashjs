<template>
  <v-row class="ma-2">
    <v-col cols="12" md="6" sm="12">
      <v-hover v-slot:default="{hover}">
        <v-card height="400" :elevation="hover ? 12 :2">
          <v-toolbar>
            <v-toolbar-title>
              <h1 class="title">Outlined Cards</h1>
              <h1 class="caption">An outlined card has 0 elevation and contains a soft border.</h1>
            </v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-card class="mx-auto" max-width="344" outlined>
              <v-list-item three-line>
                <v-list-item-content>
                  <div class="overline mb-4">OVERLINE</div>
                  <v-list-item-title class="headline mb-1">Headline 5</v-list-item-title>
                  <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar>
              </v-list-item>

              <v-card-actions>
                <v-btn text>Button</v-btn>
                <v-btn text>Button</v-btn>
              </v-card-actions>
            </v-card>
          </v-card-text>
        </v-card>
      </v-hover>
    </v-col>
    <v-col cols="12" md="6" sm="12">
      <v-hover v-slot:default="{hover}">
        <v-card height="400" :elevation="hover ? 12: 2">
          <v-toolbar>
            <v-toolbar-title>
              <h1 class="title">Intermediate</h1>
              <h1 class="caption">
                The
                <code>v-card</code> component is useful for wrapping content.
              </h1>
            </v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-card class="d-inline-block mx-auto">
              <v-container>
                <v-row justify="space-between">
                  <v-col cols="auto">
                    <v-img
                      height="200"
                      width="200"
                      src="https://cdn.vuetifyjs.com/images/cards/store.jpg"
                    ></v-img>
                  </v-col>

                  <v-col cols="auto" class="text-center pl-0">
                    <v-row class="flex-column ma-0 fill-height" justify="center">
                      <v-col class="px-0">
                        <v-btn icon>
                          <v-icon>mdi-heart</v-icon>
                        </v-btn>
                      </v-col>

                      <v-col class="px-0">
                        <v-btn icon>
                          <v-icon>mdi-bookmark</v-icon>
                        </v-btn>
                      </v-col>

                      <v-col class="px-0">
                        <v-btn icon>
                          <v-icon>mdi-share-variant</v-icon>
                        </v-btn>
                      </v-col>
                    </v-row>
                  </v-col>
                </v-row>
              </v-container>
            </v-card>
          </v-card-text>
        </v-card>
      </v-hover>
    </v-col>
    <v-col cols="12" md="6" sm="12">
      <v-hover v-slot:default="{hover}">
        <v-card height="450" :elevation="hover?  12 :2">
          <v-toolbar>
            <v-toolbar-title>
              <h1 class="title">Information card</h1>
              <h1
                class="caption"
              >Cards are entry points to more detailed information. To keep things concise, ensure to limit the number of actions the user can take.</h1>
            </v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-card class="mx-auto" max-width="344">
              <v-card-text>
                <div>Word of the Day</div>
                <p class="display-1 text--primary">be•nev•o•lent</p>
                <p>adjective</p>
                <div class="text--primary">
                  well meaning and kindly.
                  <br />"a benevolent smile"
                </div>
              </v-card-text>
              <v-card-actions>
                <v-btn text color="deep-purple accent-4">Learn More</v-btn>
              </v-card-actions>
            </v-card>
          </v-card-text>
        </v-card>
      </v-hover>
    </v-col>
    <v-col cols="12" md="6" sm="12">
      <v-hover v-slot:default="{hover}">
        <v-card height="450" :elevation="hover ? 12 : 2">
          <v-toolbar>
            <v-toolbar-title>
              <h1 class="title">Media with text</h1>
              <h1
                class="caption"
              >Using the layout system, we can add custom text anywhere within the background.</h1>
            </v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-card class="mx-auto" max-width="400">
              <v-img
                class="white--text align-end"
                height="200px"
                src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
              >
                <v-card-title>Top 10 Australian beaches</v-card-title>
              </v-img>

              <v-card-title class="pb-0">Number 10</v-card-title>

              <v-card-text class="text--primary">
                <div>Whitehaven Beach</div>

                <div>Whitsunday Island, Whitsunday Islands</div>
              </v-card-text>

              <v-card-actions>
                <v-btn color="orange" text>Share</v-btn>

                <v-btn color="orange" text>Explore</v-btn>
              </v-card-actions>
            </v-card>
          </v-card-text>
        </v-card>
      </v-hover>
    </v-col>
    <v-col cols="12" md="6" sm="12">
      <v-hover v-slot:default="{hover}">
        <v-card height="725" :elevation="hover ? 12 : 2">
          <v-toolbar>
            <v-toolbar-title>
              <h1 class="title">Grids</h1>
              <h1 class="caption">Using grids, you can create beautiful layouts.</h1>
            </v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-card class="mx-auto" max-width="500">
              <v-system-bar color="indigo darken-2" dark>
                <v-spacer></v-spacer>

                <v-icon>mdi-window-minimize</v-icon>

                <v-icon>mdi-window-maximize</v-icon>

                <v-icon>mdi-close</v-icon>
              </v-system-bar>

              <v-toolbar color="indigo" dark>
                <v-app-bar-nav-icon></v-app-bar-nav-icon>

                <v-toolbar-title>Discover</v-toolbar-title>

                <v-spacer></v-spacer>

                <v-btn icon>
                  <v-icon>mdi-magnify</v-icon>
                </v-btn>
              </v-toolbar>

              <v-container fluid>
                <v-row dense>
                  <v-col v-for="card in cards" :key="card.title" :cols="card.flex">
                    <v-card>
                      <v-img
                        :src="card.src"
                        class="white--text align-end"
                        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                        height="200px"
                      >
                        <v-card-title v-text="card.title"></v-card-title>
                      </v-img>

                      <v-card-actions>
                        <v-spacer></v-spacer>

                        <v-btn icon>
                          <v-icon>mdi-heart</v-icon>
                        </v-btn>

                        <v-btn icon>
                          <v-icon>mdi-bookmark</v-icon>
                        </v-btn>

                        <v-btn icon>
                          <v-icon>mdi-share-variant</v-icon>
                        </v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-col>
                </v-row>
              </v-container>
            </v-card>
          </v-card-text>
        </v-card>
      </v-hover>
    </v-col>
    <v-col cols="12" sm="12" md="6">
      <v-hover v-slot:default="{hover}">
        <v-card height="725" :elevation="hover ? 12 :2">
          <v-toolbar>
            <v-toolbar-title>
              <h1 class="title">Horizontal cards</h1>
              <h1 class="caption">
                Using
                <code>v-flex</code>, you can create customized horizontal cards. Use the
                <code>contain</code> property to shrink the
                <code>v-img</code> to fit inside the container, instead of covering.
              </h1>
            </v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-card max-width="400" class="mx-auto">
              <v-system-bar color="pink darken-2" dark>
                <v-spacer></v-spacer>

                <v-icon>mdi-window-minimize</v-icon>

                <v-icon>mdi-window-maximize</v-icon>

                <v-icon>mdi-close</v-icon>
              </v-system-bar>

              <v-app-bar dark color="pink">
                <v-app-bar-nav-icon></v-app-bar-nav-icon>

                <v-toolbar-title>My Music</v-toolbar-title>

                <v-spacer></v-spacer>

                <v-btn icon>
                  <v-icon>mdi-magnify</v-icon>
                </v-btn>
              </v-app-bar>

              <v-container>
                <v-row dense>
                  <v-col cols="12">
                    <v-card color="#385F73" dark>
                      <v-card-title class="caption">Unlimited music now</v-card-title>

                      <v-card-title
                        class="pa-3 caption"
                      >Listen to your favorite artists and albums whenever and wherever, online and offline.</v-card-title>

                      <v-card-actions>
                        <v-btn text>Listen Now</v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-col>

                  <v-col v-for="(item, i) in items" :key="i" cols="12">
                    <v-card :color="item.color" dark>
                      <div class="d-flex flex-no-wrap justify-space-between">
                        <div>
                          <v-card-title class="caption" v-text="item.title"></v-card-title>

                          <v-card-title class="pa-3 caption" v-text="item.artist"></v-card-title>
                        </div>

                        <v-avatar class="ma-3" size="125" tile>
                          <v-img :src="item.src"></v-img>
                        </v-avatar>
                      </div>
                    </v-card>
                  </v-col>
                </v-row>
              </v-container>
            </v-card>
          </v-card-text>
        </v-card>
      </v-hover>
    </v-col>
    <v-col cols="12" md="6" sm="12">
      <v-hover v-slot:default="{hover}">
        <v-card height="600" :elevation="hover ? 12 : 2">
          <v-toolbar>
            <v-toolbar-title>
              <h1 class="title">Custom actions</h1>
              <h1
                class="caption"
              >With a simple conditional, you can easily add supplementary text that is hidden until opened.</h1>
            </v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-card class="mx-auto" max-width="344">
              <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="200px"></v-img>

              <v-card-title class="caption">Top western road trips</v-card-title>

              <v-card-title class="caption">1,000 miles of wonder</v-card-title>

              <v-card-actions>
                <v-btn text>Share</v-btn>

                <v-btn color="purple" text>Explore</v-btn>

                <v-spacer></v-spacer>

                <v-btn icon @click="show = !show">
                  <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                </v-btn>
              </v-card-actions>

              <v-expand-transition>
                <div v-show="show">
                  <v-divider></v-divider>

                  <v-card-text
                    class="caption"
                  >I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.</v-card-text>
                </div>
              </v-expand-transition>
            </v-card>
          </v-card-text>
        </v-card>
      </v-hover>
    </v-col>
    <v-col cols="12" md="6" sm="12">
      <v-hover v-slot:default="{hover}">
        <v-card height="600" :elevation="hover ? 12 : 2">
          <v-toolbar>
            <v-toolbar-title>
              <h1 class="title">Twitter card</h1>
              <h1 class="caption">
                The
                <code>v-card</code> component has multiple children components that help you build complex examples without having to worry about spacing.
              </h1>
            </v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-card class="mx-auto" color="#26c6da" dark max-width="400">
              <v-card-title>
                <v-icon large left>mdi-twitter</v-icon>
                <span class="title font-weight-light">Twitter</span>
              </v-card-title>

              <v-card-text
                class="headline font-weight-bold"
              >"Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well."</v-card-text>

              <v-card-actions>
                <v-list-item class="grow">
                  <v-list-item-avatar color="grey darken-3">
                    <v-img
                      class="elevation-6"
                      src="https://cdn.vuetifyjs.com/images/cards/foster.jpg"
                    ></v-img>
                  </v-list-item-avatar>

                  <v-list-item-content>
                    <v-list-item-title>Evan You</v-list-item-title>
                  </v-list-item-content>

                  <v-row align="center" justify="end">
                    <v-icon class="mr-1">mdi-heart</v-icon>
                    <span class="subheading mr-2">256</span>
                    <span class="mr-1">·</span>
                    <v-icon class="mr-1">mdi-share-variant</v-icon>
                    <span class="subheading">45</span>
                  </v-row>
                </v-list-item>
              </v-card-actions>
            </v-card>
          </v-card-text>
        </v-card>
      </v-hover>
    </v-col>
    <v-col cols="12" md="6" sm="12">
      <v-hover v-slot:default="{hover}">
        <v-card height="850" :elevation="hover ? 12 : 2">
          <v-toolbar>
            <v-toolbar-title>
              <h1 class="title">Loading Card</h1>
              <h1 class="caption">Cards can be set to a loading state when processing a user action.</h1>
            </v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-card :loading="loading" class="mx-auto my-12" max-width="374">
              <v-img height="250" src="https://cdn.vuetifyjs.com/images/cards/cooking.png"></v-img>

              <v-card-title>Cafe Badilico</v-card-title>

              <v-card-text>
                <v-row align="center" class="mx-0">
                  <v-rating :value="4.5" color="amber" dense half-increments readonly size="14"></v-rating>

                  <div class="grey--text ml-4">4.5 (413)</div>
                </v-row>

                <div class="my-4 subtitle-1 black--text">$ • Italian, Cafe</div>

                <div>Small plates, salads & sandwiches an inteimate setting with 12 indoor seats plus patio seating.</div>
              </v-card-text>

              <v-divider class="mx-4"></v-divider>

              <v-card-title>Tonight's availability</v-card-title>

              <v-card-text>
                <v-chip-group
                  v-model="selection"
                  active-class="deep-purple accent-4 white--text"
                  column
                >
                  <v-chip>5:30PM</v-chip>

                  <v-chip>7:30PM</v-chip>

                  <v-chip>8:00PM</v-chip>

                  <v-chip>9:00PM</v-chip>
                </v-chip-group>
              </v-card-text>

              <v-card-actions>
                <v-btn color="deep-purple accent-4" text @click="reserve">Reserve</v-btn>
              </v-card-actions>
            </v-card>
          </v-card-text>
        </v-card>
      </v-hover>
    </v-col>
    <v-col cols="12" md="6" sm="12">
      <v-hover v-slot:default="{hover}">
        <v-card height="850" :elevation="hover?12:2">
          <v-toolbar>
            <v-toolbar-title>
              <h1 class="title">Weather card</h1>
              <h1 class="caption">
                Using
                <code>v-list-items</code> and a
                <code>v-slider</code>, we are able to create a unique weather card.
              </h1>
            </v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-card class="mx-auto" color="#F9F9F9" max-width="400">
              <v-list-item two-line>
                <v-list-item-content>
                  <v-list-item-title class="headline">San Francisco</v-list-item-title>
                  <v-list-item-subtitle>Mon, 12:30 PM, Mostly sunny</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>

              <v-card-text>
                <v-row align="center">
                  <v-col class="display-3" cols="6">23&deg;C</v-col>
                  <v-col cols="6">
                    <v-img
                      src="https://cdn.vuetifyjs.com/images/cards/sun.png"
                      alt="Sunny image"
                      width="92"
                    ></v-img>
                  </v-col>
                </v-row>
              </v-card-text>

              <v-list-item>
                <v-list-item-icon>
                  <v-icon>mdi-send</v-icon>
                </v-list-item-icon>
                <v-list-item-subtitle>23 km/h</v-list-item-subtitle>
              </v-list-item>

              <v-list-item>
                <v-list-item-icon>
                  <v-icon>mdi-cloud-download</v-icon>
                </v-list-item-icon>
                <v-list-item-subtitle>48%</v-list-item-subtitle>
              </v-list-item>

              <v-slider v-model="time" :max="6" :tick-labels="labels" class="mx-4" ticks></v-slider>

              <v-list class="transparent">
                <v-list-item v-for="item in forecast" :key="item.day">
                  <v-list-item-title>{{ item.day }}</v-list-item-title>

                  <v-list-item-icon>
                    <v-icon>{{ item.icon }}</v-icon>
                  </v-list-item-icon>

                  <v-list-item-subtitle class="text-right">{{ item.temp }}</v-list-item-subtitle>
                </v-list-item>
              </v-list>

              <v-divider></v-divider>

              <v-card-actions>
                <v-btn text>Full Report</v-btn>
              </v-card-actions>
            </v-card>
          </v-card-text>
        </v-card>
      </v-hover>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    cards: [
      {
        title: "Pre-fab homes",
        src: "https://cdn.vuetifyjs.com/images/cards/house.jpg",
        flex: 12
      },
      {
        title: "Favorite road trips",
        src: "https://cdn.vuetifyjs.com/images/cards/road.jpg",
        flex: 6
      },
      {
        title: "Best airlines",
        src: "https://cdn.vuetifyjs.com/images/cards/plane.jpg",
        flex: 6
      }
    ],
    show: true,
    items: [
      {
        color: "#1F7087",
        src: "https://cdn.vuetifyjs.com/images/cards/foster.jpg",
        title: "Supermodel",
        artist: "Foster the People"
      },
      {
        color: "#952175",
        src: "https://cdn.vuetifyjs.com/images/cards/halcyon.png",
        title: "Halcyon Days",
        artist: "Ellie Goulding"
      }
    ],
    loading: false,
    selection: 1,
    labels: ["SU", "MO", "TU", "WED", "TH", "FR", "SA"],
    time: 0,
    forecast: [
      {
        day: "Tuesday",
        icon: "mdi-white-balance-sunny",
        temp: "24\xB0/12\xB0"
      },
      {
        day: "Wednesday",
        icon: "mdi-white-balance-sunny",
        temp: "22\xB0/14\xB0"
      },
      { day: "Thursday", icon: "mdi-cloud", temp: "25\xB0/15\xB0" }
    ]
  }),
  methods: {
    reserve() {
      this.loading = true;

      setTimeout(() => (this.loading = false), 2000);
    }
  }
};
</script>