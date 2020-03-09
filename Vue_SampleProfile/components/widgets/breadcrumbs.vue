<template>
  <v-breadcrumbs :items="urlItems">
  </v-breadcrumbs>
</template>

<script>
export default {
  props: {
    title: {
      type: String
    },
    titleBg: {
      type: String,
      default: "#e9ecef"
    },
    urlItems: {
      type: Array,
      default: []
    }
  },

  data() {
    return {};
  },
  computed: {}
};
</script>
<style scoped>
</style>