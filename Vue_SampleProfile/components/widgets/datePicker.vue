<template>
  <div id="datePicker">
    <v-row row>
      <v-flex xs3 lg5>
        <v-menu
          ref="menu1"
          v-model="menu1"
          :close-on-content-click="false"
          transition="scale-transition"
          offset-y
          :max-width="maxWidth"
          :min-width="minWidth"
        >
          <template v-slot:activator="{ on }">
            <v-text-field
              v-model="startDateFormatted"
              :label="startLabelText"
              :prepend-icon="iconStyle"
              readonly
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker v-model="startDate" no-title scrollable :allowed-dates="allowedStartDates"></v-date-picker>
        </v-menu>
      </v-flex>
      <v-flex xs3 lg1>
        <div class="text-center textCenter">~</div>
      </v-flex>
      <v-flex xs3 lg5>
        <v-menu
          ref="menu2"
          v-model="menu2"
          :close-on-content-click="false"
          transition="scale-transition"
          offset-y
          :max-width="maxWidth"
          :min-width="minWidth"
        >
          <template v-slot:activator="{ on }">
            <v-text-field
              v-model="endDateFormatted"
              :label="endLabelText"
              :prepend-icon="iconStyle"
              readonly
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker v-model="endDate" no-title scrollable :allowed-dates="allowedEndDates"></v-date-picker>
        </v-menu>
      </v-flex>
    </v-row>
  </div>
</template>

<script>
import dateUtil from "@/util/dateUtil";

export default {
  props: {
    dateType: {
      type: String,
      default: "AD"
    },
    minWidth: {
      type: String,
      default: "290px"
    },
    maxWidth: {
      type: String,
      default: "290px"
    },
    iconStyle: {
      type: String,
      default: "event"
    },
    startLabelText: {
      type: String,
      default: ""
    },
    endLabelText: {
      type: String,
      default: ""
    }
  },
  data: () => ({
    menu1: false,
    menu2: false,
    startDate: "",
    endDate: "",
    startDateFormatted: "",
    endDateFormatted: ""
  }),
  methods: {
    formatDate(date) {
      if (this.dateType === "ERA") {
        return dateUtil.formatDate(date);
      } else {
        return date;
      }
    },
    allowedStartDates(val) {
      if (this.endDate !== "") {
        return Date.parse(val).valueOf() <= Date.parse(this.endDate).valueOf();
      }
      return true;
    },
    allowedEndDates(val) {
      if (this.startDate !== "") {
        return (
          Date.parse(val).valueOf() >= Date.parse(this.startDate).valueOf()
        );
      }
      return true;
    }
  },
  watch: {
    startDate(val) {
      this.startDateFormatted = this.formatDate(this.startDate);
       this.$emit("getDate", { startDate: this.startDateFormatted, endDate: this.endDateFormatted });
    },
    endDate(val) {
      this.endDateFormatted = this.formatDate(this.endDate);
       this.$emit("getDate", { startDate: this.startDateFormatted, endDate: this.endDateFormatted });
    }
  },
  computed: {}
};
</script>
<style scoped>
.textCenter {
  line-height: 50px;
}
</style>