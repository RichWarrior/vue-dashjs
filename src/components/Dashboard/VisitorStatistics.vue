<template>
    <v-hover v-slot:default="{hover}">
        <v-card :elevation="hover ? 12 : 2" height="500">
            <v-toolbar>
                <v-toolbar-title>
                    <h1 class="title">Visitor Statistics</h1>
                </v-toolbar-title>
                <v-col class="text-right pa-1">
                    <v-btn icon>
                        <v-icon>fa fa-sync</v-icon>
                    </v-btn>
                </v-col>
            </v-toolbar>
            <v-card-text class="pa-0">
                <v-row class="ma-0">
                    <v-col class="pa-1" cols="12">
                        <lineChart />
                    </v-col>
                </v-row>
            </v-card-text>
        </v-card>
    </v-hover>
</template>

<script>
import lineChart from '@/components/Charts/Line';
export default {
    components:{
        lineChart
    }
}
</script>