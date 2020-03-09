<template>
  <v-widget title="Title">
    <!-- Title -->
    <template #widget-header-action>
      <h3>some ations</h3>
    </template>
    <!-- Content -->
    <template #widget-content>
      <v-flex xs11 sm5 lg12>
        <!-- 純文字 -->
        <form-option title="title1">範例1</form-option>
        <!-- 輸入框 -->
        <form-option title="title2">
          <v-text-field solo type="text" placeholder="範例2" v-model="test"></v-text-field>
        </form-option>
        <!-- 勾選 -->
        <form-option title="title3">
          <v-radio-group :mandatory="false" row>
            <v-radio label="範例3" value="範例3"></v-radio>
          </v-radio-group>
        </form-option>
        <!-- 選項 -->
        <form-option title="title4">
          <v-select solo full-width hide-details></v-select>
        </form-option>
        <!-- dialog -->
        <profile-dialog profileWidth="400px" enableTitle title="Title">
          <template #open-dialog>
            <v-btn color="primary">Open Dialog</v-btn>
          </template>

          <template #dialog-content>
            <div>範例1</div>
          </template>

          <template #dialog-close>
            <v-btn color="primary">close</v-btn>
          </template>

          <template #dialog-save>
            <v-btn color="primary" @click="save">save</v-btn>
          </template>
        </profile-dialog>
        <!-- 時間區間 -->
        <date-picker dateType="ERA" @getDate="handleGetDate"></date-picker>
      </v-flex>
    </template>
  </v-widget>
</template>

<script>
import { postJson, getJson } from "@/api/request";
import VueCookies from "vue-cookies";
import VWidget from "@/components/VWidget";
import profileDialog from "@/components/widgets/profileDialog";
import formOption from "@/components/widgets/formOption";
import datePicker from "@/components/widgets/datePicker";

export default {
  layout: "main/template",
  components: {
    VWidget,
    formOption,
    profileDialog,
    datePicker
  },
  data: () => ({
    // dialog: false
    test:"",
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
    },
    handleGetDate(data) {
      console.log("Date : ", data);
    }
  },
  mounted() {},
  watch: {
  },
};
</script>

<style lang="css" scoped>
</style>

