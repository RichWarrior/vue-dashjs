<template>
  <v-container fluid class="ma-0 pa-0">
    <v-row class="ma-0">
      <v-col class="pa-1" cols="12" lg="6" md="6">
        <v-hover v-slot:default="{hover}">
          <v-card :elevation="hover ? 12 : 2">
            <v-toolbar>
              <v-toolbar-title>
                <h1 class="title">Type</h1>
              </v-toolbar-title>
            </v-toolbar>
            <v-card-text class="pa-1">
              <type />
            </v-card-text>
          </v-card>
        </v-hover>
      </v-col>
      <v-col class="pa-1" cols="12" lg="6" md="6">
        <v-hover v-slot:default="{hover}">
          <v-card :elevation="hover ? 12 : 2">
            <v-toolbar>
              <v-toolbar-title>
                <h1 class="title">Border</h1>
              </v-toolbar-title>
            </v-toolbar>
            <v-card-text class="pa-1">
              <border />
            </v-card-text>
          </v-card>
        </v-hover>
      </v-col>
      <v-col class="pa-1" cols="12" lg="6" md="6">
        <v-hover v-slot:default="{hover}">
          <v-card :elevation="hover ? 12 : 2">
            <v-toolbar>
              <v-toolbar-title>
                <h1 class="title">Colored Border</h1>
              </v-toolbar-title>
            </v-toolbar>
            <v-card-text class="pa-1">
              <coloredborder />
            </v-card-text>
          </v-card>
        </v-hover>
      </v-col>
      <v-col class="pa-1" cols="12" lg="6" md="6">
        <v-hover v-slot:default="{hover}">
          <v-card :elevation="hover ? 12 : 2">
            <v-toolbar>
              <v-toolbar-title>
                <h1 class="title">Dense</h1>
              </v-toolbar-title>
            </v-toolbar>
            <v-card-text class="pa-1">
              <dense />
            </v-card-text>
          </v-card>
        </v-hover>
      </v-col>
      <v-col class="pa-1" cols="12" lg="6" md="6">
        <v-hover v-slot:default="{hover}">
          <v-card :elevation="hover ? 12 : 2">
            <v-toolbar>
              <v-toolbar-title>
                <h1 class="title">Icons</h1>
              </v-toolbar-title>
            </v-toolbar>
            <v-card-text class="pa-1">
              <icon />
            </v-card-text>
          </v-card>
        </v-hover>
      </v-col>
      <v-col class="pa-1" cols="12" lg="6" md="6">
        <v-hover v-slot:default="{hover}">
          <v-card :elevation="hover ? 12 : 2">
            <v-toolbar>
              <v-toolbar-title>
                <h1 class="title">Dismissable</h1>
              </v-toolbar-title>
            </v-toolbar>
            <v-card-text class="pa-1">
              <dismissable />
            </v-card-text>
          </v-card>
        </v-hover>
      </v-col>
      <v-col class="pa-1" cols="12" lg="6" md="6">
        <v-hover v-slot:default="{hover}">
          <v-card :elevation="hover ? 12 : 2">
            <v-toolbar>
              <v-toolbar-title>
                <h1 class="title">Outlined</h1>
              </v-toolbar-title>
            </v-toolbar>
            <v-card-text class="pa-1">
              <outlined />
            </v-card-text>
          </v-card>
        </v-hover>
      </v-col>
      <v-col class="pa-1" cols="12" lg="6" md="6">
        <v-hover v-slot:default="{hover}">
          <v-card :elevation="hover ? 12 : 2">
            <v-toolbar>
              <v-toolbar-title>
                <h1 class="title">Prominent</h1>
              </v-toolbar-title>
            </v-toolbar>
            <v-card-text class="pa-1">
              <prominent />
            </v-card-text>
          </v-card>
        </v-hover>
      </v-col>
      <v-col class="pa-1" cols="12" lg="6" md="6">
        <v-hover v-slot:default="{hover}">
          <v-card :elevation="hover ? 12 : 2">
            <v-toolbar>
              <v-toolbar-title>
                <h1 class="title">Text</h1>
              </v-toolbar-title>
            </v-toolbar>
            <v-card-text class="pa-1">
              <textcomponent />
            </v-card-text>
          </v-card>
        </v-hover>
      </v-col>
      <v-col class="pa-1" cols="12" lg="6" md="6">
        <v-hover v-slot:default="{hover}">
          <v-card :elevation="hover ? 12 : 2">
            <v-toolbar>
              <v-toolbar-title>
                <h1 class="title">Transition</h1>
              </v-toolbar-title>
            </v-toolbar>
            <v-card-text class="pa-1">
              <transition />
            </v-card-text>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import type from "@/components/Alerts/Type";
import border from "@/components/Alerts/Border";
import coloredborder from "@/components/Alerts/ColoredBorder";
import dense from "@/components/Alerts/Dense";
import dismissable from "@/components/Alerts/Dismissable";
import icon from "@/components/Alerts/Icon";
import outlined from "@/components/Alerts/Outlined";
import prominent from "@/components/Alerts/Prominent";
import textcomponent from "@/components/Alerts/Text";
import transition from '@/components/Alerts/Transition';
export default {
  components: {
    type,
    border,
    coloredborder,
    dense,
    dismissable,
    icon,
    outlined,
    prominent,
    textcomponent,
    transition
  }
};
</script>