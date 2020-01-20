<template>
  <v-hover v-slot:default="{hover}">
    <v-card :elevation="hover ? 12:2">
      <v-toolbar>
        <v-toolbar-title>
          <h1 class="title">DropDown</h1>
        </v-toolbar-title>
      </v-toolbar>
      <v-card-text>
        <v-row class="ma-0">
          <v-col class="pa-1" cols="12" md="12">
            <v-card>
              <v-toolbar>
                <v-toolbar-title>Usage</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-col cols="12">
                  <v-row>
                    <v-col cols="12" sm="4">
                      <p>Overflow</p>

                      <v-overflow-btn
                        class="my-2"
                        :items="dropdown_font"
                        label="Overflow Btn"
                        target="#dropdown-example"
                      ></v-overflow-btn>
                    </v-col>

                    <v-col cols="12" sm="4">
                      <p>Segmented</p>

                      <v-overflow-btn
                        class="my-2"
                        :items="dropdown_icon"
                        label="Segmented Btn"
                        segmented
                        target="#dropdown-example"
                      ></v-overflow-btn>
                    </v-col>

                    <v-col cols="12" sm="4">
                      <p>Editable</p>

                      <v-overflow-btn
                        class="my-2"
                        :items="dropdown_edit"
                        label="Editable Btn"
                        editable
                        item-value="text"
                      ></v-overflow-btn>
                    </v-col>
                  </v-row>
                </v-col>
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
    dropdown_font: ["Arial", "Calibri", "Courier", "Verdana"],
    dropdown_icon: [
      { text: "list", callback: () => window.console.log("list") },
      { text: "favorite", callback: () => window.console.log("favorite") },
      { text: "delete", callback: () => window.console.log("delete") }
    ],
    dropdown_edit: [
      { text: "100%" },
      { text: "75%" },
      { text: "50%" },
      { text: "25%" },
      { text: "0%" }
    ]
  })
};
</script>