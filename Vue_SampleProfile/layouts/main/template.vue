<template>
  <div id="appRoot">
    <template>
      <v-app id="inspire" class="app">
        <app-drawer class="app--drawer" app></app-drawer>
        <app-toolbar class="app--toolbar appToolbarStyle" app :title="title"></app-toolbar>
        <v-content class="contentStyle">
          <!-- Page Header -->
          <page-header></page-header>
          <div class="page-wrapper">
            <nuxt />
          </div>
        </v-content>

        <v-navigation-drawer
          class="setting-drawer"
          temporary
          right
          v-model="rightDrawer"
          hide-overlay
          fixed
          app
        >
        </v-navigation-drawer>
      </v-app>
    </template>

    <v-snackbar :timeout="3000" bottom right :color="snackbar.color" v-model="snackbar.show">
      {{ snackbar.text }}
      <v-btn @click.native="snackbar.show = false" icon>
        <v-icon>close</v-icon>
      </v-btn>
    </v-snackbar>
  </div>
</template>

<script>
import AppDrawer from "@/components/main/AppDrawer";
import AppToolbar from "@/components/main/AppToolbar";
import PageHeader from "@/components/main/PageHeader";

export default {
  components: {
    AppDrawer,
    AppToolbar,
    PageHeader
  },
  data: vm => ({
    expanded: true,
    rightDrawer: false,
    snackbar: {
      show: false,
      text: "",
      color: ""
    },
    title:vm.$store.state.title
  }),

  methods: {}
};
</script>

<style lang="stylus" scoped>
body div {
   font-family: 'Microsoft JhengHei', sans-serif !important;
}
.setting-fab {
  top: 50% !important;
  right: 0;
  border-radius: 0;
}

.page-wrapper {
  min-height: calc(100vh - 64px - 50px - 81px);
  margin-bottom: 50px;
}

.app--footer {
  position: absolute;
  bottom: 0;
  width: 100%;
}

.appToolbarStyle{
  z-index :12 !important;
}

.contentStyle{
      margin-top: 64px;
}
</style>
