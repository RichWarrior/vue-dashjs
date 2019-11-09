<template>
    <v-app>
    <v-content class="mb-5">
      <router-view />
    </v-content>
    <dashjs-footer :drawerStatus="drawer"></dashjs-footer>
  </v-app>
</template>

<script>
import {CHECK_AUTHORIZE_STATUS} from '@/store/actions.type';
export default {
  data : () => ({
    drawer:false
  }),
  beforeUpdate(){
    this.$store.dispatch(CHECK_AUTHORIZE_STATUS,true);
  }
}
</script>