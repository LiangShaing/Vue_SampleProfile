<template>
  <v-widget title="Title">
    <!-- Title -->
    <template #widget-header-action>
      <h3>some ations</h3>
    </template>
    <!-- Content -->
    <template #widget-content>
      <v-flex xs12 sm12 lg12>
        <data-tables :headers="headers" :dataArray="dataArray" :addRow="false"></data-tables>
      </v-flex>
    </template>
  </v-widget>
</template>

<script>
import { postJson, getJson } from "@/api/request";
import VueCookies from "vue-cookies";
import VWidget from "@/components/VWidget";
import  dataTables  from "@/components/widgets/dataTables";

export default {
  layout: "main/template",
  components: {
    VWidget,
    dataTables
  },
  data: () => ({
    headers: [
      {
        text: "Action",
        value: "action",
        width: "10px",
        align: "center",
        sortable: false
      },
      {
        text: "name",
        value: "name",
        width: "10px",
        align: "center",
        sortable: false
      },
      {
        text: "value",
        value: "value",
        width: "10px",
        align: "center",
        sortable: false
      },
      {
        text: "dailog",
        value: "dailog",
        width: "10px",
        align: "center",
        sortable: false
      }
    ],
    dataArray: [
      { index: 0, name: "王曉明", value: "體育" },
      {
        index: 1,
        name: "陳聰明",
        value: "數學"
      }
    ]
  }),
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

