<template>
  <v-navigation-drawer
    id="appDrawer"
    :mini-variant.sync="mini"
    fixed
    app
    v-model="drawer"
    width="260"
  >
    <!-- <v-toolbar color="#ffffff" dark flat>
      <img
        src="../../static/v.png"
        height="36"
        alt="Vue Material Admin Template"
        @click="toIndex"
        class="couser"
      />
    </v-toolbar> -->

    <v-list class="menuStyle">
      <template v-for="(item) in menus">
        <v-list-group v-if="item.items" :key="item.title" v-model="item.active" no-action >
          <template v-slot:activator>
            <v-list-item :to="item.href? item.href : null" class="gropStyle">
              <v-list-item-icon>
                <v-icon>{{item.icon}}</v-icon>
              </v-list-item-icon>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </template>

          <v-list-item
            v-for="subItem in item.items"
            :key="subItem.title"
            :to="subItem.href? subItem.href : null"
          >
            <v-list-item-content>
              <v-list-item-title v-text="subItem.title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>

        <v-list-item v-else :to="item.href ? item.href : null" :key="item.title">
          <v-list-item-icon>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{ $t('appDrawer')[item.title] }}</v-list-item-title>
        </v-list-item>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
import VuePerfectScrollbar from "vue-perfect-scrollbar";
import { postJson, getJson } from "@/api/request";
import router from "@/api/router";
//mock
import mockMenu from "@/api/main/menu";

export default {
  name: "app-drawer",
  components: {
    VuePerfectScrollbar,
    mockMenu,
  },
  data: () => ({
    mini: false,
    orginalMenu: [
      {
        programId: "CMPMF100000",
        programDesc: "權限功能",
        programType: "W",
        sorting: 3,
        iconid: "mdi-plus-circle",
        dirpath: "/project/index",
        parentid: "",
        children: [
          {
            programId: "CMPMF101020",
            programDesc: "使用者帳號維護",
            programType: "W",
            sorting: 1,
            iconid: "mdi-message-draw",
            dirpath: "/project/page1",
            parentid: "CMPMF100000",
            children: null
          }
        ]
      }
    ],
    scrollSettings: {
      maxScrollbarLength: 160
    }
  }),
  computed: {
    drawer: {
      get() {
        return this.$store.state.drawer;
      },
      set(val) {
        this.$store.commit("drawer", val);
      }
    },
    menus: function() {
      // return this.$store.state.auth === "admin1" ? mockMenu : mockMenu2;
      return this.$store.state.auth === "admin1index" ? mockMenu : mockMenu;
    }
  },
  methods: {
    queryRows(url) {
      getJson(url)
        .then(response => {
          // this.orginalMenu = response.data;
        })
        .catch(error => {
          console.log(error);
          this.errored = true;
        })
        .finally(() => (this.loading = false));
    },
    toIndex() {
      this.$router.push(router.index);
    },
    currentSelectedPgmid(value) {
      // this.$store.commit("currentSelectedPgmid", value);
    }
  },
  mounted() {}
};
</script>


<style lang="stylus">
#appDrawer {
  font-family: 'Microsoft JhengHei', sans-serif !important;
  overflow: hidden;
  margin-top:64px;

  .drawer-menu--scroll {
    height: calc(100vh - 48px);
    overflow: auto;
  }
}

.v-navigation-drawer__content::-webkit-scrollbar {
width: 12px;
background-color: #F5F5F5; }

.v-navigation-drawer__content::-webkit-scrollbar-thumb {
border-radius: 10px;
-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
background-color: #eee; }

.couser {
  cursor: pointer;
}

.gropStyle {
  padding: 0px !important;
}

.v-list-item .v-list-item__subtitle, .v-list-item .v-list-item__title {
    line-height: 2.2 !important; 
}

.v-list {
     padding: 0px 0 !important; 
}

</style>
