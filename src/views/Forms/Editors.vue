<template>
    <v-row class="ma-0">
        <v-col class="pa-1" cols="12">
            <v-card>
                <v-toolbar>
                    <v-toolbar-title>
                        <h1 class="title">Quill Text Editor</h1>
                    </v-toolbar-title>
                </v-toolbar>
                <v-card-text>
                    <quill />
                </v-card-text>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
import quill from '@/components/Editors/Quill';
export default {
    components:{
        quill
    }
}
</script>