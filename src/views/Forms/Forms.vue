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
    <v-col cols="12" sm="12" md="12">
      <v-hover v-slot:default="{hover}">
        <v-card :elevation="hover ? 12 :2">
          <v-toolbar>
            <v-toolbar-title>
              <h1 class="title">File Inputs</h1>
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
                    <v-file-input label="File input"></v-file-input>
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col cols="12" sm="12" md="6">
                <v-card>
                  <v-toolbar>
                    <v-toolbar-title>
                      <h1 class="title">Multiple</h1>
                    </v-toolbar-title>
                  </v-toolbar>
                  <v-card-text>
                    <v-file-input multiple label="File input"></v-file-input>
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col cols="12" sm="12" md="6">
                <v-card>
                  <v-toolbar>
                    <v-toolbar-title>
                      <h1 class="title">Accept Formats</h1>
                    </v-toolbar-title>
                  </v-toolbar>
                  <v-card-text>
                    <v-file-input accept="image/*" label="File input"></v-file-input>
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col cols="12" sm="12" md="6">
                <v-card>
                  <v-toolbar>
                    <v-toolbar-title>
                      <h1 class="title">With Chips</h1>
                    </v-toolbar-title>
                  </v-toolbar>
                  <v-card-text>
                    <div>
                      <v-file-input chips multiple label="File input w/ chips"></v-file-input>
                      <v-file-input small-chips multiple label="File input w/ small chips"></v-file-input>
                    </div>
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col cols="12" sm="12" md="6">
                <v-card>
                  <v-toolbar>
                    <v-toolbar-title>
                      <h1 class="title">Size Displaying</h1>
                    </v-toolbar-title>
                  </v-toolbar>
                  <v-card-text>
                    <v-file-input show-size label="File input"></v-file-input>
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col cols="12" sm="12" md="6">
                <v-card>
                  <v-toolbar>
                    <v-toolbar-title>
                      <h1 class="title">Counter</h1>
                    </v-toolbar-title>
                  </v-toolbar>
                  <v-card-text>
                    <v-file-input show-size counter multiple label="File input"></v-file-input>
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col cols="12" sm="12" md="6">
                <v-card>
                  <v-toolbar>
                    <v-toolbar-title>
                      <h1 class="title">Custom Icons</h1>
                    </v-toolbar-title>
                  </v-toolbar>
                  <v-card-text>
                    <v-file-input label="File input" filled prepend-icon="mdi-camera"></v-file-input>
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col cols="12" sm="12" md="6">
                <v-card>
                  <v-toolbar>
                    <v-toolbar-title>
                      <h1 class="title">Dense</h1>
                    </v-toolbar-title>
                  </v-toolbar>
                  <v-card-text>
                    <v-file-input label="File input" outlined dense></v-file-input>
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col cols="12" sm="12" md="6">
                <v-card>
                  <v-toolbar>
                    <v-toolbar-title>
                      <h1 class="title">Selection Slot</h1>
                    </v-toolbar-title>
                  </v-toolbar>
                  <v-card-text>
                    <v-file-input
                      v-model="files"
                      placeholder="Upload your documents"
                      label="File input"
                      multiple
                      prepend-icon="mdi-paperclip"
                    >
                      <template v-slot:selection="{ text }">
                        <v-chip small label color="primary">{{ text }}</v-chip>
                      </template>
                    </v-file-input>
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col cols="12" sm="12" md="6">
                <v-card>
                  <v-toolbar>
                    <v-toolbar-title>
                      <h1 class="title">Validation</h1>
                    </v-toolbar-title>
                  </v-toolbar>
                  <v-card-text>
                    <v-file-input
                      :rules="rules"
                      accept="image/png, image/jpeg, image/bmp"
                      placeholder="Pick an avatar"
                      prepend-icon="mdi-camera"
                      label="Avatar"
                    ></v-file-input>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-hover>
    </v-col>
    <v-col cols="12" sm="12" md="12">
      <v-hover v-slot:default="{hover}">
        <v-card :elevation="hover ? 12 :2">
          <v-toolbar>
            <v-toolbar-title>
              <h1 class="title">Forms</h1>
            </v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-row>
              <v-col cols="12" sm="12" md="6">
                <v-card>
                  <v-toolbar>
                    <v-toolbar-title>Usage</v-toolbar-title>
                  </v-toolbar>
                  <v-card-text>
                    <v-form v-model="usageValid">
                      <v-container>
                        <v-row>
                          <v-col cols="12" md="4">
                            <v-text-field
                              v-model="usagefirstname"
                              :rules="usagenameRules"
                              :counter="10"
                              label="First name"
                              required
                            ></v-text-field>
                          </v-col>

                          <v-col cols="12" md="4">
                            <v-text-field
                              v-model="usagelastname"
                              :rules="usagenameRules"
                              :counter="10"
                              label="Last name"
                              required
                            ></v-text-field>
                          </v-col>

                          <v-col cols="12" md="4">
                            <v-text-field
                              v-model="usageemail"
                              :rules="usageemailRules"
                              label="E-mail"
                              required
                            ></v-text-field>
                          </v-col>
                        </v-row>
                      </v-container>
                    </v-form>
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col cols="12" md="6" sm="12">
                <v-card>
                  <v-toolbar>
                    <v-toolbar-title>
                      <h1 class="title">Validation</h1>
                    </v-toolbar-title>
                  </v-toolbar>
                  <v-card-text>
                    <v-form ref="form" v-model="validationvalid" lazy-validation>
                      <v-text-field
                        v-model="validationname"
                        :counter="10"
                        :rules="validationnameRules"
                        label="Name"
                        required
                      ></v-text-field>

                      <v-text-field
                        v-model="validationemail"
                        :rules="validationemailRules"
                        label="E-mail"
                        required
                      ></v-text-field>

                      <v-select
                        v-model="validationselect"
                        :items="validationitems"
                        :rules="[v => !!v || 'Item is required']"
                        label="Item"
                        required
                      ></v-select>

                      <v-checkbox
                        v-model="validationcheckbox"
                        :rules="[v => !!v || 'You must agree to continue!']"
                        label="Do you agree?"
                        required
                      ></v-checkbox>

                      <v-btn
                        :disabled="!valid"
                        color="success"
                        class="mr-4"
                        @click="validate"
                      >Validate</v-btn>

                      <v-btn color="error" class="mr-4" @click="reset">Reset Form</v-btn>

                      <v-btn color="warning" @click="resetValidation">Reset Validation</v-btn>
                    </v-form>
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
        <v-card :elevation="hover ? 12 :2">
          <v-toolbar>
            <v-toolbar-title>
              <h1 class="title">Sliders</h1>
            </v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-row>
              <v-col cols="12" md="6" sm="12">
                <v-card>
                  <v-toolbar>
                    <v-toolbar-title>Usage</v-toolbar-title>
                  </v-toolbar>
                  <v-card-text>
                    <v-slider
                      v-model="volume"
                      append-icon="fa fa-volume-up"
                      prepend-icon="fa fa-volume-down"
                      label="Volume"
                    ></v-slider>
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col cols="12" md="6" sm="12">
                <v-card>
                  <v-toolbar>
                    <v-toolbar-title>
                      <h1 class="title">Min & Max Values</h1>
                    </v-toolbar-title>
                  </v-toolbar>
                  <v-card-text>
                    <v-row>
                      <v-col class="pr-4">
                        <v-slider
                          v-model="slider"
                          class="align-center"
                          :max="max"
                          :min="min"
                          hide-details
                        >
                          <template v-slot:append>
                            <v-text-field
                              v-model="slider"
                              class="mt-0 pt-0"
                              hide-details
                              single-line
                              type="number"
                              style="width: 60px"
                            ></v-text-field>
                          </template>
                        </v-slider>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col class="px-4">
                        <v-range-slider
                          v-model="range"
                          :max="max"
                          :min="min"
                          hide-details
                          class="align-center"
                        >
                          <template v-slot:prepend>
                            <v-text-field
                              v-model="range[0]"
                              class="mt-0 pt-0"
                              hide-details
                              single-line
                              type="number"
                              style="width: 60px"
                            ></v-text-field>
                          </template>
                          <template v-slot:append>
                            <v-text-field
                              v-model="range[1]"
                              class="mt-0 pt-0"
                              hide-details
                              single-line
                              type="number"
                              style="width: 60px"
                            ></v-text-field>
                          </template>
                        </v-range-slider>
                      </v-col>
                    </v-row>
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col cols="12" sm="12" md="6">
                <v-card>
                  <v-toolbar>
                    <v-toolbar-title>
                      <h1 class="title">Disabled</h1>
                    </v-toolbar-title>
                  </v-toolbar>
                  <v-card-text>
                    <v-slider disabled label="Disabled" value="30"></v-slider>
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col cols="12" sm="12" md="6">
                <v-card>
                  <v-toolbar>
                    <v-toolbar-title>
                      <h1 class="title">Readonly</h1>
                    </v-toolbar-title>
                  </v-toolbar>
                  <v-card-text>
                    <v-slider readonly label="Readonly" value="30"></v-slider>
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col cols="12" sm="12" md="6">
                <v-card>
                  <v-toolbar>
                    <v-toolbar-title>
                      <h1 class="title">Vertical Sliders</h1>
                    </v-toolbar-title>
                  </v-toolbar>
                  <v-card-text>
                    <v-slider value="70" vertical label="Regular"></v-slider>
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col cols="12" sm="12" md="6">
                <v-card>
                  <v-toolbar>
                    <v-toolbar-title>
                      <h1 class="title">Thumb</h1>
                    </v-toolbar-title>
                  </v-toolbar>
                  <v-card-text>
                    <v-slider class="ma-5" value="35" :thumb-size="24" thumb-label="always"></v-slider>
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col cols="12" sm="12" md="6">
                <v-card>
                  <v-toolbar>
                    <v-toolbar-title>
                      <h1 class="title">Custom Range Sliders</h1>
                    </v-toolbar-title>
                  </v-toolbar>
                  <v-card-text>
                    <v-range-slider
                      :tick-labels="seasons"
                      :value="[0, 1]"
                      min="0"
                      max="3"
                      ticks="always"
                      tick-size="4"
                      class="ma-5"
                    >
                      <template v-slot:thumb-label="props">
                        <v-icon dark>{{ season(props.value) }}</v-icon>
                      </template>
                    </v-range-slider>
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col cols="12" sm="12" md="6">
                <v-card>
                  <v-toolbar>
                    <v-toolbar-title>
                      <h1 class="title">Ticks</h1>
                    </v-toolbar-title>
                  </v-toolbar>
                  <v-card-text>
                    <v-slider value="4" step="10" ticks="always" tick-size="4"></v-slider>
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col cols="12" sm="12" md="6">
                <v-card>
                  <v-toolbar>
                    <v-toolbar-title>
                      <h1 class="title">Custom Colors</h1>
                    </v-toolbar-title>
                  </v-toolbar>
                  <v-card-text>
                    <v-slider v-model="ex1.val" :color="ex1.color" :label="ex1.label"></v-slider>

                    <v-slider v-model="ex2.val" :label="ex2.label" :track-color="ex2.color"></v-slider>

                    <v-slider
                      v-model="ex3.val"
                      :label="ex3.label"
                      :thumb-color="ex3.color"
                      thumb-label="always"
                    ></v-slider>
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col cols="12" md="6" sm="12">
                <v-card>
                  <v-toolbar>
                    <v-toolbar-title>
                      <h1 class="title">Validation</h1>
                    </v-toolbar-title>
                  </v-toolbar>
                  <v-card-text>
                    <v-slider
                      v-model="validationvalue"
                      :rules="validationrules"
                      label="How many?"
                      step="10"
                      thumb-label="always"
                      ticks
                      class="ma-5"
                    ></v-slider>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-hover>
    </v-col>
    <v-col cols="12" sm="12" md="12">
      <v-hover v-slot:default="{hover}">
        <v-card :elevation="hover ? 12 : 2">
          <v-toolbar>
            <v-toolbar-title>
              <h1 class="title">TextArea</h1>
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
                      <v-col cols="12" md="6">
                        <v-textarea
                          name="input-7-1"
                          label="Default style"
                          value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
                          hint="Hint text"
                        ></v-textarea>
                      </v-col>
                      <v-col cols="12" md="6">
                        <v-textarea solo name="input-7-4" label="Solo textarea"></v-textarea>
                      </v-col>
                      <v-col cols="12" md="6">
                        <v-textarea
                          filled
                          name="input-7-4"
                          label="Filled textarea"
                          value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
                        ></v-textarea>
                      </v-col>
                      <v-col cols="12" md="6">
                        <v-textarea
                          outlined
                          name="input-7-4"
                          label="Outlined textarea"
                          value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
                        ></v-textarea>
                      </v-col>
                    </v-row>
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col cols="12" md="6" sm="12">
                <v-card>
                  <v-toolbar>
                    <v-toolbar-title>
                      <h1 class="title">Icons</h1>
                    </v-toolbar-title>
                  </v-toolbar>
                  <v-card-text>
                    <v-row>
                      <v-col cols="12" sm="6">
                        <v-textarea
                          class="mx-2"
                          label="prepend-icon"
                          rows="1"
                          prepend-icon="fa fa-comment"
                        ></v-textarea>
                      </v-col>
                      <v-col cols="12" sm="6">
                        <v-textarea
                          append-icon="fa fa-comment"
                          class="mx-2"
                          label="append-icon"
                          rows="1"
                        ></v-textarea>
                      </v-col>
                      <v-col cols="12" sm="6">
                        <v-textarea
                          prepend-inner-icon="fa fa-comment"
                          class="mx-2"
                          label="prepend-inner-icon"
                          rows="1"
                        ></v-textarea>
                      </v-col>
                      <v-col cols="12" sm="6">
                        <v-textarea
                          append-outer-icon="fa fa-comment"
                          class="mx-2"
                          label="append-outer-icon"
                          rows="1"
                        ></v-textarea>
                      </v-col>
                    </v-row>
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col cols="12" md="6" sm="12">
                <v-card>
                  <v-toolbar>
                    <v-toolbar-title>
                      <h1 class="title">Clearable</h1>
                    </v-toolbar-title>
                  </v-toolbar>
                  <v-card-text>
                    <v-textarea
                      clearable
                      clear-icon="fa fa-times"
                      label="Text"
                      value="This is clearable text."
                    ></v-textarea>
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col cols="12" md="6" sm="12">
                <v-card>
                  <v-toolbar>
                    <v-toolbar-title>
                      <h1 class="title">Counter</h1>
                    </v-toolbar-title>
                  </v-toolbar>
                  <v-card-text>
                    <v-textarea counter label="Text"></v-textarea>
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
    noDataWithChipsSearch: null,
    files: [],
    rules: [
      value =>
        !value ||
        value.size < 2000000 ||
        "Avatar size should be less than 2 MB!"
    ],
    usageValid: false,
    usagefirstname: "",
    usagelastname: "",
    usagenameRules: [
      v => !!v || "Name is required",
      v => v.length <= 10 || "Name must be less than 10 characters"
    ],
    usageemail: "",
    usageemailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+/.test(v) || "E-mail must be valid"
    ],
    validationvalid: true,
    validationname: "",
    validationnameRules: [
      v => !!v || "Name is required",
      v => (v && v.length <= 10) || "Name must be less than 10 characters"
    ],
    validationemail: "",
    validationemailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+\..+/.test(v) || "E-mail must be valid"
    ],
    validationselect: null,
    validationitems: ["Item 1", "Item 2", "Item 3", "Item 4"],
    validationcheckbox: false,
    volume: 25,
    min: -50,
    max: 90,
    slider: 40,
    range: [-20, 70],
    seasons: ["Winter", "Spring", "Summer", "Fall"],
    icons: ["mdi-snowflake", "mdi-leaf", "mdi-fire", "mdi-water"],
    ex1: { label: "color", val: 25, color: "orange darken-3" },
    ex2: { label: "track-color", val: 75, color: "green lighten-1" },
    ex3: { label: "thumb-color", val: 50, color: "red" },
    validationvalue: 30,
    validationrules: [v => v <= 40 || "Only 40 in stock"],
    valid:false
  }),
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true;
      }
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
    season(val) {
      return this.icons[val];
    }
  },
  watch: {
    NoDataWithChipsModel(val) {
      if (val.length > 5) {
        this.$nextTick(() => this.NoDataWithChipsModel.pop());
      }
    }
  }
};
</script>