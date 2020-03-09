<template>
  <profile-dialog profileWidth="700px" enableTitle title="新增行程">
    <template #open-dialog>
      <v-btn>
        <v-icon>mdi-playlist-plus</v-icon>新增行程
      </v-btn>
    </template>

    <template #dialog-content>
      <div>
        <v-flex xs11 sm5 lg6>
          <form-option title="計畫名稱">
            <v-text-field solo type="text" placeholder v-model="inputData.addCalenderName"></v-text-field>
          </form-option>
        </v-flex>

        <v-flex xs11 sm5 lg8>
          <form-option title="層級">
            <v-radio-group v-model="inputData.addCalenderLev" row>
              <v-radio value="red">
                <template v-slot:label>
                  <strong class="red--text">1</strong>
                </template>
              </v-radio>
              <v-radio value="orange">
                <template v-slot:label>
                  <strong class="orange--text">2</strong>
                </template>
              </v-radio>
              <v-radio value="primary">
                <template v-slot:label>
                  <strong class="primary--text">3</strong>
                </template>
              </v-radio>
              <v-radio value="accent">
                <template v-slot:label>
                  <strong class="accent--text">4</strong>
                </template>
              </v-radio>
              <v-radio value="purple">
                <template v-slot:label>
                  <strong class="purple--text">5</strong>
                </template>
              </v-radio>
            </v-radio-group>
          </form-option>
        </v-flex>

        <date-picker></date-picker>
        
        <v-textarea outlined name="input-7-4" label="詳細說明" v-model="inputData.calenderDetails"></v-textarea>
      </div>
    </template>

    <template #dialog-close>
      <v-btn color="primary" dark @click="close">close</v-btn>
    </template>

    <template #dialog-save>
      <v-btn color="primary" dark @click="save">save</v-btn>
    </template>
  </profile-dialog>
</template>

<script>
import profileDialog from "@/components/widgets/profileDialog";
import formOption from "@/components/widgets/formOption";
import datePicker from "@/components/widgets/datePicker";

export default {
  components: {
    profileDialog,
    formOption,
    datePicker
  },
  props: ["events"],
  data: vm => ({
    dateFormatted: vm.formatDate(new Date().toISOString().substr(0, 10)),
    menu1: false,
    menu2: false,
    //addCalender
    initDataStorage: null,
    inputData: {
      addCalenderName: "",
      addCalenderStartDate: new Date().toISOString().substr(0, 10),
      addCalenderEndDate: new Date().toISOString().substr(0, 10),
      addCalenderLev: "purple",
      calenderDetails: ""
    }
  }),
  computed: {
    computedDateFormatted() {
      return this.formatDate(this.inputData.addCalenderEndDate);
    },
    inputDataStartDate() {
      return this.inputData.addCalenderStartDate;
    }
  },
  methods: {
    formatDate(date) {
      if (!date) return null;

      const [year, month, day] = date.split("-");
      return `${month}/${day}/${year}`;
    },
    parseDate(date) {
      if (!date) return null;

      const [month, day, year] = date.split("/");
      return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
    },
    save() {
      let obj = {
        name: "",
        details: "",
        start: "",
        end: "",
        color: ""
      };

      let clone = Object.assign({}, obj);
      clone.name = this.inputData.addCalenderName;
      clone.details = this.inputData.calenderDetails;
      clone.start = this.inputData.addCalenderStartDate;
      clone.end = this.inputData.addCalenderEndDate;
      clone.color = this.inputData.addCalenderLev;
      this.events.push(clone);
      this.inputData = Object.assign({}, this.initDataStorage);
    },
    close() {
      this.inputData = Object.assign({}, this.initDataStorage);
    }
  },
  watch: {
    inputDataStartDate() {
      this.dateFormatted = this.formatDate(this.inputData.addCalenderStartDate);
    }
  },
  mounted() {
    //先複製一個初始化狀態提供取消跟重新整理畫面用
    this.initDataStorage = Object.assign({}, this.inputData);
  }
};
</script>
<style scoped>
</style>