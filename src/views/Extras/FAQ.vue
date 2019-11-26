<template>
  <v-col class="pa-1" cols="12">
    <v-row align="center" justify="center" class="ma-0">
      <v-col class="pa-1" cols="12" lg="6" md="6">
        <h1 class="title mb-5">Some presale Questions</h1>
        <v-expansion-panels accordion>
          <v-expansion-panel v-for="(item,i) in 5" :key="i">
            <v-expansion-panel-header>Item</v-expansion-panel-header>
            <v-expansion-panel-content>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>      
    </v-row>
     <v-row align="center" justify="center" class="ma-0">
      <v-col class="pa-1" cols="12" lg="6" md="6">
        <h1 class="title mb-5">Buyer Questions</h1>
        <v-expansion-panels accordion>
          <v-expansion-panel v-for="(item,i) in 5" :key="i">
            <v-expansion-panel-header>Item</v-expansion-panel-header>
            <v-expansion-panel-content>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>      
    </v-row>
    <v-row align="center" justify="center" class="ma-0">
      <v-col class="pa-1" cols="12" lg="6" md="6">
        <h1 class="title mb-5">Seller Questions</h1>
        <v-expansion-panels accordion>
          <v-expansion-panel v-for="(item,i) in 5" :key="i">
            <v-expansion-panel-header>Item</v-expansion-panel-header>
            <v-expansion-panel-content>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>      
    </v-row>
  </v-col>
</template>

<script>
export default {};
</script>