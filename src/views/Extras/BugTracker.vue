<template>
  <div>
    <v-row class="ma-0">
      <v-col class="pa-1" cols="12" lg="4" md="4">
        <v-hover v-slot:default="{hover}">
          <v-card :elevation="hover ? 12 : 2">
            <v-toolbar>
              <v-icon>fa fa-chart-line</v-icon>
              <v-col class="text-left">
                <v-toolbar-title>
                  <h1 class="title">Statistic</h1>
                </v-toolbar-title>
              </v-col>
            </v-toolbar>
            <v-card-text>
              <v-row class="ma-0">
                <v-col class="pa-1" cols="12">
                  <h1 class="subtitle-1">Overvall progress</h1>
                  <v-progress-linear value="67" color="toolbarColor" height="25" reactive dark>
                    <template v-slot="{ value }">
                      <strong>{{ Math.ceil(value) }}%</strong>
                    </template>
                  </v-progress-linear>
                  <br />
                  <v-divider></v-divider>
                </v-col>
                <v-col class="pa-1" cols="12">
                  <v-progress-linear value="55" color="toolbarColor" height="25" reactive dark>
                    <template v-slot="{ value }">
                      <strong>Issue {{ Math.ceil(value) }}%</strong>
                    </template>
                  </v-progress-linear>
                </v-col>
                <v-col class="pa-1" cols="12">
                  <v-progress-linear value="25" color="green" height="25" reactive dark>
                    <template v-slot="{ value }">
                      <strong>Bugs {{ Math.ceil(value) }}%</strong>
                    </template>
                  </v-progress-linear>
                </v-col>
                <v-col class="pa-1" cols="12">
                  <v-progress-linear value="79" color="orange" height="25" reactive dark>
                    <template v-slot="{ value }">
                      <strong>Hours {{ Math.ceil(value) }}%</strong>
                    </template>
                  </v-progress-linear>
                </v-col>
                <v-col class="pa-1" cols="12">
                  <v-progress-linear value="38" color="red" height="25" reactive dark>
                    <template v-slot="{ value }">
                      <strong>Assign {{ Math.ceil(value) }}%</strong>
                    </template>
                  </v-progress-linear>
                </v-col>
              </v-row>
              <v-divider class="mt-2"></v-divider>
              <v-row class="ma-0">
                <v-col class="pa-1 text-left" cols="8">
                  <h1 class="subtitle-1 black--text">Assigned Hours</h1>
                </v-col>
                <v-col class="pa-1 text-left" cols="4">
                  <h1 class="subtitle-1 black--text">68 HRS</h1>
                </v-col>
              </v-row>
              <v-divider class="mt-1"></v-divider>
              <v-row class="ma-0">
                <v-col class="pa-1 text-left" cols="8">
                  <h1 class="subtitle-1 black--text">Time Consumed</h1>
                </v-col>
                <v-col class="pa-1 text-left" cols="4">
                  <h1 class="subtitle-1 black--text">32 HRS</h1>
                </v-col>
              </v-row>
              <v-divider class="mt-1"></v-divider>
              <v-row class="ma-0">
                <v-col class="pa-1 text-left" cols="8">
                  <h1 class="subtitle-1 black--text">Issues</h1>
                </v-col>
                <v-col class="pa-1 text-left" cols="4">
                  <h1 class="subtitle-1 black--text">19</h1>
                </v-col>
              </v-row>
              <v-divider class="mt-1"></v-divider>
              <v-row class="ma-0">
                <v-col class="pa-1 text-left" cols="8">
                  <h1 class="subtitle-1 black--text">Bugs</h1>
                </v-col>
                <v-col class="pa-1 text-left" cols="4">
                  <h1 class="subtitle-1 black--text">16</h1>
                </v-col>
              </v-row>
              <v-divider class="mt-1"></v-divider>
              <v-row class="ma-0">
                <v-col class="pa-1 text-left" cols="8">
                  <h1 class="subtitle-1 black--text">Health</h1>
                </v-col>
                <v-col class="pa-1 text-left" cols="4">
                  <v-icon color="red" class="mt-1 mb-1">fa fa-sad-tear</v-icon>
                </v-col>
              </v-row>
              <v-divider class="mt-1"></v-divider>
              <v-row class="ma-0">
                <v-col class="pa-1 text-left" cols="8">
                  <h1 class="subtitle-1 black--text">Commits</h1>
                </v-col>
                <v-col class="pa-1 text-left" cols="4">
                  <h1 class="subtitle-1 black--text">140</h1>
                </v-col>
              </v-row>
              <v-divider class="mt-1"></v-divider>
            </v-card-text>
          </v-card>
        </v-hover>
      </v-col>
      <v-col class="pa-1" cols="12" lg="8" md="8">
        <v-hover v-slot:default="{hover}">
          <v-card :elevation="hover ? 12 : 2">
            <v-toolbar>
              <v-icon>fa fa-bug</v-icon>
              <v-col class="text-left">
                <v-toolbar-title>
                  <h1 class="title">Bugs & Issues</h1>
                </v-toolbar-title>
              </v-col>
              <v-col class="text-right">
                <v-toolbar-title>
                  <h1 class="caption">{{getBugs}} Bugs / {{getIssues}} Issues</h1>
                </v-toolbar-title>
              </v-col>
            </v-toolbar>
            <v-card-text>
              <v-data-table :headers="headers" :items="items" :no-data-text="noDataText">
                <template v-slot:item.created="{item}">{{moment(item.created).fromNow()}}</template>
                <template v-slot:item.priority="{item}">
                  <v-icon :color="getPriorityColor(item)">fa fa-circle</v-icon>
                </template>
                <template v-slot:item.status="{item}">
                  <v-chip :color="getStatusColor(item)" dark>{{item.status}}</v-chip>
                </template>
              </v-data-table>
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
    noDataText: "Kayıt Bulunamadı",
    headers: [
      {
        text: "Type",
        align: "left",
        sortable: true,
        value: "type"
      },
      {
        text: "#ID",
        align: "left",
        sortable: false,
        value: "id"
      },
      {
        text: "Description",
        align: "left",
        sortable: false,
        value: "description"
      },
      {
        text: "Created",
        align: "left",
        sortable: false,
        value: "created"
      },
      {
        text: "Priority",
        align: "left",
        sortable: true,
        value: "priority"
      },
      {
        text: "Asigned",
        align: "left",
        sortable: false,
        value: "asign"
      },
      {
        text: "Status",
        align: "left",
        sortable: false,
        value: "status"
      }
    ],
    items: [
      {
        type: "Bug",
        id: "67654c9a-7d7c",
        description: "Maecenas mollis egestas convallis.",
        created: new Date().toJSON().slice(0, 10),
        priority: 1,
        asign: "Sylvia Daniels",
        status: "Open"
      },
      {
        type: "Task",
        id: "34f33346-d520",
        description: "Aliquam felis nibh, ultrices non elementum",
        created: new Date().toJSON().slice(0, 10),
        priority: 2,
        asign: "Sherry Carroll",
        status: "Progress"
      },
      {
        type: "Task",
        id: "5cbc5b8b-7528",
        description: "Praesent lacinia ultricies neque.",
        created: new Date().toJSON().slice(0, 10),
        priority: 3,
        asign: "Warren Gray",
        status: "Closed"
      }
    ]
  }),
  computed: {
    getBugs() {
      return this.items.filter(x => x.type == "Bug").length;
    },
    getIssues() {
      return this.items.filter(x => x.type == "Task").length;
    }
  },
  methods: {
    getPriorityColor(item) {
      let color = "";
      if (item.priority === 1) {
        color = "red";
      } else if (item.priority === 2) {
        color = "orange";
      } else {
        color = "green";
      }
      return color;
    },
    getStatusColor(item) {
      let color = "";
      if (item.status === "Open") {
        color = "green";
      } else if (item.status === "Progress") {
        color = "orange";
      } else {
        color = "red";
      }
      return color;
    }
  }
};
</script>