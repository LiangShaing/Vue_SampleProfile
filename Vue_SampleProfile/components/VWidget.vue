<template>
  <div id="v-widget">
    <v-card class="cardStyle">
      <v-toolbar color="transparent" flat dense v-if="enableHeader">
        <v-toolbar-title v-if="enableHideContent" @click="hideContent" class="widgetTitle">
          <h4>{{title}}</h4>
        </v-toolbar-title>
        <v-toolbar-title v-else>
          <h4>{{title}}</h4>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <slot name="widget-header-action"></slot>
      </v-toolbar>

      <v-divider v-if="enableHeader"></v-divider>

      <v-card-text :class="contentBg" v-show="showContent">
        <slot name="widget-content"></slot>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "v-widget",
  props: {
    title: {
      type: String
    },
    enableHeader: {
      type: Boolean,
      default: true
    },
    enableHideContent: {
      type: Boolean,
      default: false
    },
    contentBg: {
      type: String,
      default: "white"
    },
    defaultHideContent: {
      type: Boolean,
      default: false
    }
  },

  data: () => ({
    showContent: true
  }),
  methods: {
    hideContent() {
      this.showContent = !this.showContent;
    }
  },
  computed: {},
  mounted() {
    if (this.defaultHideContent) {
      this.showContent = false;
    }
  }
};
</script>
<style scoped>
#v-widget .cardStyle {
  margin: 5px;
}

#v-widget .widgetTitle {
    cursor: pointer;
}
</style>