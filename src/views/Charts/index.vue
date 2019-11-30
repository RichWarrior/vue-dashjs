<template>
  <v-container fluid class="pa-0">
    <v-row class="ma-0">
      <v-col cols="12" md="6" sm="12" class="pa-1">
        <v-hover v-slot:default="{hover}">
          <v-card :elevation="hover ? 12 : 2">
            <v-toolbar>
              <v-toolbar-title>
                <h1 class="title">Line Chart</h1>
              </v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <linechart />
            </v-card-text>
          </v-card>
        </v-hover>
      </v-col>
      <v-col cols="12" md="6" sm="12" class="pa-1">
        <v-hover v-slot:default="{hover}">
          <v-card :elevation="hover ? 12 : 2">
            <v-toolbar>
              <v-toolbar-title>
                <h1 class="title">Bar Chart</h1>
              </v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <barchart />
            </v-card-text>
          </v-card>
        </v-hover>
      </v-col>
      <v-col cols="12" md="6" sm="12" class="pa-1">
        <v-hover v-slot:default="{hover}">
          <v-card :elevation="hover ? 12 : 2">
            <v-toolbar>
              <v-toolbar-title>
                <h1 class="title">Horizontal Bar Chart</h1>
              </v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <horizontalbar />
            </v-card-text>
          </v-card>
        </v-hover>
      </v-col>
      <v-col cols="12" md="6" sm="12" class="pa-1">
        <v-hover v-slot:default="{hover}">
          <v-card :elevation="hover ? 12 : 2">
            <v-toolbar>
              <v-toolbar-title>
                <h1 class="title">Doughnut Chart</h1>
              </v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <doughnut />
            </v-card-text>
          </v-card>
        </v-hover>
      </v-col>
      <v-col cols="12" md="6" sm="12" class="pa-1">
        <v-hover v-slot:default="{hover}">
          <v-card :elevation="hover ? 12 : 2">
            <v-toolbar>
              <v-toolbar-title>
                <h1 class="title">Pie Chart</h1>
              </v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <pie />
            </v-card-text>
          </v-card>
        </v-hover>
      </v-col>
      <v-col cols="12" md="6" sm="12" class="pa-1">
        <v-hover v-slot:default="{hover}">
          <v-card :elevation="hover ? 12 : 2">
            <v-toolbar>
              <v-toolbar-title>
                <h1 class="title">Polar Area Chart</h1>
              </v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <polararea />
            </v-card-text>
          </v-card>
        </v-hover>
      </v-col>
      <v-col cols="12" md="6" sm="12" class="pa-1">
        <v-hover v-slot:default="{hover}">
          <v-card :elevation="hover ? 12 : 2">
            <v-toolbar>
              <v-toolbar-title>
                <h1 class="title">Radar Chart</h1>
              </v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <radar />
            </v-card-text>
          </v-card>
        </v-hover>
      </v-col>
      <v-col cols="12" sm="12" md="6" class="pa-1">
        <v-hover v-slot:default="{hover}">
          <v-card :elevation="hover ? 12 : 2">
            <v-toolbar>
              <v-toolbar-title>
                <h1 class="title">Bubble Chart</h1>
              </v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <bubble/>
            </v-card-text>
          </v-card>
        </v-hover>
      </v-col>
      <v-col cols="12" md="6" sm="12" class="pa-1">
        <v-hover v-slot:default="{hover}">
          <v-card :elevation="hover ? 12 : 2">
            <v-toolbar>
              <v-toolbar-title>
                <h1 class="title">Scatter Chart</h1>
              </v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <scatter />
            </v-card-text>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import linechart from "@/components/Charts/Line";
import barchart from "@/components/Charts/Bar";
import horizontalbar from "@/components/Charts/HorizontalBar";
import doughnut from "@/components/Charts/Doughnut";
import pie from "@/components/Charts/Pie";
import polararea from "@/components/Charts/PolarArea";
import radar from "@/components/Charts/Radar";
import bubble from '@/components/Charts/Bubble';
import scatter from '@/components/Charts/Scatter';
export default {
  components: {
    linechart,
    barchart,
    horizontalbar,
    doughnut,
    pie,
    polararea,
    radar,
    bubble,
    scatter
  }
};
</script>