<template>
  <v-hover v-slot:default="{hover}">
    <v-card :elevation="hover ? 12 : 2">
      <v-toolbar>
        <v-toolbar-title>
          <h1 class="title">Combobox</h1>
        </v-toolbar-title>
      </v-toolbar>
      <v-card-text>
        <v-row class="ma-0">
          <v-col class="pa-1" cols="12" md="6" sm="12">
            <v-card>
              <v-toolbar>
                <v-toolbar-title>
                  <h1 class="title">Usage</h1>
                </v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-row class="ma-0">
                  <v-col cols="12" class="pa-1">
                    <v-combobox
                      v-model="comboboxModel"
                      :items="comboboxItems"
                      label="Select a favorite activity or create a new one"
                    ></v-combobox>
                  </v-col>
                  <v-col cols="12" class="pa-1">
                    <v-combobox
                      v-model="comboboxModel"
                      :items="comboboxItems"
                      chips
                      label="I use chips"
                    ></v-combobox>
                  </v-col>
                  <v-col cols="12" class="pa-1">
                    <v-combobox
                      v-model="comboboxModel"
                      :items="comboboxItems"
                      chips
                      label="I use a scoped slot"
                    >
                      <template v-slot:selection="data">
                        <v-chip
                          :key="JSON.stringify(data.item)"
                          v-bind="data.attrs"
                          :input-value="data.selected"
                          :disabled="data.disabled"
                          @click.stop="data.parent.selectedIndex = data.index"
                          @click:close="data.parent.selectItem(data.item)"
                        >
                          <v-avatar
                            class="accent white--text"
                            left
                          >{{ data.item.slice(0, 1).toUpperCase() }}</v-avatar>
                          {{ data.item }}
                        </v-chip>
                      </template>
                    </v-combobox>
                  </v-col>
                  <v-col cols="12" class="pa-1">
                    <v-combobox v-model="comboboxModel" chips label="I'm readonly" readonly></v-combobox>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" md="6" sm="12" class="pa-1">
            <v-card>
              <v-toolbar>
                <v-toolbar-title>
                  <h1 class="title">Multiple Combobox</h1>
                </v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-row class="ma-0">
                  <v-col cols="12" class="pa-1">
                    <v-combobox
                      v-model="multipleSelectModel"
                      :items="multipleSelectItems"
                      label="Select a favorite activity or create a new one"
                      multiple
                    ></v-combobox>
                  </v-col>
                  <v-col cols="12" class="pa-1">
                    <v-combobox
                      v-model="multipleSelectModel"
                      :items="multipleSelectItems"
                      label="I use chips"
                      multiple
                      chips
                    ></v-combobox>
                  </v-col>
                  <v-col cols="12" class="pa-1">
                    <v-combobox
                      v-model="multipleSelectModel"
                      :items="multipleSelectItems"
                      label="I use a scoped slot"
                      multiple
                      chips
                    >
                      <template v-slot:selection="data">
                        <v-chip
                          :key="JSON.stringify(data.item)"
                          v-bind="data.attrs"
                          :input-value="data.selected"
                          :disabled="data.disabled"
                          @click:close="data.parent.selectItem(data.item)"
                        >
                          <v-avatar
                            class="accent white--text"
                            left
                            v-text="data.item.slice(0, 1).toUpperCase()"
                          ></v-avatar>
                          {{ data.item }}
                        </v-chip>
                      </template>
                    </v-combobox>
                  </v-col>
                  <v-col cols="12" class="pa-1">
                    <v-combobox
                      v-model="multipleSelectModel"
                      label="I'm readonly"
                      chips
                      multiple
                      readonly
                    ></v-combobox>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" md="6" sm="12" class="pa-1">
            <v-card>
              <v-toolbar>
                <v-toolbar-title>
                  <h1 class="title">Dense</h1>
                </v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-row class="ma-0">
                  <v-col cols="12" class="pa-1">
                    <v-combobox
                      v-model="denseSelectModel"
                      :items="denseSelectItems"
                      label="Combobox"
                      multiple
                      outlined
                      dense
                    ></v-combobox>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" md="6" sm="12" class="pa-1">
            <v-card>
              <v-toolbar>
                <v-toolbar-title>
                  <h1 class="title">No Data With Chips</h1>
                </v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-combobox
                  v-model="NoDataWithChipsModel"
                  :items="NoDataWithChipsItems"
                  :search-input.sync="noDataWithChipsSearch"
                  hide-selected
                  hint="Maximum of 5 tags"
                  label="Add some tags"
                  multiple
                  persistent-hint
                  small-chips
                >
                  <template v-slot:no-data>
                    <v-list-item>
                      <v-list-item-content>
                        <v-list-item-title>
                          No results matching "
                          <strong>{{ noDataWithChipsSearch }}</strong>". Press
                          <kbd>enter</kbd> to create a new one
                        </v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </template>
                </v-combobox>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-hover>
</template>

<script>
export default {
  data: () => ({
    comboboxModel: "Programming",
    comboboxItems: ["Programming", "Design", "Vue", "Vuetify"],
    multipleSelectModel: ["Vuetify", "Programming"],
    multipleSelectItems: ["Programming", "Design", "Vue", "Vuetify"],
    denseSelectModel: ["Vuetify", "Programming"],
    denseSelectItems: ["Programming", "Design", "Vue", "Vuetify"],
    NoDataWithChipsItems: ["Gaming", "Programming", "Vue", "Vuetify"],
    NoDataWithChipsModel: ["Vuetify"],
    noDataWithChipsSearch: null
  }),
  watch: {
    NoDataWithChipsModel(val) {
      if (val.length > 5) {
        this.$nextTick(() => this.NoDataWithChipsModel.pop());
      }
    }
  }
};
</script>