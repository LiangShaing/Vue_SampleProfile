<template>
  <v-card class="cardStyle">
    <!-- Title -->
    <div>
      <a @click="show=!show">
        <h4>Title Expand</h4>
      </a>
    </div>
    <!-- button -->
    <div v-show="show">
      <v-spacer></v-spacer>
      <v-layout v-if="addRow">
        <v-btn dark color="#4d83ff" small>Add Row</v-btn>
      </v-layout>
      <!-- table -->
      <template>
        <v-data-table
          :headers="headers"
          :items="dataArray"
          hide-default-footer
          item-key="index"
          :single-expand="singleExpand"
          :expanded.sync="expanded"
          show-expand
        >
          <template v-slot:item.action="props">
            <div class="text-center">
              <v-icon @click="deleteAccount(props.item.index)">mdi-delete-forever</v-icon>
            </div>
          </template>

          <template v-slot:item.dailog="props">
            <div class="text-center">
              <profile-dialog profileWidth="400px" enableTitle title="Title">
                <template #open-dialog>
                  <v-text-field solo type="text" full-width hide-details single-line flat></v-text-field>
                </template>

                <template #dialog-content>
                  <div>範例1</div>
                </template>

                <template #dialog-close>
                  <v-btn color="primary" dark>close</v-btn>
                </template>

                <template #dialog-save>
                  <v-btn color="primary" dark @click="save">save</v-btn>
                </template>
              </profile-dialog>
            </div>
          </template>
          <template v-slot:footer>
            <td :colspan="headers.length">
              <strong>This is an extra footer</strong>
            </td>
          </template>
          <!-- expand  -->
          <template v-slot:expanded-item="{ headers }">
            <td :colspan="headers.length">
              <v-card>
                <v-card-text>Peek-a-boo!</v-card-text>
              </v-card>
            </td>
          </template>
        </v-data-table>
      </template>
    </div>
  </v-card>
</template>

<script>
import profileDialog from "@/components/widgets/profileDialog";


export default {
  components: {
    profileDialog
  },
  props: {
    addRow: {
      type: Boolean,
      default: false
    },
    headers: {
      type: Array,
      default: null
    },
    dataArray: {
      type: Array,
      default: []
    }
  },

  data: () => ({
    show: true,
    expanded: [],
    singleExpand: false
  }),
  computed: {},
  methods: {
    save() {}
  }
};
</script>
<style scoped>
/* .cardStyle {
  font-family: "Microsoft JhengHei", sans-serif !important;
  width: 100%;
  padding: 20px;
  background-color: #fafafa;
}

.layout {
  margin-left: 20px;
  margin-right: 20px;
  display: initial;
}

td {
  padding: 0 !important;
}

.margin {
  margin: 5px;
}

.elevation-1 {
  margin: 10px;
  width: 50%;
}

.elevation-2 {
  margin: 10px;
}

table td + td {
  border-left: 1px solid #dddddd;
} */
</style>