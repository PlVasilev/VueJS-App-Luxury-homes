<template>
  <div id="app">
    <app-nav @onAuth="isAuth = $event" :isAuth="isAuth"></app-nav>
    <router-view @onAuth="isAuth = $event" :isAuth="isAuth"></router-view>
    <app-footer @onAuth="isAuth = $event" :isAuth="isAuth"></app-footer>
  </div>
</template>

<script>
//import AppLanding from "./components/core/Landing.vue";
import AppNav from "./components/shared/Navigation.vue";
import AppFooter from "./components/shared/Footer.vue";

export default {
  name: "App",
  data: function() {
    return {
      isAuth: localStorage.getItem('kid_SyGwQQfwI.active_user') !== null
    }
  },
  components: {
    AppNav,
    AppFooter
  }
};

</script>

<style>
@import "./assets/styles.css";
</style>
