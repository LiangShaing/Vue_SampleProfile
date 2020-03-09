<template>
  <v-layout class="rowHeight">
    <div class="titleStyle" :class="titleBg"><v-icon v-if="icon!=''">{{icon}}</v-icon>{{title}}</div>
    <div class="contentStyle">
      <slot></slot>
    </div>
  </v-layout>
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
    icon: {
      type: String
    },
  },

  data() {
    return {};
  },
  computed: {}
};
</script>
<style scoped>
.titleStyle {
  width: 100px;
  /* padding: 0.875rem 1.375rem; */
  color: #495057;
  background-color: #e9ecef;
  border-radius: 2px;
  margin: 0px 5px 0px 5px;
  text-align: center;
  line-height: 50px;
}
.contentStyle {
  width: 70%;
  line-height: 50px;
}
.rowHeight {
  height: 50px;
  margin-top: 10px !important;
  margin-bottom: 10px !important;
}

.container.grid-list-lg .layout:only-child {
  margin: 0px !important;
}
</style>