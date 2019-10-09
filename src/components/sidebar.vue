<template>
   <div class="sidebar">
       <v-navigation-drawer
        app
        v-model="drawerStatus"
        absolute
        color="sidebarColor"
        @transitionend="transitionend"
       ></v-navigation-drawer>
   </div>
</template>

<script>
export default {
    props:{
        drawerStatus : {
            required:true,
            type:Boolean
        }
    },
    methods:{
        transitionend(){
            if(!this.drawerStatus){
                this.$emit('transtionend');
            }
        }
    } 
}
</script>