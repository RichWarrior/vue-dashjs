<template>
  <v-row class="ma-2">
    <v-col cols="12" sm="12" md="6">
      <v-hover v-slot:default="{hover}">
        <v-card :elevation="hover?12:2">
          <v-toolbar>
            <v-toolbar-title>
              <h1 class="title">Usage</h1>
            </v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-stepper v-model="usageModel">
              <v-stepper-header>
                <v-stepper-step :complete="usageModel > 1" step="1">Name of step 1</v-stepper-step>

                <v-divider></v-divider>

                <v-stepper-step :complete="usageModel > 2" step="2">Name of step 2</v-stepper-step>

                <v-divider></v-divider>

                <v-stepper-step step="3">Name of step 3</v-stepper-step>
              </v-stepper-header>

              <v-stepper-items>
                <v-stepper-content step="1">
                  <v-card class="mb-12" color="grey lighten-1" height="200px"></v-card>

                  <v-btn color="primary" @click="usageModel = 2">Continue</v-btn>

                  <v-btn text>Cancel</v-btn>
                </v-stepper-content>

                <v-stepper-content step="2">
                  <v-card class="mb-12" color="grey lighten-1" height="200px"></v-card>

                  <v-btn color="primary" @click="usageModel = 3">Continue</v-btn>

                  <v-btn text>Cancel</v-btn>
                </v-stepper-content>

                <v-stepper-content step="3">
                  <v-card class="mb-12" color="grey lighten-1" height="200px"></v-card>

                  <v-btn color="primary" @click="usageModel = 1">Continue</v-btn>

                  <v-btn text>Cancel</v-btn>
                </v-stepper-content>
              </v-stepper-items>
            </v-stepper>
          </v-card-text>
        </v-card>
      </v-hover>
    </v-col>
    <v-col cols="12" sm="12" md="6">
      <v-hover v-slot:default="{hover}">
        <v-card :elevation="hover?12 :2">
          <v-toolbar>
            <v-toolbar-title>
              <h1 class="title">Editable Steps</h1>
            </v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-stepper>
              <v-stepper-header>
                <v-stepper-step complete editable step="1">Select campaign settings</v-stepper-step>

                <v-divider></v-divider>

                <v-stepper-step complete step="2">Create an ad group</v-stepper-step>

                <v-divider></v-divider>

                <v-stepper-step step="3" editable>Create an ad</v-stepper-step>
              </v-stepper-header>
            </v-stepper>
          </v-card-text>
        </v-card>
      </v-hover>
    </v-col>
    <v-col cols="12" md="6" sm="12">
      <v-hover v-slot:default="{hover}">
        <v-card :elevation="hover?12:2">
          <v-toolbar>
            <v-toolbar-title>
              <h1 class="title">Optional Steps</h1>
            </v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <div>
              <v-stepper value="1">
                <v-stepper-header>
                  <v-stepper-step step="1">Select campaign settings</v-stepper-step>

                  <v-divider></v-divider>

                  <v-stepper-step step="2">
                    Create an ad group
                    <small>Optional</small>
                  </v-stepper-step>

                  <v-divider></v-divider>

                  <v-stepper-step step="3">Create an ad</v-stepper-step>
                </v-stepper-header>
              </v-stepper>

              <v-stepper value="2" class="mt-12">
                <v-stepper-header>
                  <v-stepper-step step="1" complete>Select campaign settings</v-stepper-step>

                  <v-divider></v-divider>

                  <v-stepper-step step="2">
                    Create an ad group
                    <small>Optional</small>
                  </v-stepper-step>

                  <v-divider></v-divider>

                  <v-stepper-step step="3">Create an ad</v-stepper-step>
                </v-stepper-header>
              </v-stepper>
            </div>
          </v-card-text>
        </v-card>
      </v-hover>
    </v-col>
    <v-col cols="12" md="6" sm="12">
      <v-hover v-slot:default="{hover}">
        <v-card :elevation="hover ? 12 : 2">
          <v-toolbar>
            <v-toolbar-title>
              <h1 class="title">Non-Editable Steps</h1>
            </v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-stepper value="2">
              <v-stepper-header>
                <v-stepper-step step="1" complete>Select campaign settings</v-stepper-step>

                <v-divider></v-divider>

                <v-stepper-step step="2">Create an ad group</v-stepper-step>

                <v-divider></v-divider>

                <v-stepper-step step="3">Create an ad</v-stepper-step>
              </v-stepper-header>
            </v-stepper>
          </v-card-text>
        </v-card>
      </v-hover>
    </v-col>
    <v-col cols="12" md="6" sm="12">
      <v-hover v-slot:default="{hover}">
        <v-card :elevation="hover?12 :2">
          <v-toolbar>
            <v-toolbar-title>
              <h1 class="title">Vertical Steppers</h1>
            </v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-stepper v-model="verticalSteppersModel" vertical>
              <v-stepper-step :complete="verticalSteppersModel > 1" step="1">
                Select an app
                <small>Summarize if needed</small>
              </v-stepper-step>

              <v-stepper-content step="1">
                <v-card color="grey lighten-1" class="mb-12" height="200px"></v-card>
                <v-btn color="primary" @click="verticalSteppersModel = 2">Continue</v-btn>
                <v-btn text>Cancel</v-btn>
              </v-stepper-content>

              <v-stepper-step
                :complete="verticalSteppersModel > 2"
                step="2"
              >Configure analytics for this app</v-stepper-step>

              <v-stepper-content step="2">
                <v-card color="grey lighten-1" class="mb-12" height="200px"></v-card>
                <v-btn color="primary" @click="verticalSteppersModel = 3">Continue</v-btn>
                <v-btn text>Cancel</v-btn>
              </v-stepper-content>

              <v-stepper-step
                :complete="verticalSteppersModel > 3"
                step="3"
              >Select an ad format and name ad unit</v-stepper-step>

              <v-stepper-content step="3">
                <v-card color="grey lighten-1" class="mb-12" height="200px"></v-card>
                <v-btn color="primary" @click="verticalSteppersModel = 4">Continue</v-btn>
                <v-btn text>Cancel</v-btn>
              </v-stepper-content>

              <v-stepper-step step="4">View setup instructions</v-stepper-step>
              <v-stepper-content step="4">
                <v-card color="grey lighten-1" class="mb-12" height="200px"></v-card>
                <v-btn color="primary" @click="verticalSteppersModel = 1">Continue</v-btn>
                <v-btn text>Cancel</v-btn>
              </v-stepper-content>
            </v-stepper>
          </v-card-text>
        </v-card>
      </v-hover>
    </v-col>
    <v-col cols="12" md="6" sm="12">
      <v-hover v-slot:default="{hover}">
        <v-card :elevation="hover ? 12 : 2">
          <v-toolbar>
            <v-toolbar-title>
              <h1 class="title">Multiline Error Messages</h1>
            </v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-stepper>
              <v-stepper-header>
                <v-stepper-step step="1">Ad unit details</v-stepper-step>

                <v-divider></v-divider>

                <v-stepper-step :rules="[() => false]" step="2">
                  Ad templates
                  <small>Alert message</small>
                </v-stepper-step>

                <v-divider></v-divider>

                <v-stepper-step step="3">Ad sizes</v-stepper-step>
              </v-stepper-header>
            </v-stepper>
          </v-card-text>
        </v-card>
      </v-hover>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    usageModel: 0,
    verticalSteppersModel: 1
  })
};
</script>