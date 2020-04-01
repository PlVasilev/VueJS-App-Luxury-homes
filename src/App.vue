<template>
  <div id="app">
      <app-landing></app-landing>
  </div>
</template>

<script>
import AppLanding from './components/Landing.vue'

export default {
  name: 'App',
  components: {
    AppLanding
  }
}
</script>

<style>
   @import './assets/styles.css';
</style>
