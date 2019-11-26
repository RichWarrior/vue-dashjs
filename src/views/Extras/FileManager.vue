<template>
  <div>
    <v-row class="ma-0">
      <v-row class="ma-0">
        <v-col cols="12" class="pa-1">
          <v-col class="pa-1">
            <v-card>
              <v-card-text>
                <v-file-input
                  label="File input"
                  outlined
                  solo
                  prepend-icon="fa fa-search"
                  show-size
                  chips
                  counter
                ></v-file-input>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col class="pa-1">
            <v-card>
              <v-toolbar>
                <v-toolbar-title>
                  <h1 class="title">Folders</h1>
                </v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-row class="ma-0">
                  <v-col class="pa-0">
                    <v-row class="ma-0">
                      <v-icon size="12" color="blue">fa fa-circle</v-icon>
                      <v-col>
                        <h1 class="subtitle-1 black--text">All</h1>
                      </v-col>
                      <v-col class="text-right">
                        <v-chip class="blue">
                          <span class="white--text">49</span>
                        </v-chip>
                      </v-col>
                    </v-row>
                  </v-col>
                </v-row>
                <v-divider></v-divider>
                <v-row class="ma-0">
                  <v-col class="pa-0">
                    <v-row class="ma-0">
                      <v-icon size="12" color="green">fa fa-circle</v-icon>
                      <v-col>
                        <h1 class="subtitle-1 black--text">Audio</h1>
                      </v-col>
                      <v-col class="text-right">
                        <v-chip class="green">
                          <span class="white--text">5</span>
                        </v-chip>
                      </v-col>
                    </v-row>
                  </v-col>
                </v-row>
                <v-divider></v-divider>
                <v-row class="ma-0">
                  <v-col class="pa-0">
                    <v-row class="ma-0">
                      <v-icon size="12" color="red">fa fa-circle</v-icon>
                      <v-col>
                        <h1 class="subtitle-1 black--text">Movie</h1>
                      </v-col>
                      <v-col class="text-right">
                        <v-chip class="red">
                          <span class="white--text">12</span>
                        </v-chip>
                      </v-col>
                    </v-row>
                  </v-col>
                </v-row>
                <v-divider></v-divider>
                <v-row class="ma-0">
                  <v-col class="pa-0">
                    <v-row class="ma-0">
                      <v-icon size="12" color="orange">fa fa-circle</v-icon>
                      <v-col>
                        <h1 class="subtitle-1 black--text">Image</h1>
                      </v-col>
                      <v-col class="text-right">
                        <v-chip class="orange">
                          <span class="white--text">22</span>
                        </v-chip>
                      </v-col>
                    </v-row>
                  </v-col>
                </v-row>
                <v-divider></v-divider>
                <v-row class="ma-0">
                  <v-col class="pa-0">
                    <v-row class="ma-0">
                      <v-icon size="12" color="purple">fa fa-circle</v-icon>
                      <v-col>
                        <h1 class="subtitle-1 black--text">Code</h1>
                      </v-col>
                      <v-col class="text-right">
                        <v-chip class="purple">
                          <span class="white--text">9</span>
                        </v-chip>
                      </v-col>
                    </v-row>
                  </v-col>
                </v-row>
                <v-divider></v-divider>
                <v-row class="ma-0">
                  <v-col class="pa-0 text-left">
                    <span class="subtitle-2 black--text">Storage</span>
                  </v-col>
                  <v-col class="pa-0 text-right">
                    <span class="subtitle-2 black--text">25 GB/100GB</span>
                  </v-col>
                </v-row>
                <v-row class="mt-2 mb-2 ma-0">
                  <v-progress-linear value="25" max-value="100" color="primary"></v-progress-linear>
                </v-row>
                <v-divider></v-divider>
              </v-card-text>
            </v-card>
          </v-col>
        </v-col>
      </v-row>
    </v-row>
    <v-row class="ma-0">
      <v-col cols="12" lg="2" md="2" sm="12" xs="12" v-for="(item,index) in items" :key="index">
        <v-card>
          <v-toolbar>
            <v-col class="text-right">
              <v-btn icon>
                <v-icon>fa fa-download</v-icon>
              </v-btn>
            </v-col>
          </v-toolbar>
          <v-card-text>
            <v-row align="center" justify="center">
              <v-col class="text-center">
                <v-icon color="primary">{{item.icon}}</v-icon>
              </v-col>
            </v-row>
            <v-row align="center" justify="center">
              <v-col class="text-center">
                <span class="subtitle-1 black--text">{{item.name}}</span>
              </v-col>
            </v-row>
            <v-row>
              <v-col class="text-left">
                <span class="caption black--text">{{item.size}}</span>
              </v-col>
              <v-col class="text-right">
                <span class="caption black--text">{{item.time}}</span>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        icon: "fa fa-music",
        name: "A good song.ogg",
        size: "6.3MB",
        time: "10m Ago"
      },
      {
        icon: "fa fa-music",
        name: "A good song.ogg",
        size: "6.3MB",
        time: "10m Ago"
      },
      {
        icon: "fa fa-music",
        name: "A good song.ogg",
        size: "6.3MB",
        time: "10m Ago"
      },
      {
        icon: "fa fa-music",
        name: "A good song.ogg",
        size: "6.3MB",
        time: "10m Ago"
      },
      {
        icon: "fa fa-music",
        name: "A good song.ogg",
        size: "6.3MB",
        time: "10m Ago"
      },
      {
        icon: "fa fa-music",
        name: "A good song.ogg",
        size: "6.3MB",
        time: "10m Ago"
      },
      {
        icon: "fa fa-music",
        name: "A good song.ogg",
        size: "6.3MB",
        time: "10m Ago"
      },
      {
        icon: "fa fa-music",
        name: "A good song.ogg",
        size: "6.3MB",
        time: "10m Ago"
      },
      {
        icon: "fa fa-music",
        name: "A good song.ogg",
        size: "6.3MB",
        time: "10m Ago"
      },
      {
        icon: "fa fa-music",
        name: "A good song.ogg",
        size: "6.3MB",
        time: "10m Ago"
      },
      {
        icon: "fa fa-music",
        name: "A good song.ogg",
        size: "6.3MB",
        time: "10m Ago"
      },
      {
        icon: "fa fa-music",
        name: "A good song.ogg",
        size: "6.3MB",
        time: "10m Ago"
      }
    ]
  })
};
</script>