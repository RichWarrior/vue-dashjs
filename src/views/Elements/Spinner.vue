<template>
  <v-row class="ma-0">
    <v-col class="pa-0" cols="12">
      <v-card class="elevation-12 ma-2">
        <v-toolbar>
          <v-toolbar-title>
            <h1 class="title">Spinners</h1>
          </v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <v-row class="ma-0">
            <v-col cols="12" md="3" sm="12" class="pa-1">
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
            <v-col cols="12" md="3" sm="12" class="pa-1">
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
            <v-col cols="12" md="3" sm="12" class="pa-1">
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
            <v-col cols="12" md="3" sm="12" class="pa-1">
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
            <v-col cols="12" md="3" sm="12" class="pa-1">
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
            <v-col cols="12" md="3" sm="12" class="pa-1">
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
            <v-col cols="12" md="3" sm="12" class="pa-1">
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
            <v-col cols="12" md="3" sm="12" class="pa-1">
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
            <v-col cols="12" md="3" sm="12" class="pa-1">
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
            <v-col cols="12" md="3" sm="12" class="pa-1">
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
            <v-col cols="12" md="3" sm="12" class="pa-1">
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
            <v-col cols="12" md="3" sm="12" class="pa-1">
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
            <v-col cols="12" md="3" sm="12" class="pa-1">
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
            <v-col cols="12" md="3" sm="12" class="pa-1">
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
            <v-col cols="12" md="3" sm="12" class="pa-1">
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
            <v-col cols="12" md="3" sm="12" class="pa-1">
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
            <v-col cols="12" md="3" sm="12" class="pa-1">
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
            <v-col cols="12" md="3" sm="12" class="pa-1">
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
            <v-col cols="12" md="3" sm="12" class="pa-1">
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
            <v-col cols="12" md="3" sm="12" class="pa-1">
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
            <v-col cols="12" md="3" sm="12" class="pa-1">
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
            <v-col cols="12" md="3" sm="12" class="pa-1">
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
            <v-col cols="12" md="3" sm="12" class="pa-1">
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
            <v-col cols="12" md="3" sm="12" class="pa-1">
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
            <v-col cols="12" md="3" sm="12" class="pa-1">
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
            <v-col cols="12" md="3" sm="12" class="pa-1">
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
            <v-col cols="12" md="3" sm="12" class="pa-1">
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
    </v-col>
    <v-col class="pa-2 pt-1" cols="12">
      <v-card :hover="hover ? 12 : 2">
        <v-toolbar>
          <v-toolbar-title>
            <h1 class="title">Epic Spinner</h1>
          </v-toolbar-title>
        </v-toolbar>
        <v-cadrd-text>
          <v-row class="ma-2">
            <v-col class="pa-1" cols="1">
              <atom-spinner
                class="text-center"
                :animation-duration="1000"
                :size="60"
                :color="'#1797BE'"
              />
            </v-col>
            <v-col class="pa-1" cols="1">
              <flower-spinner :animation-duration="2500" :size="70" :color="'#1797BE'" />
            </v-col>
            <v-col class="pa-1" cols="1">
              <pixel-spinner :animation-duration="2000" :pixel-size="70" :color="'#1797BE'" />
            </v-col>
            <v-col class="pa-1" cols="1">
              <intersecting-circles-spinner
                :animation-duration="1200"
                :size="70"
                :color="'#1797BE'"
              />
            </v-col>
            <v-col class="pa-1" cols="1">
              <orbit-spinner :animation-duration="1200" :size="55" :color="'#1797BE'" />
            </v-col>
            <v-col class="pa-1" cols="1">
              <radar-spinner :animation-duration="2000" :size="60" :color="'#1797BE'" />
            </v-col>
            <v-col class="pa-1" cols="1">
              <scaling-squares-spinner :animation-duration="1250" :size="65" :color="'#1797BE'" />
            </v-col>
            <v-col class="pa-1" cols="1">
              <half-circle-spinner :animation-duration="1000" :size="60" :color="'#1797BE'" />
            </v-col>
            <v-col class="pa-1" cols="1">
              <trinity-rings-spinner :animation-duration="1500" :size="66" :color="'#1797BE'" />
            </v-col>
            <v-col class="pa-1" cols="1">
              <fulfilling-square-spinner :animation-duration="4000" :size="50" :color="'#1797BE'" />
            </v-col>
            <v-col class="pa-1" cols="1">
              <circles-to-rhombuses-spinner
                :animation-duration="1200"
                :circles-num="3"
                :circle-size="15"
                :color="'#1797BE'"
              />
            </v-col>
            <v-col class="pa-1" cols="1">
              <semipolar-spinner :animation-duration="2000" :size="65" :color="'#1797BE'" />
            </v-col>
            <v-col class="pa-1" cols="1">
              <self-building-square-spinner
                :animation-duration="6000"
                :size="40"
                :color="'#1797BE'"
              />
            </v-col>
            <v-col class="pa-1" cols="1">
              <swapping-squares-spinner :animation-duration="1000" :size="65" :color="'#1797BE'" />
            </v-col>
            <v-col class="pa-1" cols="1">
              <fulfilling-bouncing-circle-spinner
                :animation-duration="4000"
                :size="60"
                :color="'#1797BE'"
              />
            </v-col>
            <v-col class="pa-1" cols="1">
              <fingerprint-spinner :animation-duration="1500" :size="64" :color="'#1797BE'" />
            </v-col>
            <v-col class="pa-1" cols="1">
              <spring-spinner :animation-duration="3000" :size="60" :color="'#1797BE'" />
            </v-col>
            <v-col class="pa-1" cols="1">
              <looping-rhombuses-spinner
                :animation-duration="2500"
                :rhombus-size="15"
                :color="'#1797BE'"
              />
            </v-col>
            <v-col class="pa-1" cols="1">
              <breeding-rhombus-spinner :animation-duration="2000" :size="65" :color="'#1797BE'" />
            </v-col>
          </v-row>
        </v-cadrd-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import {
  AtomSpinner,
  FlowerSpinner,
  PixelSpinner,
  IntersectingCirclesSpinner,
  OrbitSpinner,
  RadarSpinner,
  ScalingSquaresSpinner,
  HalfCircleSpinner,
  TrinityRingsSpinner,
  FulfillingSquareSpinner,
  CirclesToRhombusesSpinner,
  SemipolarSpinner,
  SelfBuildingSquareSpinner,
  SwappingSquaresSpinner,
  FulfillingBouncingCircleSpinner,
  FingerprintSpinner,
  SpringSpinner,
  LoopingRhombusesSpinner,
  BreedingRhombusSpinner
} from "epic-spinners";

export default {
  components: {
    AtomSpinner,
    FlowerSpinner,
    PixelSpinner,
    IntersectingCirclesSpinner,
    OrbitSpinner,
    RadarSpinner,
    ScalingSquaresSpinner,
    HalfCircleSpinner,
    TrinityRingsSpinner,
    FulfillingSquareSpinner,
    CirclesToRhombusesSpinner,
    SemipolarSpinner,
    SelfBuildingSquareSpinner,
    SwappingSquaresSpinner,
    FulfillingBouncingCircleSpinner,
    FingerprintSpinner,
    SpringSpinner,
    LoopingRhombusesSpinner,
    BreedingRhombusSpinner
  }
};
</script>