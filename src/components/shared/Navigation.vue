<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <router-link to="/" class="navbar-brand">Luxury Homes</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarColor01"
        aria-controls="navbarColor01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarColor01">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a class="nav-link">
              Properties
              <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item">
             <router-link to="/login" class="nav-link">Add Property</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link">Contact Us</a>
          </li>
        </ul>
        <router-link v-if="!isAuth" to="/login" class="nav-link">Login{{isAuth}}</router-link>
        <router-link v-if="!isAuth" to="/register" class="nav-link">Register</router-link>
        <a class="nav-link">Customer Requests</a>
        <a class="nav-link">Users messages</a>
        <a v-if="isAuth"  class="nav-link" @click="logout">Logout</a>
      </div>
    </nav>
  </div>
</template>

<script>
import userStore from "../../user-store.js";

export default {
  props: {
    isAuth: Boolean
  },
  methods:{
    logout(){
      userStore.logout();
      localStorage.removeItem('kid_SyGwQQfwI.active_user')
      this.$emit('onAuth', false)
    }
  },



};
</script>

<style scoped>
a{
  cursor: pointer;
}

.navbar {
  display: flex;
  justify-content: space-between;
}
</style>