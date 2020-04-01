<template>
  <div id="app">
    <app-nav></app-nav>
    <app-landing></app-landing>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppLanding from "./components/core/Landing.vue";
import AppNav from "./components/shared/Navigation.vue";
import AppFooter from "./components/shared/Footer.vue";
import NotFound from "./components/core/NotFound.vue";

export default {
  name: "App",
  components: {
    AppLanding,
    AppNav,
    AppFooter,
    NotFound
  }
};

</script>

<style>
@import "./assets/styles.css";
</style>
