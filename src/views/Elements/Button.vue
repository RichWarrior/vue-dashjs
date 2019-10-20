<template>
  <v-row class="ma-2">
    <v-col cols="12" md="6" sm="12">
      <v-hover v-slot:default="{hover}">
        <v-card :elevation="hover ? 12 : 2">
          <v-toolbar>
            <v-toolbar-title>
              <h1 class="title">Flat Buttons</h1>
              <h1
                class="caption"
              >Flat buttons have no box shadow and no background. Only on hover is the container for the button shown.</h1>
            </v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-row align="center">
              <v-col class="text-center" cols="12" sm="4">
                <div class="my-2">
                  <v-btn text small>Normal</v-btn>
                </div>
                <div class="my-2">
                  <v-btn text small color="primary">Primary</v-btn>
                </div>
                <div class="my-2">
                  <v-btn text small color="error">Error</v-btn>
                </div>
                <div class="my-2">
                  <v-btn text small disabled>Disabled</v-btn>
                </div>
              </v-col>
              <v-col class="text-center" cols="12" sm="4">
                <div class="my-2">
                  <v-btn text>Normal</v-btn>
                </div>
                <div class="my-2">
                  <v-btn text color="primary">Primary</v-btn>
                </div>
                <div class="my-2">
                  <v-btn text color="error">Error</v-btn>
                </div>
                <div class="my-2">
                  <v-btn text disabled>Disabled</v-btn>
                </div>
              </v-col>

              <v-col class="text-center" cols="12" sm="4">
                <div class="my-2">
                  <v-btn text large>Normal</v-btn>
                </div>
                <div class="my-2">
                  <v-btn text large color="primary">Primary</v-btn>
                </div>
                <div class="my-2">
                  <v-btn text large color="error">Error</v-btn>
                </div>
                <div class="my-2">
                  <v-btn text large disabled>Disabled</v-btn>
                </div>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-hover>
    </v-col>
    <v-col cols="12" md="6" sm="12">
      <v-hover v-slot:default="{hover}">
        <v-card :elevation="hover ? 12 : 2">
          <v-toolbar>
            <v-toolbar-title>
              <h1 class="title">Raised Buttons</h1>
              <h1
                class="caption"
              >Raised buttons have a box shadow that increases when clicked. This is the default style.</h1>
            </v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-row align="center">
              <v-col class="text-center" cols="12" sm="4">
                <div class="my-2">
                  <v-btn small>Normal</v-btn>
                </div>
                <div class="my-2">
                  <v-btn small color="primary">Primary</v-btn>
                </div>
                <div class="my-2">
                  <v-btn small color="error">Error</v-btn>
                </div>
                <div class="my-2">
                  <v-btn small disabled>Disabled</v-btn>
                </div>
              </v-col>
              <v-col class="text-center" cols="12" sm="4">
                <div class="my-2">
                  <v-btn>Normal</v-btn>
                </div>
                <div class="my-2">
                  <v-btn color="primary">Primary</v-btn>
                </div>
                <div class="my-2">
                  <v-btn color="error">Error</v-btn>
                </div>
                <div class="my-2">
                  <v-btn disabled>Disabled</v-btn>
                </div>
              </v-col>
              <v-col class="text-center" cols="12" sm="4">
                <div class="my-2">
                  <v-btn large>Normal</v-btn>
                </div>
                <div class="my-2">
                  <v-btn large color="primary">Primary</v-btn>
                </div>
                <div class="my-2">
                  <v-btn large color="error">Error</v-btn>
                </div>
                <div class="my-2">
                  <v-btn large disabled>Disabled</v-btn>
                </div>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-hover>
    </v-col>
    <v-col cols="12" md="6" sm="12">
      <v-hover v-slot:default="{hover}">
        <v-card :elevation="hover ? 12 : 2">
          <v-toolbar>
            <v-toolbar-title>
              <h1 class="title">Floating Buttons</h1>
              <h1 class="caption">Floating buttons are rounded and usually contain an icon.</h1>
            </v-toolbar-title>
          </v-toolbar>
          <v-car-text class="ma-1">
            <div class="text-center">
              <v-btn class="mx-2" fab dark small color="primary">
                <v-icon dark>mdi-minus</v-icon>
              </v-btn>

              <v-btn class="mx-2" fab dark small color="pink">
                <v-icon dark>mdi-heart</v-icon>
              </v-btn>

              <v-btn class="mx-2" fab dark color="indigo">
                <v-icon dark>mdi-plus</v-icon>
              </v-btn>

              <v-btn class="mx-2" fab dark color="teal">
                <v-icon dark>mdi-format-list-bulleted-square</v-icon>
              </v-btn>

              <v-btn class="mx-2" fab dark large color="cyan">
                <v-icon dark>mdi-pencil</v-icon>
              </v-btn>

              <v-btn class="mx-2" fab dark large color="purple">
                <v-icon dark>mdi-android</v-icon>
              </v-btn>
            </div>
          </v-car-text>
        </v-card>
      </v-hover>
    </v-col>
    <v-col cols="12" md="6" sm="12">
      <v-hover v-slot:default="{hover}">
        <v-card :elevation="hover ? 12 :2">
          <v-toolbar>
            <v-toolbar-title>
              <h1 class="title">Icons Buttons</h1>
              <h1 class="caption">Icons can be used for the primary content of a button.</h1>
            </v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-row>
              <v-col cols="12" sm="3">
                <v-btn text icon color="pink">
                  <v-icon>mdi-heart</v-icon>
                </v-btn>
              </v-col>

              <v-col cols="12" sm="3">
                <v-btn text icon color="indigo">
                  <v-icon>mdi-star</v-icon>
                </v-btn>
              </v-col>

              <v-col cols="12" sm="3">
                <v-btn text icon color="green">
                  <v-icon>mdi-cached</v-icon>
                </v-btn>
              </v-col>

              <v-col cols="12" sm="3">
                <v-btn text icon color="deep-orange">
                  <v-icon>mdi-thumb-up</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-hover>
    </v-col>
    <v-col cols="12" md="6" sm="12">
      <v-hover v-slot:default="{hover}">
        <v-card :elevation="hover ? 12 :2">
          <v-toolbar>
            <v-toolbar-title>
              <h1 class="title">Sizing</h1>
              <h1
                class="caption"
              >Buttons can be given different sizing options to fit a multitude of scenarios.</h1>
            </v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-container fluid class="pa-0">
              <v-row align="center">
                <v-col cols="12" sm="6">
                  <div class="text-center">
                    <div class="my-2">
                      <v-btn x-small color="secondary" dark>Extra small Button</v-btn>
                    </div>
                    <div class="my-2">
                      <v-btn small color="primary" dark>Small Button</v-btn>
                    </div>
                    <div class="my-2">
                      <v-btn color="warning" dark>Normal Button</v-btn>
                    </div>
                    <div class="my-2">
                      <v-btn color="error" dark large>Large Button</v-btn>
                    </div>
                    <div class="my-2">
                      <v-btn x-large color="success" dark>Extra large Button</v-btn>
                    </div>
                  </div>
                </v-col>
                <v-col cols="12" sm="6">
                  <div class="text-center">
                    <div class="my-2">
                      <v-btn color="secondary" fab x-small dark>
                        <v-icon>mdi-television</v-icon>
                      </v-btn>
                    </div>
                    <div class="my-2">
                      <v-btn color="primary" fab small dark>
                        <v-icon>mdi-pencil</v-icon>
                      </v-btn>
                    </div>
                    <div class="my-2">
                      <v-btn color="warning" fab dark>
                        <v-icon>mdi-account-circle</v-icon>
                      </v-btn>
                    </div>
                    <div class="my-2">
                      <v-btn color="error" fab large dark>
                        <v-icon>mdi-alarm</v-icon>
                      </v-btn>
                    </div>
                    <div class="my-2">
                      <v-btn color="success" fab x-large dark>
                        <v-icon>mdi-domain</v-icon>
                      </v-btn>
                    </div>
                  </div>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
        </v-card>
      </v-hover>
    </v-col>
    <v-col cols="12" md="6" sm="12">
      <v-hover v-slot:default="{hover}">
        <v-card :elevation="hover ? 12 : 2">
          <v-toolbar>
            <v-toolbar-title>
              <h1 class="title">Depressed Buttons</h1>
              <h1
                class="caption"
              >Depressed buttons still maintain their background color, but have no box shadow.</h1>
            </v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-row align="center">
              <v-col class="text-center" cols="12" sm="4">
                <div class="my-2">
                  <v-btn depressed small>Normal</v-btn>
                </div>
                <div class="my-2">
                  <v-btn depressed small color="primary">Primary</v-btn>
                </div>
                <div class="my-2">
                  <v-btn depressed small color="error">Error</v-btn>
                </div>
                <div class="my-2">
                  <v-btn depressed small disabled>Disabled</v-btn>
                </div>
              </v-col>

              <v-col class="text-center" cols="12" sm="4">
                <div class="my-2">
                  <v-btn depressed>Normal</v-btn>
                </div>
                <div class="my-2">
                  <v-btn depressed color="primary">Primary</v-btn>
                </div>
                <div class="my-2">
                  <v-btn depressed color="error">Error</v-btn>
                </div>
                <div class="my-2">
                  <v-btn depressed disabled>Disabled</v-btn>
                </div>
              </v-col>

              <v-col class="text-center" cols="12" sm="4">
                <div class="my-2">
                  <v-btn depressed large>Normal</v-btn>
                </div>
                <div class="my-2">
                  <v-btn depressed large color="primary">Primary</v-btn>
                </div>
                <div class="my-2">
                  <v-btn depressed large color="error">Error</v-btn>
                </div>
                <div class="my-2">
                  <v-btn depressed large disabled>Disabled</v-btn>
                </div>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-hover>
    </v-col>
    <v-col cols="12" md="6" sm="12">
      <v-hover v-slot:default="{hover}">
        <v-card :elevation="hover ? 12 : 2">
          <v-toolbar>
            <v-toolbar-title>
              <h1 class="title">Outlined Buttons</h1>
              <h1
                class="caption"
              >Outlined buttons inherit their borders from the current color applied.</h1>
            </v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <div class="text-center">
              <v-btn class="ma-2" outlined color="indigo">Outlined Button</v-btn>
              <v-btn class="ma-2" outlined fab color="teal">
                <v-icon>mdi-format-list-bulleted-square</v-icon>
              </v-btn>
              <v-btn class="ma-2" outlined large fab color="indigo">
                <v-icon>mdi-pencil</v-icon>
              </v-btn>
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
              <h1 class="title">Rounded Buttons</h1>
              <h1
                class="caption"
              >Rounded buttons behave the same as regular buttons but have rounded edges.</h1>
            </v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <div class="text-center">
              <v-btn rounded color="primary" dark>Rounded Button</v-btn>
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
              <h1 class="title">Tile Buttons</h1>
              <h1
                class="caption"
              >Tile buttons behave the same as regular buttons but have no border radius.</h1>
            </v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <div class="text-center">
              <v-btn class="ma-2" tile color="indigo" dark>Tile Button</v-btn>
              <v-btn class="ma-2" tile outlined color="success">
                <v-icon left>mdi-pencil</v-icon>Edit
              </v-btn>
              <v-btn class="ma-2" tile large color="teal" icon>
                <v-icon>mdi-vuetify</v-icon>
              </v-btn>
            </div>
          </v-card-text>
        </v-card>
      </v-hover>
    </v-col>
  </v-row>
</template>