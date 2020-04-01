<template>
  <div id="app">
    <app-nav></app-nav>
    <app-landing></app-landing>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppLanding from "./components/Landing.vue";
import AppNav from "./components/core/Navigation.vue";
import AppFooter from "./components/core/Footer.vue";

export default {
  name: "App",
  components: {
    AppLanding,
    AppNav,
    AppFooter
  }
};

</script>

<style>
@import "./assets/styles.css";
</style>
