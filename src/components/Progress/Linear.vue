<template>
  <v-row class="ma-0">
    <v-col cols="12" lg="6" md="6">
      <v-card>
        <v-toolbar>
          <v-toolbar-title>
            <h1 class="title">Determinate</h1>
          </v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <v-row class="ma-0">
            <v-col class="pa-1">
              <v-progress-linear :value="50" color="deep-purple accent-4"></v-progress-linear>
              <br />
              <v-progress-linear :value="75" color="pink"></v-progress-linear>
              <br />
              <v-progress-linear :value="100" color="indigo darken-2"></v-progress-linear>
              <br />
              <v-progress-linear :value="25" color="amber"></v-progress-linear>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="12" lg="6" md="6">
      <v-card>
        <v-toolbar>
          <v-toolbar-title>
            <h1 class="title">Indeterminate</h1>
          </v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <v-row class="ma-0">
            <v-col class="pa-1">
              <v-progress-linear indeterminate color="yellow darken-2"></v-progress-linear>
              <br />
              <v-progress-linear indeterminate color="green"></v-progress-linear>
              <br />
              <v-progress-linear indeterminate color="teal"></v-progress-linear>
              <br />
              <v-progress-linear indeterminate color="cyan"></v-progress-linear>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="12" lg="6" md="6">
      <v-card>
        <v-toolbar>
          <v-toolbar-title>
            <h1 class="title">Buffer</h1>
          </v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <v-row class="ma-0">
            <v-col class="pa-1">
              <v-progress-linear :value="25" :buffer-value="bufferValue"></v-progress-linear>
              <br />
              <v-progress-linear :value="50" :buffer-value="bufferValue" color="purple"></v-progress-linear>
              <br />
              <v-progress-linear :value="75" :buffer-value="bufferValue" color="red lighten-2"></v-progress-linear>
              <br />
              <v-progress-linear :value="100" :buffer-value="bufferValue" color="black"></v-progress-linear>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="12" lg="6" md="6">
      <v-card>
        <v-toolbar>
          <v-toolbar-title>
            <h1 class="title">Custom Colors</h1>
          </v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <v-row class="ma-0">
            <v-col class="pa-1">
              <v-progress-linear
                background-color="pink lighten-3"
                color="pink lighten-1"
                value="15"
              ></v-progress-linear>
              <br />
              <v-progress-linear background-color="blue-grey" color="lime" value="30"></v-progress-linear>
              <br />
              <v-progress-linear background-color="success" color="error" value="45"></v-progress-linear>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="12" lg="6" md="6">
      <v-card>
        <v-toolbar>
          <v-toolbar-title>
            <h1 class="title">Rounded</h1>
          </v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <v-row class="ma-0">
            <v-col class="pa-1">
              <v-progress-linear color="red darken-2" rounded value="100"></v-progress-linear>
              <br />
              <v-progress-linear color="indigo" rounded value="100"></v-progress-linear>
              <br />
              <v-progress-linear color="teal" rounded value="100"></v-progress-linear>
              <br />
              <v-progress-linear color="cyan darken-2" rounded value="100"></v-progress-linear>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="12" lg="6" md="6">
      <v-card>
        <v-toolbar>
          <v-toolbar-title>
            <h1 class="title">Stream</h1>
          </v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <v-row class="ma-0">
            <v-col class="pa-1">
              <v-progress-linear color="red lighten-2" buffer-value="0" stream></v-progress-linear>
              <br />
              <v-progress-linear color="teal" buffer-value="0" value="20" stream></v-progress-linear>
              <br />
              <v-progress-linear buffer-value="50" stream color="cyan"></v-progress-linear>
              <br />
              <v-progress-linear buffer-value="60" value="40" stream color="orange"></v-progress-linear>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="12" lg="6" md="6">
      <v-card>
        <v-toolbar>
          <v-toolbar-title>
            <h1 class="title">Slots</h1>
          </v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <v-row class="ma-0">
            <v-col class="pa-1">
              <v-progress-linear v-model="power" color="amber" height="25" reactive>
                <template v-slot="{ value }">
                  <strong>{{ Math.ceil(value) }}%</strong>
                </template>
              </v-progress-linear>

              <br />

              <v-progress-linear v-model="skill" color="blue-grey" height="25" reactive>
                <template v-slot="{ value }">
                  <strong>{{ Math.ceil(value) }}%</strong>
                </template>
              </v-progress-linear>

              <br />

              <v-progress-linear v-model="knowledge" height="25" reactive>
                <strong>{{ Math.ceil(knowledge) }}%</strong>
              </v-progress-linear>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="12" lg="6" md="6">
      <v-card>
        <v-toolbar>
          <v-toolbar-title>
            <h1 class="title">Striped</h1>
          </v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <v-row class="ma-0">
            <v-col class="pa-1">
              <v-progress-linear color="light-blue" height="10" value="10" striped></v-progress-linear>
              <br />
              <v-progress-linear color="light-green darken-4" height="10" value="20" striped></v-progress-linear>
              <br />
              <v-progress-linear height="10" value="45" striped color="lime"></v-progress-linear>
              <br />
              <v-progress-linear value="60" height="10" striped color="deep-orange"></v-progress-linear>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    skill: 20,
    knowledge: 33,
    power: 78
  })
};
</script>