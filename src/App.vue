<template>
  <v-app>
    <dashjs-authorize v-if="$store.getters.isAuthenticated"></dashjs-authorize>
    <dashjs-unauthorize v-if="!$store.getters.isAuthenticated"></dashjs-unauthorize>
    <dashjs-blank v-if="$store.getters.isBlankTemplate"></dashjs-blank>
  </v-app>
</template>

<script>
export default {
  name: "App",  
};
</script>