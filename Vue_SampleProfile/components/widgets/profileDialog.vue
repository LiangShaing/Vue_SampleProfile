<template>
  <div id="profileDialog">
    <v-dialog v-model="dialog" :max-width="profileWidth">
      <template v-slot:activator="{ on }">
        <div v-on="on">
          <slot name="open-dialog"></slot>
        </div>
      </template>

      <v-card>
        <v-card-title v-if="enableTitle" class="titleStyle">
          <span class="headline">{{title}}</span>
        </v-card-title>

        <v-container>
          <slot name="dialog-content"></slot>
        </v-container>

        <v-card-actions>
          <div class="actionStyle" @click="dialog = false">
            <slot name="dialog-close"></slot>
          </div>
          <div class="actionStyle" @click="dialog = false">
            <slot name="dialog-save"></slot>
          </div>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String
    },
    profileWidth: {
      type: String,
      default: "1000px"
    },
    enableTitle: {
      type: Boolean,
      default: true
    }
  },
  data: () => ({
    dialog: false
  }),
  computed: {}
};
</script>
<style scoped>
#profileDialog {
  font-family: "Microsoft JhengHei", sans-serif !important;
  font-weight: initial;
  line-height: normal;
  -webkit-font-smoothing: antialiased;
}
.titleStyle{
  border-bottom: 1px solid #e3e3e3 !important;
}
.cardStyle {
  margin: 5px;
}
.actionStyle{
  margin: 5px
}

.v-dialog__container {
    display: initial !important;
    vertical-align: middle;
}
</style>