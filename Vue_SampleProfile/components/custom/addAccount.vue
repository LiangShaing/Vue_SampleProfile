<template>
  <profile-dialog profileWidth="500px" enableTitle title="新增帳號">
    <template #open-dialog>
      <v-btn>
        <v-icon>mdi-playlist-plus</v-icon>新增帳號
      </v-btn>
    </template>

    <template #dialog-content>
      <div>
        <v-flex xs11 sm5 lg6>
          <form-option title="帳號">
            <v-text-field solo type="text" placeholder v-model="inputData.id"></v-text-field>
          </form-option>
        </v-flex>

        <v-flex xs11 sm5 lg6>
          <form-option title="密碼">
            <v-text-field solo type="password" placeholder v-model="inputData.password"></v-text-field>
          </form-option>
        </v-flex>

        <v-flex xs11 sm5 lg8>
          <form-option title="權限">
            <v-radio-group v-model="inputData.routh" row>
              <v-radio value="admin1index">
                <template v-slot:label>
                  <strong class="primary--text">主管</strong>
                </template>
              </v-radio>
              <v-radio value="admin2index">
                <template v-slot:label>
                  <strong class="primary--text">員工</strong>
                </template>
              </v-radio>
            </v-radio-group>
          </form-option>
        </v-flex>
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

export default {
  components: {
    profileDialog,
    formOption
  },
  props: ["events"],
  data: vm => ({
    inputData: {
      id: "",
      password: "",
      routh: "admin2index"
    }
  }),
  methods: {
    save() {
      console.log("inputData", this.inputData);
      this.$store.commit("addAccount", this.inputData);
    },
    close() {
      this.inputData = Object.assign({}, this.initDataStorage);
    }
  },
  watch: {},
  mounted() {
    //先複製一個初始化狀態提供取消跟重新整理畫面用
    this.initDataStorage = Object.assign({}, this.inputData);
  }
};
</script>
<style scoped>
</style>