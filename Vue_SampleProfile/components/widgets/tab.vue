<template>
  <div id="tab">
    <v-toolbar tabs flat>
      <template>
        <v-tabs v-model="tab">
          <v-tab v-for="item in tabItems" :key="item.id">{{ item.name }}</v-tab>
        </v-tabs>
      </template>
    </v-toolbar>

    <v-tabs-items v-model="tab">
      <v-tab-item v-for="(item, index) in tabItems" :key="index">
        <v-card flat class="cardStyle">
          <slot :name="'tab-'+index"></slot>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String
    },
    defaultTabNumber: {
      type: Number,
      default: 0
    },
    tabColor: {
      type: String,
      default: "#f3f3f3"
    },
    sliderColor: {
      type: String,
      default: "blue"
    },
    tabItems: {
      type: Array,
      default: null
    }
  },

  data: vm => ({
    tab: vm.defaultTabNumber
  }),
  computed: {}
};
</script>
<style scoped>
.cardStyle {
  padding: 5px;
}
</style>