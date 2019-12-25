<template>
  <v-row class="ma-1">
    <v-col class="pa-1" cols="12">
      <v-expansion-panels class="elevation-12" accordion>
        <v-expansion-panel key="monthpicker">
          <v-expansion-panel-header>
            <h1 class="title">Month&Date Pickers</h1>
          </v-expansion-panel-header>
          <v-expansion-panel-content class="ma-0 pa-0">
            <v-row class="ma-0">
              <v-col class="pa-1" cols="12" lg="6" md="6">
                <dateusage />
              </v-col>
              <v-col class="pa-1" cols="12" lg="6" md="6">
                <datecolor />
              </v-col>
              <v-col class="pa-1" cols="12" lg="6" md="6">
                <dateallowed />
              </v-col>
              <v-col class="pa-1" cols="12" lg="6" md="6">
                <datereacttodisplay />
              </v-col>
              <v-col class="pa-1" cols="12" lg="6" md="6">
                <dateinternationalization />
              </v-col>
              <v-col class="pa-1" cols="12" lg="6" md="6">
                <datereadonly />
              </v-col>
              <v-col class="pa-1" cols="12" lg="6" md="6">
                <datecurrentindicator />
              </v-col>
            </v-row>
            <v-divider class="my-5"></v-divider>
            <v-row class="ma-0">
              <v-col class="pa-1" cols="12" lg="6" md="6">
                <monthusage />
              </v-col>
              <v-col class="pa-1" cols="12" lg="6" md="6">
                <monthcolor />
              </v-col>
              <v-col class="pa-1" cols="12" lg="6" md="6">
                <monthallowed />
              </v-col>
              <v-col class="pa-1" cols="12" lg="6" md="6">
                <monthmultiple />
              </v-col>
              <v-col class="pa-1" cols="12" lg="6" md="6">
                <monthreadonly />
              </v-col>
              <v-col class="pa-1" cols="12" lg="6" md="6">
                <monthcurrentindicator />
              </v-col>
              <v-col class="pa-1" cols="12" lg="6" md="6">
                <monthdialog />
              </v-col>
            </v-row>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-col>
    <v-col class="pa-1" cols="12">
      <v-expansion-panels class="elevation-12" accordion>
        <v-expansion-panel key="monthpicker">
          <v-expansion-panel-header>
            <h1 class="title">Time Pickers</h1>
          </v-expansion-panel-header>
          <v-expansion-panel-content class="ma-0 pa-0">
            <v-row class="ma-0">
              <v-col class="pa-1" cols="12">
                <timedialog />
              </v-col>
            </v-row>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-col>
  </v-row>
</template>

<script>
// Date
import dateusage from "@/components/DatePickers/Usage";
import datecolor from "@/components/DatePickers/Color";
import dateallowed from "@/components/DatePickers/AllowedDate";
import datereacttodisplay from "@/components/DatePickers/ReactToDisplay";
import dateinternationalization from "@/components/DatePickers/Internationalization";
import datereadonly from "@/components/DatePickers/ReadOnly";
import datecurrentindicator from "@/components/DatePickers/CurrentDateIndicator";
// Month
import monthusage from "@/components/MonthPickers/Usage";
import monthcolor from "@/components/MonthPickers/Colors";
import monthallowed from "@/components/MonthPickers/Allowed";
import monthmultiple from "@/components/MonthPickers/Multiple";
import monthreadonly from "@/components/MonthPickers/ReadOnly";
import monthcurrentindicator from "@/components/MonthPickers/CurrentIndicator";
import monthdialog from "@/components/MonthPickers/Dialog";
// Time
import timedialog from "@/components/TimePickers/Dialog";
export default {
  components: {
    dateusage,
    datecolor,
    dateallowed,
    datereacttodisplay,
    dateinternationalization,
    datereadonly,
    datecurrentindicator,
    monthusage,
    monthcolor,
    monthallowed,
    monthmultiple,
    monthreadonly,
    monthcurrentindicator,
    monthdialog,
    timedialog
  }
};
</script>