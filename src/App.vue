<template>
  <div id="app">
    <app-nav></app-nav>
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>
//import AppLanding from "./components/core/Landing.vue";
import AppNav from "./components/shared/Navigation.vue";
import AppFooter from "./components/shared/Footer.vue";
//import NotFound from "./components/core/NotFound.vue";

export default {
  name: "App",
  components: {
    AppNav,
    AppFooter, 
  }
};

</script>

<style>
@import "./assets/styles.css";
</style>
