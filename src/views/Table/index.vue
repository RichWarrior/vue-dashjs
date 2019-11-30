<template>
  <v-container fluid class="pa-0">
    <v-row class="ma-0">
      <v-col cols="12" md="12" sm="12" class="pa-1">
        <v-hover v-slot:default="{hover}">
          <v-card :elevation="hover ? 12 : 2">
            <v-toolbar>
              <v-toolbar-title>
                <h1 class="title">Simple Tables</h1>
              </v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-row class="ma-0">
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
                <v-col cols="12" sm="12" md="6" class="pa-1">
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
                <v-col cols="12" sm="12" md="6" class="pa-1">
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
                <v-col cols="12" sm="12" md="6" class="pa-1">
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
      <v-col cols="12" sm="12" md="12" class="pa-1">
        <v-hover v-slot:default="{hover}">
          <v-card :elevation="hover ? 12 : 2">
            <v-toolbar>
              <v-toolbar-title>
                <h1 class="title">Data Tables</h1>
              </v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-row class="ma-0">
                <v-col cols="12" sm="12" md="6" class="pa-1">
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
                <v-col cols="12" sm="12" md="6" class="pa-1">
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
                <v-col cols="12" sm="12" md="6" class="pa-1">
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
                <v-col cols="12" md="6" sm="12" class="pa-1">
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
                <v-col cols="12" sm="12" md="6" class="pa-1">
                  <v-card>
                    <v-toolbar>
                      <v-toolbar-title>
                        <h1 class="title">Search</h1>
                      </v-toolbar-title>
                    </v-toolbar>
                    <v-card-text>
                      <dataTableSearch />
                    </v-card-text>
                  </v-card>
                </v-col>
                <v-col cols="12" sm="12" md="6" class="pa-1">
                  <v-card>
                    <v-toolbar>
                      <v-toolbar-title>
                        <h1 class="title">Remove Default Header And Footer</h1>
                      </v-toolbar-title>
                    </v-toolbar>
                    <v-card-text>
                      <dataTableRemoveDefaultHeaderAndFooter />
                    </v-card-text>
                  </v-card>
                </v-col>
                <v-col cols="12" md="6" sm="12" class="pa-1">
                  <v-card>
                    <v-toolbar>
                      <v-toolbar-title>
                        <h1 class="title">
                          Loading State
                        </h1>
                      </v-toolbar-title>
                    </v-toolbar>
                    <v-card-text>
                      <dataTableLoadingState />
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
                      <dataTableDense />
                    </v-card-text>
                  </v-card>
                </v-col>
                <v-col cols="12" md="6" sm="12" class="pa-1">
                  <v-card>
                    <v-toolbar>
                      <v-toolbar-title>
                        <h1 class="title">Footer Props</h1>
                      </v-toolbar-title>
                    </v-toolbar>
                    <v-card-text>
                      <dataTableFooterProps />
                    </v-card-text>
                  </v-card>
                </v-col>
                <v-col cols="12" md="6" sm="12" class="pa-1">
                  <v-card>
                    <v-toolbar>
                      <v-toolbar-title>
                        <h1 class="title">Slots</h1>
                      </v-toolbar-title>
                    </v-toolbar>
                    <v-card-text>
                      <dataTableSlots />
                    </v-card-text>
                  </v-card>
                </v-col>
                <v-col cols="12" md="6" sm="12" class="pa-1">
                  <v-card>
                    <v-toolbar>
                      <v-toolbar-title>
                        <h1 class="title">Expandable Rows</h1>
                      </v-toolbar-title>
                    </v-toolbar>
                    <v-card-text>
                      <dataTableExpandableRows />
                    </v-card-text>
                  </v-card>
                </v-col>
                <v-col cols="12" sm="12" md="6" class="pa-1">
                  <v-card>
                    <v-toolbar>
                      <v-toolbar-title>
                        <h1 class="title">Customizing Default Row</h1>
                      </v-toolbar-title>
                    </v-toolbar>
                    <v-card-text>
                      <customizingDefaultRow />
                    </v-card-text>
                  </v-card>
                </v-col>
                <v-col cols="12" sm="12" md="6" class="pa-1">
                  <v-card>
                    <v-toolbar>
                      <v-toolbar-title>
                        <h1 class="title">Inline Editing</h1>
                      </v-toolbar-title>
                    </v-toolbar>
                    <v-card-text>
                      <dataTableInlineEditing />
                    </v-card-text>
                  </v-card>
                </v-col>
                <v-col cols="12" sm="12" md="6" class="pa-1">
                  <v-card>
                    <v-toolbar>
                      <v-toolbar-title>
                        <h1 class="title">CRUD Actions</h1>
                      </v-toolbar-title>
                    </v-toolbar>
                    <v-card-text>
                      <dataTableCRUDActions />
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
import dataTableSelectableRows from "@/components/Tables/DataTables/SelectableRows";
import dataTableGroupedRows from "@/components/Tables/DataTables/GroupedRows";
import dataTableSortOnMultipleColumns from "@/components/Tables/DataTables/SortOnMultipleColumns";
import dataTableSearch from "@/components/Tables/DataTables/Search";
import dataTableRemoveDefaultHeaderAndFooter from "@/components/Tables/DataTables/RemoveDefaultHeaderAndFooter";
import dataTableLoadingState from '@/components/Tables/DataTables/LoadingState';
import dataTableDense from '@/components/Tables/DataTables/Dense';
import dataTableFooterProps from '@/components/Tables/DataTables/FooterProps';
import dataTableSlots from '@/components/Tables/DataTables/Slots';
import dataTableExpandableRows from '@/components/Tables/DataTables/ExpandableRows';
import customizingDefaultRow from '@/components/Tables/DataTables/CustomizingDefaultRow';
import dataTableInlineEditing from '@/components/Tables/DataTables/InlineEditing';
import dataTableCRUDActions from '@/components/Tables/DataTables/CRUDActions';

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
    dataTableSearch,
    dataTableRemoveDefaultHeaderAndFooter,
    dataTableLoadingState,
    dataTableDense,
    dataTableFooterProps,
    dataTableSlots,
    dataTableExpandableRows,
    customizingDefaultRow,
    dataTableInlineEditing,
    dataTableCRUDActions
  }
};
</script>