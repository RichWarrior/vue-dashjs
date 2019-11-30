<template>
  <v-hover v-slot:default="{hover}">
    <v-card :elevation="hover ? 12 : 2">
      <v-toolbar>
        <v-toolbar-title>
          <h1 class="title">TextArea</h1>
        </v-toolbar-title>
      </v-toolbar>
      <v-card-text>
        <v-row class="ma-0">
          <v-col cols="12" md="6" sm="12" class="pa-1">
            <v-card>
              <v-toolbar>
                <v-toolbar-title>
                  <h1 class="title">Usage</h1>
                </v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-row class="ma-0">
                  <v-col cols="12" md="6" class="pa-1">
                    <v-textarea
                      name="input-7-1"
                      label="Default style"
                      value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
                      hint="Hint text"
                    ></v-textarea>
                  </v-col>
                  <v-col cols="12" md="6" class="pa-1">
                    <v-textarea solo name="input-7-4" label="Solo textarea"></v-textarea>
                  </v-col> 
                  <v-col cols="12" md="6" class="pa-1">
                    <v-textarea
                      filled
                      name="input-7-4"
                      label="Filled textarea"
                      value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
                    ></v-textarea>
                  </v-col>
                  <v-col cols="12" md="6" class="pa-1">
                    <v-textarea
                      outlined
                      name="input-7-4"
                      label="Outlined textarea"
                      value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
                    ></v-textarea>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" md="6" sm="12" class="pa-1">
            <v-card>
              <v-toolbar>
                <v-toolbar-title>
                  <h1 class="title">Icons</h1>
                </v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-row class="ma-0">
                  <v-col cols="12" sm="6" class="pa-1">
                    <v-textarea
                      class="mx-2"
                      label="prepend-icon"
                      rows="1"
                      prepend-icon="fa fa-comment"
                    ></v-textarea>
                  </v-col>
                  <v-col cols="12" sm="6" class="pa-1">
                    <v-textarea
                      append-icon="fa fa-comment"
                      class="mx-2"
                      label="append-icon"
                      rows="1"
                    ></v-textarea>
                  </v-col>
                  <v-col cols="12" sm="6" class="pa-1">
                    <v-textarea
                      prepend-inner-icon="fa fa-comment"
                      class="mx-2"
                      label="prepend-inner-icon"
                      rows="1"
                    ></v-textarea>
                  </v-col>
                  <v-col cols="12" sm="6" class="pa-1">
                    <v-textarea
                      append-outer-icon="fa fa-comment"
                      class="mx-2"
                      label="append-outer-icon"
                      rows="1"
                    ></v-textarea>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" md="6" sm="12" class="pa-1">
            <v-card>
              <v-toolbar>
                <v-toolbar-title>
                  <h1 class="title">Clearable</h1>
                </v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-textarea
                  clearable
                  clear-icon="fa fa-times"
                  label="Text"
                  value="This is clearable text."
                ></v-textarea>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" md="6" sm="12" class="pa-1">
            <v-card>
              <v-toolbar>
                <v-toolbar-title>
                  <h1 class="title">Counter</h1>
                </v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-textarea counter label="Text"></v-textarea>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-hover>
</template>