<template>
  <v-container fluid>
    <v-row class="ma-2">
      <v-col cols="12" md="12" sm="12">
        <v-hover v-slot:default="{hover}">
          <v-card :elevation="hover ? 12 : 2">
            <v-toolbar>
              <v-toolbar-title>
                <h1 class="title">Simple Tables</h1>
              </v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-row>
                <v-col cols="12" sm="12" md="6">
                  <v-card>
                    <v-toolbar>
                      <v-toolbar-title>
                        <h1 class="title">Usage</h1>
                      </v-toolbar-title>
                    </v-toolbar>
                    <v-card-text>
                      <basicUsage />
                    </v-card-text>
                  </v-card>
                </v-col>
                <v-col cols="12" sm="12" md="6">
                  <v-card>
                    <v-toolbar>
                      <v-toolbar-title>
                        <h1 class="title">Fixed Height</h1>
                      </v-toolbar-title>
                    </v-toolbar>
                    <v-card-text>
                      <basicFixedHeight />
                    </v-card-text>
                  </v-card>
                </v-col>
                <v-col cols="12" sm="12" md="6">
                  <v-card>
                    <v-toolbar>
                      <v-toolbar-title>
                        <h1 class="title">Dark Template</h1>
                      </v-toolbar-title>
                    </v-toolbar>
                    <v-card-text>
                      <basicDark />
                    </v-card-text>
                  </v-card>
                </v-col>
                <v-col cols="12" sm="12" md="6">
                  <v-card>
                    <v-toolbar>
                      <v-toolbar-title>
                        <h1 class="title">Dense Table</h1>
                      </v-toolbar-title>
                    </v-toolbar>
                    <v-card-text>
                      <basicDense />
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
                <h1 class="title">Data Tables</h1>
              </v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-row>
                <v-col cols="12" sm="12" md="6">
                  <v-card>
                    <v-toolbar>
                      <v-toolbar-title>
                        <h1 class="title">Usage</h1>
                      </v-toolbar-title>
                    </v-toolbar>
                    <v-card-text>
                      <dataTableUsage />
                    </v-card-text>
                  </v-card>
                </v-col>
                <v-col cols="12" sm="12" md="6">
                    <v-card>
                        <v-toolbar>
                            <v-toolbar-title>
                                <h1 class="title">Selectable Rows</h1>
                            </v-toolbar-title>
                        </v-toolbar>
                        <v-card-text>
                            <dataTableSelectableRows />
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col cols="12" sm="12" md="6">
                    <v-card>
                        <v-toolbar>
                            <v-toolbar-title>
                                <h1 class="title">Grouped Rows</h1>
                            </v-toolbar-title>
                        </v-toolbar>
                        <v-card-text>
                            <dataTableGroupedRows />
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col cols="12" md="6" sm="12">
                    <v-card>
                        <v-toolbar>
                            <v-toolbar-title>
                                <h1 class="title">Sort On Multiple Columns</h1>
                            </v-toolbar-title>
                        </v-toolbar>
                        <v-card-text>
                            <dataTableSortOnMultipleColumns />
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col cols="12" sm="12" md="6">
                    <v-card>
                        <v-toolbar>
                            <v-toolbar-title>
                                <h1 class="title">Search</h1>
                            </v-toolbar-title>
                        </v-toolbar>
                        <v-card-text>
                            <dataTableSearch/>
                        </v-card-text>
                    </v-card>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
  </v-container>
</template>


<script>
import basicUsage from "@/components/Tables/Simple/Usage";
import basicFixedHeight from "@/components/Tables/Simple/FixedHeight";
import basicDense from "@/components/Tables/Simple/Dense";
import basicDark from "@/components/Tables/Simple/Dark";

import dataTableUsage from "@/components/Tables/DataTables/Usage";
import dataTableSelectableRows from '@/components/Tables/DataTables/SelectableRows';
import dataTableGroupedRows from '@/components/Tables/DataTables/GroupedRows';
import dataTableSortOnMultipleColumns from '@/components/Tables/DataTables/SortOnMultipleColumns';
import dataTableSearch from '@/components/Tables/DataTables/Search';


export default {
  components: {
    basicUsage,
    basicFixedHeight,
    basicDense,
    basicDark,
    dataTableUsage,
    dataTableSelectableRows,
    dataTableGroupedRows,
    dataTableSortOnMultipleColumns,
    dataTableSearch
  }
};
</script>