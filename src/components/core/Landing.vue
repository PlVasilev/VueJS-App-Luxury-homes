<template>
  <div class="jumbotron">
    <div class="site-block-wrap">
      <div
        class="site-blocks-cover"
        style="background-image: url(https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1700&q=80);background-repeat: no-repeat; background-position: center; "
        id="home-section"
      >
        <div class="container-landing col-md-12">
          <div class="row align-items-center justify-content-center">
            <div class="col-md-12 text-center">
              <h1 class="text-shadow">Buy &amp; Sell Property Here</h1>
            </div>
          </div>
        </div>
      </div>
      <section class="site-section" id="about-section">
        <div class="container">
          <div class="row large-gutters">
            <div class="col-lg-6 mb-5 picture-container">
              <img
                src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Image"
                class="img-fluid"
              />
            </div>
            <div class="col-lg-6 ml-auto">
              <h2 class="section-title mb-3">Luxury Homes</h2>
              <p class="lead">Your dream home awaits you here</p>
              <p>We are dedicated to give you a service that will blow your mind ! We dont offer you property we offer you home.</p>

              <ul class="list-unstyled ul-check success">
                <li>Over 1000 happy customers.</li>
                <li>Operating on 5 continets.</li>
                <li>In every major city</li>
                <li>We make internation dieals</li>
                <li>And so on and so on</li>
              </ul>
              <p v-if="!isAuth">
                <router-link to="/login" class="btn btn-primary mr-2 mb-2">Get Started</router-link>
              </p>
              <p v-else>
                <router-link to="/properties/all" class="btn btn-primary mr-2 mb-2">See the Properties</router-link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import store from "../../store.js";

export default {
  name: "AppLanding",
   props: {
    isAuth: Boolean,
  },
  data: function() {
    return {
      user: ""
    };
  },
  beforeCreate() {
    this.$emit(
      "onAuth",
      localStorage.getItem("kid_SyGwQQfwI.active_user") !== null
    );
  },
  created: function() {
    this.user =  localStorage.getItem("kid_SyGwQQfwI.active_user");
    store.isInLanding = true;
    store.user =  this.user
    //console.log("a is: " + store.user);
  },
  destroyed: function(){
     store.isInLanding = false;
  }
};
</script>

<style scoped>
.site-blocks-cover {
  min-height: 50vh;
  display: flex;
  align-items: center;
}

.site-blocks-cover h1 {
  color: rgb(255, 251, 251);
  font-size: 4rem;
  padding-bottom: 2rem;
  text-shadow: 0.2rem 0.2rem black;
}

@media (max-width: 768px) {
  .site-blocks-cover h1 {
    color: rgb(255, 251, 251);
    font-size: 2rem;
    padding-bottom: 1rem;
    text-shadow: 0.1rem 0.1rem black;
  }
}

.large-gutters {
  margin-top: 2rem;
  margin-bottom: 2rem;
  margin-right: -35px;
  margin-left: -35px;
}
.large-gutters > [class*="col-"] {
  padding-right: 35px;
  padding-left: 35px;
}

.picture-container {
  margin-bottom: 0 !important;
}
</style>