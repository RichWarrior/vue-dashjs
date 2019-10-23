<template>
  <v-card class="elevation-12 ma-2">
    <v-toolbar>
      <v-toolbar-title>
        <h1 class="title">Spinners</h1>
      </v-toolbar-title>
    </v-toolbar>
    <v-card-text>
      <v-row class="ma-2">
        <v-col cols="12" md="3" sm="12">
          <v-hover v-slot:default="{hover}">
            <v-card height="175" :elevation="hover ? 12 : 2">
              <v-toolbar>
                <v-toolbar-title>
                  <h1 class="title">Ball Beat</h1>
                </v-toolbar-title>
              </v-toolbar>
              <v-card-actions class="justify-center ma-5">
                <vue-loaders-ball-beat color="#1797BE" scale="1"></vue-loaders-ball-beat>
              </v-card-actions>
            </v-card>
          </v-hover>
        </v-col>
        <v-col cols="12" md="3" sm="12">
          <v-hover v-slot:default="{hover}">
            <v-card height="175" :elevation="hover ? 12 : 2">
              <v-toolbar>
                <v-toolbar-title>
                  <h1 class="title">Ball Clip Rotate Multiple</h1>
                </v-toolbar-title>
              </v-toolbar>
              <v-card-actions class="justify-center ma-5">
                <vue-loaders-ball-clip-rotate-multiple color="#1797BE" scale="1"></vue-loaders-ball-clip-rotate-multiple>
              </v-card-actions>
            </v-card>
          </v-hover>
        </v-col>
        <v-col cols="12" md="3" sm="12">
          <v-hover v-slot:default="{hover}">
            <v-card height="175" :elevation="hover ? 12 : 2">
              <v-toolbar>
                <v-toolbar-title>
                  <h1 class="title">Ball Clip Rotate Pulse</h1>
                </v-toolbar-title>
              </v-toolbar>
              <v-card-actions class="justify-center ma-5">
                <vue-loaders-ball-clip-rotate-pulse color="#1797BE" scale="1"></vue-loaders-ball-clip-rotate-pulse>
              </v-card-actions>
            </v-card>
          </v-hover>
        </v-col>
        <v-col cols="12" md="3" sm="12">
          <v-hover v-slot:default="{hover}">
            <v-card height="175" :elevation="hover ? 12 : 2">
              <v-toolbar>
                <v-toolbar-title>
                  <h1 class="title">Ball Clip Rotate</h1>
                </v-toolbar-title>
              </v-toolbar>
              <v-card-actions class="justify-center ma-5">
                <vue-loaders-ball-clip-rotate color="#1797BE" scale="1"></vue-loaders-ball-clip-rotate>
              </v-card-actions>
            </v-card>
          </v-hover>
        </v-col>
        <v-col cols="12" md="3" sm="12">
          <v-hover v-slot:default="{hover}">
            <v-card height="175" :elevation="hover ? 12 : 2">
              <v-toolbar>
                <v-toolbar-title>
                  <h1 class="title">Ball Grid Beat</h1>
                </v-toolbar-title>
              </v-toolbar>
              <v-card-actions class="justify-center ma-5">
                <vue-loaders-ball-grid-beat color="#1797BE" scale="1"></vue-loaders-ball-grid-beat>
              </v-card-actions>
            </v-card>
          </v-hover>
        </v-col>
        <v-col cols="12" md="3" sm="12">
          <v-hover v-slot:default="{hover}">
            <v-card height="175" :elevation="hover ? 12 : 2">
              <v-toolbar>
                <v-toolbar-title>
                  <h1 class="title">Ball Grid Pulse</h1>
                </v-toolbar-title>
              </v-toolbar>
              <v-card-actions class="justify-center ma-5">
                <vue-loaders-ball-grid-pulse color="#1797BE" scale="1"></vue-loaders-ball-grid-pulse>
              </v-card-actions>
            </v-card>
          </v-hover>
        </v-col>
        <v-col cols="12" md="3" sm="12">
          <v-hover v-slot:default="{hover}">
            <v-card height="175" :elevation="hover ? 12 : 2">
              <v-toolbar>
                <v-toolbar-title>
                  <h1 class="title">Ball Pulse Rise</h1>
                </v-toolbar-title>
              </v-toolbar>
              <v-card-actions class="justify-center">
                <vue-loaders-ball-pulse-rise color="#1797BE" scale="1"></vue-loaders-ball-pulse-rise>
              </v-card-actions>
            </v-card>
          </v-hover>
        </v-col>
        <v-col cols="12" md="3" sm="12">
          <v-hover v-slot:default="{hover}">
            <v-card height="175" :elevation="hover ? 12 : 2">
              <v-toolbar>
                <v-toolbar-title>
                  <h1 class="title">Ball Pulse Sync</h1>
                </v-toolbar-title>
              </v-toolbar>
              <v-card-actions class="justify-center ma-5">
                <vue-loaders-ball-pulse-sync color="#1797BE" scale="1"></vue-loaders-ball-pulse-sync>
              </v-card-actions>
            </v-card>
          </v-hover>
        </v-col>
        <v-col cols="12" md="3" sm="12">
          <v-hover v-slot:default="{hover}">
            <v-card height="175" :elevation="hover ? 12 : 2">
              <v-toolbar>
                <v-toolbar-title>
                  <h1 class="title">Ball Pulse</h1>
                </v-toolbar-title>
              </v-toolbar>
              <v-card-actions class="justify-center ma-5">
                <vue-loaders-ball-pulse color="#1797BE" scale="1"></vue-loaders-ball-pulse>
              </v-card-actions>
            </v-card>
          </v-hover>
        </v-col>
        <v-col cols="12" md="3" sm="12">
          <v-hover v-slot:default="{hover}">
            <v-card height="175" :elevation="hover ? 12 : 2">
              <v-toolbar>
                <v-toolbar-title>
                  <h1 class="title">Ball Rotate</h1>
                </v-toolbar-title>
              </v-toolbar>
              <v-card-actions class="justify-center ma-5">
                <vue-loaders-ball-rotate color="#1797BE" scale="1"></vue-loaders-ball-rotate>
              </v-card-actions>
            </v-card>
          </v-hover>
        </v-col>
        <v-col cols="12" md="3" sm="12">
          <v-hover v-slot:default="{hover}">
            <v-card height="175" :elevation="hover ? 12 : 2">
              <v-toolbar>
                <v-toolbar-title>
                  <h1 class="title">Ball Scale Multiple</h1>
                </v-toolbar-title>
              </v-toolbar>
              <v-card-actions class="justify-center ma-5">
                <vue-loaders-ball-scale-multiple color="#1797BE" scale="1"></vue-loaders-ball-scale-multiple>
              </v-card-actions>
            </v-card>
          </v-hover>
        </v-col>
        <v-col cols="12" md="3" sm="12">
          <v-hover v-slot:default="{hover}">
            <v-card height="175" :elevation="hover ? 12 : 2">
              <v-toolbar>
                <v-toolbar-title>
                  <h1 class="title">Ball Scale Ripple Multiple</h1>
                </v-toolbar-title>
              </v-toolbar>
              <v-card-actions class="justify-center ma-5">
                <vue-loaders-ball-scale-ripple-multiple color="#1797BE" scale="1"></vue-loaders-ball-scale-ripple-multiple>
              </v-card-actions>
            </v-card>
          </v-hover>
        </v-col>
        <v-col cols="12" md="3" sm="12">
          <v-hover v-slot:default="{hover}">
            <v-card height="175" :elevation="hover ? 12 : 2">
              <v-toolbar>
                <v-toolbar-title>
                  <h1 class="title">Ball Scale Ripple</h1>
                </v-toolbar-title>
              </v-toolbar>
              <v-card-actions class="justify-center ma-5">
                <vue-loaders-ball-scale-ripple color="#1797BE" scale="1"></vue-loaders-ball-scale-ripple>
              </v-card-actions>
            </v-card>
          </v-hover>
        </v-col>
        <v-col cols="12" md="3" sm="12">
          <v-hover v-slot:default="{hover}">
            <v-card height="175" :elevation="hover ? 12 : 2">
              <v-toolbar>
                <v-toolbar-title>
                  <h1 class="title">Ball Scale</h1>
                </v-toolbar-title>
              </v-toolbar>
              <v-card-actions class="justify-center ma-5">
                <vue-loaders-ball-scale color="#1797BE" scale="1"></vue-loaders-ball-scale>
              </v-card-actions>
            </v-card>
          </v-hover>
        </v-col>
        <v-col cols="12" md="3" sm="12">
          <v-hover v-slot:default="{hover}">
            <v-card height="175" :elevation="hover ? 12 : 2">
              <v-toolbar>
                <v-toolbar-title>
                  <h1 class="title">Ball Spin Fade Loader</h1>
                </v-toolbar-title>
              </v-toolbar>
              <v-card-actions class="justify-center ma-5">
                <vue-loaders-ball-spin-fade-loader color="#1797BE" scale="1"></vue-loaders-ball-spin-fade-loader>
              </v-card-actions>
            </v-card>
          </v-hover>
        </v-col>
        <v-col cols="12" md="3" sm="12">
          <v-hover v-slot:default="{hover}">
            <v-card height="175" :elevation="hover ? 12 : 2">
              <v-toolbar>
                <v-toolbar-title>
                  <h1 class="title">Ball Triangle Path</h1>
                </v-toolbar-title>
              </v-toolbar>
              <v-card-actions class="justify-center ma-5">
                <vue-loaders-ball-triangle-path color="#1797BE" scale="1"></vue-loaders-ball-triangle-path>
              </v-card-actions>
            </v-card>
          </v-hover>
        </v-col>
        <v-col cols="12" md="3" sm="12">
          <v-hover v-slot:default="{hover}">
            <v-card height="175" :elevation="hover ? 12 : 2">
              <v-toolbar>
                <v-toolbar-title>
                  <h1 class="title">Ball ZigZag Deflect</h1>
                </v-toolbar-title>
              </v-toolbar>
              <v-card-actions class="justify-center ma-5">
                <vue-loaders-ball-zig-zag-deflect color="#1797BE" scale="1"></vue-loaders-ball-zig-zag-deflect>
              </v-card-actions>
            </v-card>
          </v-hover>
        </v-col>
        <v-col cols="12" md="3" sm="12">
          <v-hover v-slot:default="{hover}">
            <v-card height="175" :elevation="hover ? 12 : 2">
              <v-toolbar>
                <v-toolbar-title>
                  <h1 class="title">Ball ZigZag</h1>
                </v-toolbar-title>
              </v-toolbar>
              <v-card-actions class="justify-center ma-5">
                <vue-loaders-ball-zig-zag color="#1797BE" scale="1"></vue-loaders-ball-zig-zag>
              </v-card-actions>
            </v-card>
          </v-hover>
        </v-col>
        <v-col cols="12" md="3" sm="12">
          <v-hover v-slot:default="{hover}">
            <v-card height="175" :elevation="hover ? 12 : 2">
              <v-toolbar>
                <v-toolbar-title>
                  <h1 class="title">Cube Transition</h1>
                </v-toolbar-title>
              </v-toolbar>
              <v-card-actions class="justify-center ma-5">
                <vue-loaders-cube-transition color="#1797BE" scale="1"></vue-loaders-cube-transition>
              </v-card-actions>
            </v-card>
          </v-hover>
        </v-col>
        <v-col cols="12" md="3" sm="12">
          <v-hover v-slot:default="{hover}">
            <v-card height="175" :elevation="hover ? 12 : 2">
              <v-toolbar>
                <v-toolbar-title>
                  <h1 class="title">Line Scale Party</h1>
                </v-toolbar-title>
              </v-toolbar>
              <v-card-actions class="justify-center ma-5">
                <vue-loaders-line-scale-party color="#1797BE" scale="1"></vue-loaders-line-scale-party>
              </v-card-actions>
            </v-card>
          </v-hover>
        </v-col>
        <v-col cols="12" md="3" sm="12">
          <v-hover v-slot:default="{hover}">
            <v-card height="175" :elevation="hover ? 12 : 2">
              <v-toolbar>
                <v-toolbar-title>
                  <h1 class="title">Line Scale Pulse Out Rapid</h1>
                </v-toolbar-title>
              </v-toolbar>
              <v-card-actions class="justify-center ma-5">
                <vue-loaders-line-scale-pulse-out-rapid color="#1797BE" scale="1"></vue-loaders-line-scale-pulse-out-rapid>
              </v-card-actions>
            </v-card>
          </v-hover>
        </v-col>
        <v-col cols="12" md="3" sm="12">
          <v-hover v-slot:default="{hover}">
            <v-card height="175" :elevation="hover ? 12 : 2">
              <v-toolbar>
                <v-toolbar-title>
                  <h1 class="title">Line Scale Pulse Out</h1>
                </v-toolbar-title>
              </v-toolbar>
              <v-card-actions class="justify-center ma-5">
                <vue-loaders-line-scale-pulse-out color="#1797BE" scale="1"></vue-loaders-line-scale-pulse-out>
              </v-card-actions>
            </v-card>
          </v-hover>
        </v-col>
        <v-col cols="12" md="3" sm="12">
          <v-hover v-slot:default="{hover}">
            <v-card height="175" :elevation="hover ? 12 : 2">
              <v-toolbar>
                <v-toolbar-title>
                  <h1 class="title">Line Scale</h1>
                </v-toolbar-title>
              </v-toolbar>
              <v-card-actions class="justify-center ma-5">
                <vue-loaders-line-scale color="#1797BE" scale="1"></vue-loaders-line-scale>
              </v-card-actions>
            </v-card>
          </v-hover>
        </v-col>
        <v-col cols="12" md="3" sm="12">
          <v-hover v-slot:default="{hover}">
            <v-card height="175" :elevation="hover ? 12 : 2">
              <v-toolbar>
                <v-toolbar-title>
                  <h1 class="title">Line Spin Fade Loader</h1>
                </v-toolbar-title>
              </v-toolbar>
              <v-card-actions class="justify-center ma-5">
                <vue-loaders-line-spin-fade-loader color="#1797BE" scale="1"></vue-loaders-line-spin-fade-loader>
              </v-card-actions>
            </v-card>
          </v-hover>
        </v-col>
        <v-col cols="12" md="3" sm="12">
          <v-hover v-slot:default="{hover}">
            <v-card height="175" :elevation="hover ? 12 : 2">
              <v-toolbar>
                <v-toolbar-title>
                  <h1 class="title">Pacman</h1>
                </v-toolbar-title>
              </v-toolbar>
              <v-card-actions class="justify-center ma-5">
                <vue-loaders-pacman color="#1797BE" scale="1"></vue-loaders-pacman>
              </v-card-actions>
            </v-card>
          </v-hover>
        </v-col>
        <v-col cols="12" md="3" sm="12">
          <v-hover v-slot:default="{hover}">
            <v-card height="175" :elevation="hover ? 12 : 2">
              <v-toolbar>
                <v-toolbar-title>
                  <h1 class="title">Semi Circle Spin</h1>
                </v-toolbar-title>
              </v-toolbar>
              <v-card-actions class="justify-center ma-5">
                <vue-loaders-semi-circle-spin color="#1797BE" scale="1"></vue-loaders-semi-circle-spin>
              </v-card-actions>
            </v-card>
          </v-hover>
        </v-col>
        <v-col cols="12" md="3" sm="12">
          <v-hover v-slot:default="{hover}">
            <v-card height="175" :elevation="hover ? 12 : 2">
              <v-toolbar>
                <v-toolbar-title>
                  <h1 class="title">Square Spin</h1>
                </v-toolbar-title>
              </v-toolbar>
              <v-card-actions class="justify-center ma-5">
                <vue-loaders-square-spin color="#1797BE" scale="1"></vue-loaders-square-spin>
              </v-card-actions>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>