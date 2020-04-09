<template>
  <div>
    <div v-if="hasMyProperties === false" class="listing-sections" id="properties-section">
      <h1>YOU HAVE NO PROPERTIES</h1>
    </div>

    <div v-else class="listing-sections" id="properties-section">
      <h2>My Properties</h2>
      <div class="container">
        <div class="row large-gutters">
          <app-single
            v-for="(listing, _id) in properties"
            :key="_id"
            class="col-md-6 col-lg-4 mb-5 mb-lg-5"
          >
            <div slot="listing" class="ftco-media-1">
              <div class="ftco-media-1-inner">
                <router-link :to="listing | listingEditLink" class="d-inline-block mb-4">
                  <img :src="listing.imageUrl" alt="FImageo" class="img-fluid" />
                </router-link>
                <div class="ftco-media-details">
                  <h3>{{listing.city}}</h3>
                  <p class="single-title">{{listing.title}}</p>
                  <strong>${{listing.price}}</strong>
                </div>
              </div>
            </div>
          </app-single>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from "../../store";
import requester from "../../requester.js";
import AppSingle from "./Single.vue";

export default {
  components: {
    AppSingle
  },
  filters: {
    listingEditLink(listing) {
      return `/properties/details/${listing._id}`;
    }
  },
  data: function() {
    return { search: this.$route.params.search ,hasMyProperties: Boolean};
  },
  computed: {
    properties: function() {
      return store.myProperties;
    }
  },
  beforeCreate() {
    if (!localStorage.getItem("myProperties")) {
      store.myProperties = store.allProperties.filter(
        x => x.creator === store.user.username
      );
      localStorage.setItem("myProperties", JSON.stringify(store.myProperties));
    } else {
      store.myProperties = JSON.parse(localStorage.getItem("myProperties"));
    }
    requester.GetAllProperties();
  },
  mounted() {
    if (store.myProperties.length === 0) {
      this.hasMyProperties = false;
    } else {
      this.hasMyProperties = true;
    }
  },
  destroyed() {
    localStorage.removeItem("myProperties");
    store.myProperties = null;
  }
};
</script>

<style scoped>
h2 {
  text-align: center;
  padding-bottom: 0.2em;
}

.listing-sections {
  margin: 1em;
  min-height: 79.5vh;
}

p {
  text-align: center;
}
.single-title {
  text-align: start;
}

div.invalid-feedback,
div.search-text-error {
  display: flex;
  justify-content: center;
}

.listing-sections h1 {
  padding-top: 1em;
  text-align: center;
}
</style>