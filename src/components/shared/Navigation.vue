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
            <router-link v-if="isAuth" to="/properties/all" class="nav-link">Properties</router-link>
          </li>
          <li class="nav-item">
            <router-link v-if="isAuth" to="/properties/my" class="nav-link">My Properties</router-link>
          </li>
          <li class="nav-item">
            <router-link v-if="isAuth" to="/properties/add" class="nav-link">Add Property</router-link>
          </li>
        </ul>
        <router-link v-if="!isAuth" to="/login" class="nav-link">Login</router-link>
        <router-link v-if="!isAuth" to="/register" class="nav-link">Register</router-link>
        <router-link v-if="isAuth" to="/requests" class="nav-link">Customer Requests</router-link>
        <a v-if="isAuth" class="nav-link" @click="logout">Logout</a>
      </div>
    </nav>
  </div>
</template>

<script>
import requester from "../../requester.js";
import store from "../../store.js";

export default {
  props: {
    isAuth: Boolean,
    userProp: String
  },
  methods: {
    logout() {
      requester.logout();
      localStorage.removeItem("kid_SyGwQQfwI.active_user");
      localStorage.removeItem("properties");
      localStorage.removeItem("myProperties");
      localStorage.removeItem("requests");
      localStorage.removeItem("selectedPropertie");
      store.user = null;
      store.allProperties = null;
      store.loggedUserName = null;
      store.myProperties = null;
      store.allRequests = null;
      store.selectedListing = null;
      if (!store.isInLanding) {
        this.$router.push({ path: "/" });
      }
      this.$emit("onAuth", false);
    }
  },
  beforeCreate() {
    this.$emit(
      "onAuth",
      localStorage.getItem("kid_SyGwQQfwI.active_user") !== null
    );
    store.user = JSON.parse(localStorage.getItem("kid_SyGwQQfwI.active_user"));
  }
};
</script>

<style scoped>
a {
  cursor: pointer;
}

.navbar {
  display: flex;
  justify-content: space-between;
}
</style>