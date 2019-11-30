<template>
  <v-hover v-slot:default="{hover}">
    <v-card :elevation="hover ? 12 :2">
      <v-toolbar>
        <v-toolbar-title>
          <h1 class="title">File Inputs</h1>
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
                <v-file-input label="File input"></v-file-input>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" sm="12" md="6" class="pa-1">
            <v-card>
              <v-toolbar>
                <v-toolbar-title>
                  <h1 class="title">Multiple</h1>
                </v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-file-input multiple label="File input"></v-file-input>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" sm="12" md="6" class="pa-1">
            <v-card>
              <v-toolbar>
                <v-toolbar-title>
                  <h1 class="title">Accept Formats</h1>
                </v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-file-input accept="image/*" label="File input"></v-file-input>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" sm="12" md="6" class="pa-1">
            <v-card>
              <v-toolbar>
                <v-toolbar-title>
                  <h1 class="title">With Chips</h1>
                </v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <div>
                  <v-file-input chips multiple label="File input w/ chips"></v-file-input>
                  <v-file-input small-chips multiple label="File input w/ small chips"></v-file-input>
                </div>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" sm="12" md="6" class="pa-1">
            <v-card>
              <v-toolbar>
                <v-toolbar-title>
                  <h1 class="title">Size Displaying</h1>
                </v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-file-input show-size label="File input"></v-file-input>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" sm="12" md="6" class="pa-1">
            <v-card>
              <v-toolbar>
                <v-toolbar-title>
                  <h1 class="title">Counter</h1>
                </v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-file-input show-size counter multiple label="File input"></v-file-input>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" sm="12" md="6" class="pa-1">
            <v-card>
              <v-toolbar>
                <v-toolbar-title>
                  <h1 class="title">Custom Icons</h1>
                </v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-file-input label="File input" filled prepend-icon="mdi-camera"></v-file-input>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" sm="12" md="6" class="pa-1">
            <v-card>
              <v-toolbar>
                <v-toolbar-title>
                  <h1 class="title">Dense</h1>
                </v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-file-input label="File input" outlined dense></v-file-input>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" sm="12" md="6" class="pa-1">
            <v-card>
              <v-toolbar>
                <v-toolbar-title>
                  <h1 class="title">Selection Slot</h1>
                </v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-file-input
                  v-model="files"
                  placeholder="Upload your documents"
                  label="File input"
                  multiple
                  prepend-icon="mdi-paperclip"
                >
                  <template v-slot:selection="{ text }">
                    <v-chip small label color="primary">{{ text }}</v-chip>
                  </template>
                </v-file-input>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" sm="12" md="6" class="pa-1">
            <v-card>
              <v-toolbar>
                <v-toolbar-title>
                  <h1 class="title">Validation</h1>
                </v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-file-input
                  :rules="rules"
                  accept="image/png, image/jpeg, image/bmp"
                  placeholder="Pick an avatar"
                  prepend-icon="mdi-camera"
                  label="Avatar"
                ></v-file-input>
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
    files: [],
    rules: [
      value =>
        !value ||
        value.size < 2000000 ||
        "Avatar size should be less than 2 MB!"
    ]
  })
};
</script>