<template>
  <div id="index">
    <v-container grid-list-lg fluid>
      <!-- CARD比例 -->
      <!-- <v-card>
        <v-responsive :aspect-ratio="16/16">
          <v-card-text>This card will always be 16:9 (unless you put more stuff in it)</v-card-text>
        </v-responsive>
      </v-card>-->

      <!-- 麵包削 -->
      <breadcrumbs :urlItems="urlItems" />
      <!-- 頁簽 -->
      <tab :tabItems="tabItems" :defaultTabNumber="0">
        <!-- 第一頁 -->
        <template #tab-0>
          <example-one />
        </template>

        <!-- 第二頁 -->
        <template #tab-1>
          <example-two />
        </template>

        <!-- 第三頁 -->
        <template #tab-2>
          <example-three />
        </template>
      </tab>

      <!-- <v-layout row wrap>
        <v-flex xs11 sm5 lg3></v-flex>
      </v-layout>

      <v-layout row wrap></v-layout>

      <v-layout row wrap></v-layout> -->
    </v-container>
  </div>
</template>

<script>
import { postJson, getJson } from "@/api/request";
import VueCookies from "vue-cookies";
import breadcrumbs from "@/components/widgets/breadcrumbs";
import tab from "@/components/widgets/tab";
import exampleOne from "@/containers/index/exampleOne";
import exampleTwo from "@/containers/index/exampleTwo";
import exampleThree from "@/containers/index/exampleThree";

export default {
  layout: "main/template",
  components: {
    tab,
    breadcrumbs,
    exampleOne,
    exampleTwo,
    exampleThree
  },
  data: () => ({
    tabItems: [
      { id: "tab0", name: "page 1" },
      { id: "tab1", name: "page 2" },
      { id: "tab2", name: "page 3" }
    ],
    urlItems: [
      {
        text: "管理",
        disabled: false,
        href: "/project/index"
      },
      {
        text: "權限設定",
        disabled: false,
        href: "/project/index"
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
    }
  },
  mounted() {}
};
</script>

<style lang="css" scoped>
#index {
  font-size: 1rem;
  font-family: "Microsoft JhengHei", sans-serif !important;
  font-weight: initial;
  line-height: normal;
  -webkit-font-smoothing: antialiased;
}

.titleStyle {
  padding: 0.875rem 1.375rem;
  color: #495057;
  background-color: #e9ecef;
  border-radius: 2px;
  margin: 0px 5px 0px 5px;
}
.rowHeight {
  height: 50px;
}
</style>

