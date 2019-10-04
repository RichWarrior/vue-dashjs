<template>
  <div id="app">
    <unauthorizeLayout v-if="!$store.getters.isAuthenticated && !$store.getters.isBlankTemplate"/>
    <authorizeLayout v-if="$store.getters.isAuthenticated && !$store.getters.isBlankTemplate" />
    <blankLayout v-if="$store.getters.isBlankTemplate"/>
  </div>
</template>

<script>
import unauthorizeLayout from "@/layouts/unauthorizeLayout.vue";
import authorizeLayout from "@/layouts/authorizeLayout.vue";
import blankLayout from "@/layouts/blankLayout.vue";
export default {
  components: {
    unauthorizeLayout,
    authorizeLayout,
    blankLayout
  }
};
</script>