<template>
  <div>
    <footer class="font-small indigo">
      <div class="container">
        <div class="row text-center d-flex justify-content-center">
          <div class="col-md-2">
            <h6 class="text-uppercase font-weight-bold">
              <router-link to="/">Home</router-link>
            </h6>
          </div>
          <div v-if="isAuth" class="col-md-2">
            <h6 class="text-uppercase font-weight-bold">
              <router-link to="/properties/all">Properties</router-link>
            </h6>
          </div>

          <div v-if="isAuth" class="col-md-2">
            <h6 class="text-uppercase font-weight-bold">
              <router-link to="/properties/my">My Properties</router-link>
            </h6>
          </div>

          <div v-if="isAuth" class="col-md-2">
            <h6 class="text-uppercase font-weight-bold">
              <router-link to="/properties/add">Add Property</router-link>
            </h6>
          </div>

          <div v-if="isAuth" class="col-md-2">
            <h6 class="text-uppercase font-weight-bold">
              <router-link to="/login">Customer Requests</router-link>
            </h6>
          </div>
        </div>
      </div>

      <div class="footer-copyright text-center py-3">
        © 2020 Copyright:
        <a href="https://mdbootstrap.com/education/bootstrap/">MDBootstrap.com</a>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  props: {
    isAuth: Boolean
  }
};
</script>

<style scoped>
footer {
  padding-top: 1.2rem;
  padding-bottom: 0.7rem;
  background-color: #3a3f44;
}

.page-footer .row {
  padding: 0 !important;
  padding-top: 1rem !important;
  margin: 0 !important;
  background-color: white;
}
</style>