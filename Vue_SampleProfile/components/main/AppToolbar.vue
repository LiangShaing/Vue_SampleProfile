<template>
  <v-app-bar color="#ffffff" fixed dark class="toolbarStyle" id="appBar">
    <v-toolbar-title class="ml-0 pl-3 d-flex">
      <v-icon v-if="drawer" color="black" @click.stop="toggleDrawer()" class="sortMargin">sort</v-icon>
      <v-icon v-else color="black" @click.stop="toggleDrawer()" class="sortMargin">mdi-chevron-right</v-icon>
      <img
        src="../../static/v.png"
        height="36"
        alt="Vue Material Admin Template"
        @click="toIndex"
        class="couser"
      />
      <div class="titleStyle">{{title}}</div>
    </v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn v-if="$i18n.locale === 'zh'" :to="`/en` + $route.fullPath" icon>
      <div class="i18nStyle">
        <v-icon color="black">translate</v-icon>
        {{ $t('links.english')}}
      </div>
    </v-btn>
    <v-btn v-else :to="$route.fullPath.replace(/^\/[^\/]+/, '')" icon>
      <div class="i18nStyle">
        <v-icon color="black">translate</v-icon>
        {{ $t('links.chinese')}}
      </div>
    </v-btn>

    <v-menu
      offset-y
      origin="center center"
      :nudge-right="140"
      :nudge-bottom="10"
      transition="scale-transition"
    >
      <template v-slot:activator="{ on }">
        <v-btn icon large v-on="on">
          <v-avatar size="30px">
            <img src="../../static/avatar/man_4.jpg" alt="Michael Wang" />
          </v-avatar>
        </v-btn>
      </template>
      <v-list class="pa-0">
        <v-list-item
          v-for="(item,index) in items"
          :to="!item.href ? { name: item.name } : null"
          :href="item.href"
          @click="item.click"
          ripple="ripple"
          :disabled="item.disabled"
          :target="item.target"
          rel="noopener"
          :key="index"
        >
          <v-list-item-action v-if="item.icon">
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>
<script>
import Util from "@/util";
import router from "@/api/router";

export default {
  name: "app-toolbar",
  props: {
    title: {
      type:String,
      default:''
    }
  },
  components: {
    // NotificationList
  },
  data: () => ({
    flat: true,
    items: [
      {
        icon: "account_circle",
        href: "#",
        title: "Profile",
        click: e => {
          console.log(e);
        }
      },
      {
        icon: "settings",
        href: "#",
        title: "Settings",
        click: e => {
          console.log(e);
        }
      },
      {
        icon: "fullscreen_exit",
        href: "#",
        title: "Logout",
        click: e => {
          this.$router.push("/logout");
        }
      }
    ]
  }),
  computed: {
    toolbarColor() {
      return this.$vuetify.options.extra.mainNav;
    },
    drawer: {
      get() {
        return this.$store.state.drawer;
      },
      set(val) {
        this.$store.commit("drawer", val);
      }
    }
  },
  methods: {
    toggleDrawer() {
      this.$store.commit("toggleDrawer");
    },
    handleFullScreen() {
      Util.toggleFullScreen();
    },
    toIndex() {
      this.$router.push(router.index);
    }
  }
};
</script>

<style scoped>
#appBar {
  font-family: "Microsoft JhengHei", sans-serif !important;
}
/* .toolbarStyle {
  border-bottom: 1px solid #e3e3e3 !important;
} */
.sortMargin {
  margin-right: 50px;
}
.titleStyle {
  margin: 0px 10px 0px 10px;
  color: black;
}

.i18nStyle {
  color: black;
}
</style>
