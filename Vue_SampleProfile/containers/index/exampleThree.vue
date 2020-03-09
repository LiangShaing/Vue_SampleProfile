<template>
  <v-widget title="Calender">
    <!-- Title -->
    <template #widget-header-action>
      <!-- <h3>some ations</h3> -->
    </template>
    <!-- Content -->
    <template #widget-content>
      <v-flex xs12 sm12 lg12>
        <calenders></calenders>
      </v-flex>
    </template>
  </v-widget>
</template>

<script>
import { postJson, getJson } from "@/api/request";
import VueCookies from "vue-cookies";
import VWidget from "@/components/VWidget";
import calenders from "@/components/widgets/calenders";

export default {
  layout: "main/template",
  components: {
    VWidget,
    calenders
  },
  data: () => ({}),
  methods: {
    //呼叫 api
    querySummary(url, showdata) {
      getJson(url)
        .then(response => {
          this.querySummaryData = response.data;
        })
        .catch(error => {
          console.log(error);
          this.errored = true;
        })
        .finally(() => (this.loading = false));
    },
    save() {
      console.log("save");
    }
  },
  mounted() {}
};
</script>

<style lang="css" scoped>
</style>

