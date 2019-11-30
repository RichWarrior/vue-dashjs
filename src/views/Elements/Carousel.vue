<template>
  <v-row class="ma-0">
    <v-col cols="12" md="6" sm="12" class="pa-1">
      <v-hover v-slot:default="{hover}">
        <v-card :elevation="hover ? 12 : 2">
          <v-toolbar>
            <v-toolbar-title>
              <h1 class="title">Usage</h1>
              <h1 class="caption">
                The
                <code>v-carousel</code> component expands upon
                <code>v-window</code> by providing additional features targeted at displaying images.
              </h1>
            </v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-carousel height="400">
              <v-carousel-item v-for="(color, i) in colors" :key="color">
                <v-sheet :color="color" height="100%" tile>
                  <v-row class="fill-height" align="center" justify="center">
                    <div class="display-3">Slide {{ i + 1 }}</div>
                  </v-row>
                </v-sheet>
              </v-carousel-item>
            </v-carousel>
          </v-card-text>
        </v-card>
      </v-hover>
    </v-col>
    <v-col cols="12" md="6" sm="12" class="pa-1">
      <v-hover v-slot:default="{hover}">
        <v-card :elevation="hover ? 12 : 2">
          <v-toolbar>
            <v-toolbar-title>
              <h1 class="title">Cycle</h1>
              <h1
                class="caption"
              >With the cycle prop you can have your slides automatically transition to the next available every 6s (default).</h1>
            </v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-carousel cycle height="400" hide-delimiter-background show-arrows-on-hover>
              <v-carousel-item v-for="(slide, i) in slides" :key="i">
                <v-sheet :color="colors[i]" height="100%">
                  <v-row class="fill-height" align="center" justify="center">
                    <div class="display-3">{{ slide }} Slide</div>
                  </v-row>
                </v-sheet>
              </v-carousel-item>
            </v-carousel>
          </v-card-text>
        </v-card>
      </v-hover>
    </v-col>
    <v-col cols="12" md="6" sm="12" class="pa-1">
      <v-hover v-slot:default="{hover}">
        <v-card :elevation="hover ? 12 : 2">
          <v-toolbar>
            <v-toolbar-title>
              <h1 class="title">Custom transition</h1>
              <h1 class="caption">
                The
                <code>v-carousel-item</code> component can have its transition/reverse-transition changed.
              </h1>
            </v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-carousel>
              <v-carousel-item
                v-for="(item,i) in items"
                :key="i"
                :src="item.src"
                reverse-transition="fade-transition"
                transition="fade-transition"
              ></v-carousel-item>
            </v-carousel>
          </v-card-text>
        </v-card>
      </v-hover>
    </v-col>
    <v-col cols="12" md="6" sm="12" class="pa-1">
      <v-hover v-slot:default="{hover}">
        <v-card :elevation="hover ? 12 : 2">
          <v-toolbar>
            <v-toolbar-title>
              <h1 class="title">Custom delimiters</h1>
              <h1 class="caption">Use any available icon as your carousel's slide delimiter.</h1>
            </v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-card elevation="24" class="mx-auto">
              <v-system-bar lights-out></v-system-bar>
              <v-carousel
                :continuous="false"
                :cycle="cycle"
                :show-arrows="false"
                hide-delimiter-background
                delimiter-icon="mdi-minus"
                height="390"
              >
                <v-carousel-item v-for="(slide, i) in slides" :key="i">
                  <v-sheet :color="colors[i]" height="100%" tile>
                    <v-row class="fill-height" align="center" justify="center">
                      <div class="display-3">{{ slide }} Slide</div>
                    </v-row>
                  </v-sheet>
                </v-carousel-item>
              </v-carousel>
              <v-list two-line>
                <v-list-item>
                  <v-list-item-avatar>
                    <v-img src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title>John Leider</v-list-item-title>
                    <v-list-item-subtitle>Author</v-list-item-subtitle>
                  </v-list-item-content>
                  <v-list-item-action>
                    <v-switch v-model="cycle" label="Cycle Slides" inset></v-switch>
                  </v-list-item-action>
                </v-list-item>
              </v-list>
            </v-card>
          </v-card-text>
        </v-card>
      </v-hover>
    </v-col>
    <v-col cols="12" md="6" sm="12" class="pa-1">
      <v-hover v-slot:default="{hover}">
        <v-card :elevation="hover ? 12 : 2">
          <v-toolbar>
            <v-toolbar-title>
              <h1 class="title">Hide controls</h1>
              <h1 class="caption">
                You can hide the carousel navigation controls with
                <code>:show-arrows="false</code>
              </h1>
            </v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-carousel :show-arrows="false">
              <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src"></v-carousel-item>
            </v-carousel>
          </v-card-text>
        </v-card>
      </v-hover>
    </v-col>
    <v-col cols="12" md="6" sm="12" class="pa-1">
      <v-hover v-slot:default="{hover}">
        <v-card :elevation="hover ? 12 : 2">
          <v-toolbar>
            <v-toolbar-title>
              <h1 class="title">Hide Delimiter</h1>
              <h1 class="caption">
                You can hide the bottom controls with
                <code>hide-delimiters</code> prop.
              </h1>
            </v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-carousel hide-delimiters>
              <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src"></v-carousel-item>
            </v-carousel>
          </v-card-text>
        </v-card>
      </v-hover>
    </v-col>
  </v-row>
</template>


<script>
export default {
  data: () => ({
    colors: ["primary", "secondary", "yellow darken-2", "red", "orange"],
    slides: ["First", "Second", "Third", "Fourth", "Fifth"],
    items: [
      {
        src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg"
      },
      {
        src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg"
      },
      {
        src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg"
      },
      {
        src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg"
      }
    ],
    cycle: false
  })
};
</script>