<template>
    <v-row class="ma-0">
        <v-col class="pa-1" cols="12">
            <v-hover v-slot:default="{hover}">
                <v-card :elevation="hover ? 12 : 2">
                    <v-toolbar>
                        <v-toolbar-title>
                            <h1 class="title">Progress Circular</h1>
                        </v-toolbar-title>
                    </v-toolbar>
                    <v-card-text>
                        <circular />
                    </v-card-text>
                </v-card>
            </v-hover>
        </v-col>
        <v-col class="pa-1" cols="12">
            <v-hover v-slot:default="{hover}">
                <v-card :elevation="hover ? 12 : 2">
                    <v-toolbar>
                        <v-toolbar-title>
                            <h1 class="title">Progress Linear</h1>
                        </v-toolbar-title>
                    </v-toolbar>
                    <v-card-text>
                        <linear />
                    </v-card-text>
                </v-card>
            </v-hover>
        </v-col>
    </v-row>
</template>

<script>
import circular from '@/components/Progress/Circular';
import linear from '@/components/Progress/Linear';
export default {
    components:{
        circular,
        linear
    }
}
</script>