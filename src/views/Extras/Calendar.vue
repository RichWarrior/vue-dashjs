<template>
  <div>
    <v-row class="ma-0">
      <v-col cols="12" class="pa-1">
        <v-hover v-slot:default="{hover}">
          <v-card :elevation="hover ? 12 : 2">
            <v-toolbar>
              <v-toolbar-title>
                <h1 class="title">Usage</h1>
              </v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <usage />
            </v-card-text>
          </v-card>
        </v-hover>
      </v-col>
      <v-col cols="12" class="pa-1">
        <v-hover v-slot:default="{hover}">
          <v-card :elevation="hover ? 12 : 2">
            <v-toolbar>
              <v-toolbar-title>
                <h1 class="title">Weekly</h1>
              </v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <weekly />
            </v-card-text>
          </v-card>
        </v-hover>
      </v-col>
      <v-col cols="12" class="pa-1">
        <v-hover v-slot:default="{hover}">
          <v-card :elevation="hover ? 12 : 2">
            <v-toolbar>
              <v-toolbar-title>
                <h1 class="title">Daily</h1>
              </v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <daily />
            </v-card-text>
          </v-card>
        </v-hover>
      </v-col>
      <v-col cols="12" class="pa-1">
        <v-hover v-slot:default="{hover}">
          <v-card :elevation="hover ? 12 : 2">
            <v-toolbar>
              <v-toolbar-title>
                <h1 class="title">Slots</h1>
              </v-toolbar-title>
            </v-toolbar>
            <v-card-text>
                <slots />
            </v-card-text>
          </v-card>
        </v-hover>
      </v-col>
         <v-col cols="12" class="pa-1">
        <v-hover v-slot:default="{hover}">
          <v-card :elevation="hover ? 12 : 2">
            <v-toolbar>
              <v-toolbar-title>
                <h1 class="title">Events</h1>
              </v-toolbar-title>
            </v-toolbar>
            <v-card-text>
                <events />
            </v-card-text>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import usage from "@/components/Calendars/Usage";
import weekly from "@/components/Calendars/Weekly";
import daily from "@/components/Calendars/Daily";
import slots from '@/components/Calendars/Slots';
import events from '@/components/Calendars/Events'
export default {
  components: {
    usage,
    weekly,
    daily,
    slots,
    events
  }
};
</script>

