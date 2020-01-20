<template>
  <v-row class="ma-0">
    <v-col class="pa-1" cols="12" md="12" sm="12">
      <autocompletes />
    </v-col>
    <v-col class="pa-1" cols="12" md="12" sm="12">
      <combobox />
    </v-col>
    <v-col class="pa-1" cols="12" sm="12" md="12">
      <fileinputs />
    </v-col>
    <v-col class="pa-1" cols="12" sm="12" md="12">
      <forms />
    </v-col>
    <v-col class="pa-1" cols="12" md="12" sm="12">
      <sliders />
    </v-col>
    <v-col class="pa-1" cols="12" sm="12" md="12">
      <textareacp />
    </v-col>
    <v-col class="pa-1" cols="12" sm="12" md="12">
<dropdowns />
    </v-col>
  </v-row>
</template>

<script>
import autocompletes from "@/components/Forms/AutoCompletes";
import combobox from "@/components/Forms/Combobox";
import fileinputs from "@/components/Forms/FileInputs";
import forms from "@/components/Forms/Forms";
import sliders from "@/components/Forms/Sliders";
import textareacp from "@/components/Forms/TextArea.vue";
import dropdowns from "@/components/Forms/DropDown.vue";
export default {
  components: {
    autocompletes,
    combobox,
    fileinputs,
    forms,
    sliders,
    textareacp,
    dropdowns
  }
};
</script>