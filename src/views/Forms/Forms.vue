<template>
  <v-row class="ma-2">
    <v-col cols="12" md="12" sm="12">
      <v-hover v-slot:default="{hover}">
        <v-card :elevation="hover?12:2">
          <v-toolbar>
            <v-toolbar-title>
              <h1 class="title">Auto Completes</h1>
            </v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-row>
              <v-col cols="12" md="6" sm="12">
                <v-card>
                  <v-toolbar>
                    <v-toolbar-title>
                      <h1 class="title">Dense</h1>
                      <h1 class="caption">
                        You can use
                        <code>dense</code> prop to reduce autocomplete height and lower max height of list items.
                      </h1>
                    </v-toolbar-title>
                  </v-toolbar>
                  <v-card-text>
                    <v-col cols="12">
                      <v-autocomplete
                        v-model="denseValues"
                        :items="denseItems"
                        outlined
                        dense
                        chips
                        small-chips
                        label="Outlined"
                        multiple
                      ></v-autocomplete>
                    </v-col>
                    <v-col cols="12">
                      <v-autocomplete
                        v-model="denseValues"
                        :items="denseItems"
                        dense
                        chips
                        small-chips
                        label="Solo"
                        multiple
                        solo
                      ></v-autocomplete>
                    </v-col>
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col cols="12" md="6" sm="12">
                <v-card>
                  <v-toolbar>
                    <v-toolbar-title>
                      <h1 class="title">Usage</h1>
                      <h1 class="caption">
                        The autocomplete component extends
                        <code>v-select</code> and adds the ability to filter items.
                      </h1>
                    </v-toolbar-title>
                  </v-toolbar>
                  <v-card-text>
                    <v-form autocomplete="false">
                      <v-autocomplete label="Components" :items="autoCompleteItems"></v-autocomplete>
                    </v-form>
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col cols="12" md="6" sm="12">
                <v-card>
                  <v-toolbar>
                    <v-toolbar-title>
                      <h1 class="title">Slots</h1>
                      <h1
                        class="caption"
                      >With the power of slots, you can customize the visual output of the select.</h1>
                    </v-toolbar-title>
                  </v-toolbar>
                  <v-card-text>
                    <v-card color="blue-grey darken-1" dark :loading="isUpdating">
                      <template v-slot:progress>
                        <v-progress-linear
                          absolute
                          color="green lighten-3"
                          height="4"
                          indeterminate
                        ></v-progress-linear>
                      </template>
                      <v-img
                        height="200"
                        src="https://cdn.vuetifyjs.com/images/cards/dark-beach.jpg"
                      >
                        <v-row>
                          <v-col class="text-right" cols="12">
                            <v-menu bottom left transition="slide-y-transition">
                              <template v-slot:activator="{ on }">
                                <v-btn icon v-on="on">
                                  <v-icon>mdi-dots-vertical</v-icon>
                                </v-btn>
                              </template>
                              <v-list>
                                <v-list-item @click="isUpdating = true">
                                  <v-list-item-action>
                                    <v-icon>mdi-settings</v-icon>
                                  </v-list-item-action>
                                  <v-list-item-content>
                                    <v-list-item-title>Update</v-list-item-title>
                                  </v-list-item-content>
                                </v-list-item>
                              </v-list>
                            </v-menu>
                          </v-col>
                          <v-row class="pa-4" align="center" justify="center">
                            <v-col class="text-center">
                              <h3 class="headline">{{ name }}</h3>
                              <span class="grey--text text--lighten-1">{{ title }}</span>
                            </v-col>
                          </v-row>
                        </v-row>
                      </v-img>
                      <v-form>
                        <v-container>
                          <v-row>
                            <v-col cols="12" md="6">
                              <v-text-field
                                v-model="name"
                                :disabled="isUpdating"
                                filled
                                color="blue-grey lighten-2"
                                label="Name"
                              ></v-text-field>
                            </v-col>
                            <v-col cols="12" md="6">
                              <v-text-field
                                v-model="title"
                                :disabled="isUpdating"
                                filled
                                color="blue-grey lighten-2"
                                label="Title"
                              ></v-text-field>
                            </v-col>
                            <v-col cols="12">
                              <v-autocomplete
                                v-model="friends"
                                :disabled="isUpdating"
                                :items="people"
                                filled
                                chips
                                color="blue-grey lighten-2"
                                label="Select"
                                item-text="name"
                                item-value="name"
                                multiple
                              >
                                <template v-slot:selection="data">
                                  <v-chip
                                    v-bind="data.attrs"
                                    :input-value="data.selected"
                                    close
                                    @click="data.select"
                                    @click:close="remove(data.item)"
                                  >
                                    <v-avatar left>
                                      <v-img :src="data.item.avatar"></v-img>
                                    </v-avatar>
                                    {{ data.item.name }}
                                  </v-chip>
                                </template>
                                <template v-slot:item="data">
                                  <template v-if="typeof data.item !== 'object'">
                                    <v-list-item-content v-text="data.item"></v-list-item-content>
                                  </template>
                                  <template v-else>
                                    <v-list-item-avatar>
                                      <img :src="data.item.avatar" />
                                    </v-list-item-avatar>
                                    <v-list-item-content>
                                      <v-list-item-title v-html="data.item.name"></v-list-item-title>
                                      <v-list-item-subtitle v-html="data.item.group"></v-list-item-subtitle>
                                    </v-list-item-content>
                                  </template>
                                </template>
                              </v-autocomplete>
                            </v-col>
                          </v-row>
                        </v-container>
                      </v-form>
                      <v-divider></v-divider>
                      <v-card-actions>
                        <v-switch
                          v-model="autoUpdate"
                          :disabled="isUpdating"
                          class="mt-0"
                          color="green lighten-2"
                          hide-details
                          label="Auto Update"
                        ></v-switch>
                        <v-spacer></v-spacer>
                        <v-btn
                          :disabled="autoUpdate"
                          :loading="isUpdating"
                          color="blue-grey darken-3"
                          depressed
                          @click="isUpdating = true"
                        >
                          <v-icon left>mdi-update</v-icon>Update Now
                        </v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-hover>
    </v-col>
    <v-col cols="12" md="12" sm="12">
      <v-hover v-slot:default="{hover}">
        <v-card :elevation="hover ? 12 : 2">
          <v-toolbar>
            <v-toolbar-title>
              <h1 class="title">Combobox</h1>
            </v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-row>
              <v-col cols="12" md="6" sm="12">
                <v-card>
                  <v-toolbar>
                    <v-toolbar-title>
                      <h1 class="title">Usage</h1>
                    </v-toolbar-title>
                  </v-toolbar>
                  <v-card-text>
                    <v-row>
                      <v-col cols="12">
                        <v-combobox
                          v-model="comboboxModel"
                          :items="comboboxItems"
                          label="Select a favorite activity or create a new one"
                        ></v-combobox>
                      </v-col>
                      <v-col cols="12">
                        <v-combobox
                          v-model="comboboxModel"
                          :items="comboboxItems"
                          chips
                          label="I use chips"
                        ></v-combobox>
                      </v-col>
                      <v-col cols="12">
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
                      <v-col cols="12">
                        <v-combobox v-model="comboboxModel" chips label="I'm readonly" readonly></v-combobox>
                      </v-col>
                    </v-row>
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col cols="12" md="6" sm="12">
                <v-card>
                  <v-toolbar>
                    <v-toolbar-title>
                      <h1 class="title">Multiple Combobox</h1>
                    </v-toolbar-title>
                  </v-toolbar>
                  <v-card-text>
                    <v-row>
                      <v-col cols="12">
                        <v-combobox
                          v-model="multipleSelectModel"
                          :items="multipleSelectItems"
                          label="Select a favorite activity or create a new one"
                          multiple
                        ></v-combobox>
                      </v-col>
                      <v-col cols="12">
                        <v-combobox
                          v-model="multipleSelectModel"
                          :items="multipleSelectItems"
                          label="I use chips"
                          multiple
                          chips
                        ></v-combobox>
                      </v-col>
                      <v-col cols="12">
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
                      <v-col cols="12">
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
              <v-col cols="12" md="6" sm="12">
                <v-card>
                  <v-toolbar>
                    <v-toolbar-title>
                      <h1 class="title">Dense</h1>
                    </v-toolbar-title>
                  </v-toolbar>
                  <v-card-text>
                    <v-row>
                      <v-col cols="12">
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
              <v-col cols="12" md="6" sm="12">
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
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    autoCompleteItems: [
      "Autocompletes",
      "Comboboxes",
      "Forms",
      "Inputs",
      "Overflow Buttons",
      "Selects",
      "Selection Controls",
      "Sliders",
      "Textareas",
      "Text Fields"
    ],
    denseItems: ["foo", "bar", "fizz", "buzz"],
    denseValues: ["foo", "bar"],
    autoUpdate: true,
    friends: ["Sandra Adams", "Britta Holt"],
    isUpdating: false,
    name: "Midnight Crew",
    people: [
      { header: "Group 1" },
      {
        name: "Sandra Adams",
        group: "Group 1",
        avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg"
      },
      {
        name: "Ali Connors",
        group: "Group 1",
        avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg"
      },
      {
        name: "Trevor Hansen",
        group: "Group 1",
        avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg"
      },
      {
        name: "Tucker Smith",
        group: "Group 1",
        avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg"
      },
      { divider: true },
      { header: "Group 2" },
      {
        name: "Britta Holt",
        group: "Group 2",
        avatar: "https://cdn.vuetifyjs.com/images/lists/5.jpg"
      },
      {
        name: "Jane Smith ",
        group: "Group 2",
        avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg"
      },
      {
        name: "John Smith",
        group: "Group 2",
        avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg"
      },
      {
        name: "Sandra Williams",
        group: "Group 2",
        avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg"
      }
    ],
    title: "The summer breeze",
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