<template>
  <v-app id="login">
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
            <v-card class="elevation-1 pa-3">
                <div class="layout column align-center">
                </div>
                <v-form>
                  <v-text-field
                    append-icon="person"
                    name="login"
                    label="account"
                    type="text"
                    v-model="model.username"
                  ></v-text-field>
                  <v-text-field
                    append-icon="lock"
                    name="password"
                    label="password"
                    id="password"
                    type="password"
                    v-model="model.password"
                  ></v-text-field>
                </v-form>
              <v-card-actions>
                <v-btn block color="primary" @click="login" :loading="loading">login</v-btn>
              </v-card-actions>
            </v-card>
        </v-layout>
      </v-container>
  </v-app>
</template>

<script>
import router from "@/api/router";
export default {
  layout: "default",
  data: () => ({
    loading: false,
    loginSuccess: false,
    model: {
      username: "",
      password: ""
    }
  }),
  computed: {
    authData: {
      get() {
        return this.$store.state.authData;
      },
      set(val) {
        // this.$store.commit("drawer", val);
      }
    }
  },

  methods: {
    login() {

      Promise.all([this.verification(this, router)]).then(val => {
        if (val) {
          if (!this.loginSuccess) {
            alert("account error");
          }
        }
      });
    },
    verification(e, router) {
      return new Promise(function(resolve, reject) {
        e.authData.forEach(auth => {
          if (
            auth.id === e.model.username &&
            auth.password === e.model.password
          ) {
            e.loading = true;
            e.loginSuccess=true
            e.$store.commit("auth", auth.routh);
            setTimeout(() => {
              e.$router.push(router[auth.routh]);
            }, 1000);
          }
        });
        resolve(true);
      });
    }
  }
};
</script>
<style scoped lang="css">
#login {
  width: 100%;
  position: absolute;
  background-color: #8f8f5c;
}
</style>
