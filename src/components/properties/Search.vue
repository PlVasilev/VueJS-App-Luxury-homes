<template>
  <div>
    <div v-if="hasSearchedProperties === false" class="listing-sections" id="properties-section">
      <h1>THERE ARE NO PROPERTIES MACHING YOUR SERACH</h1>
    </div>

    <div v-else class="listing-sections" id="properties-section">
      <h2>Searched by: {{search}}</h2>
      <div class="container">
        <div class="row large-gutters">
          <app-single
            v-for="(listing, _id) in properties"
            :key="_id"
            class="col-md-6 col-lg-4 mb-5 mb-lg-5"
          >
            <div slot="listing" class="ftco-media-1">
              <div class="ftco-media-1-inner">
                <a @click="detailsIdHandler(listing._id)" class="d-inline-block mb-4">
                  <img :src="listing.imageUrl" alt="FImageo" class="img-fluid" />
                </a>
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
import store from "@/store/store";
import AppSingle from "./Single.vue";

export default {
  components: {
    AppSingle
  },
  data: function() {
    return {
      search: this.$route.params.search,
      hasSearchedProperties: Boolean
    };
  },

  computed: {
    properties: function() {
      return store.searchedProperties;
    }
  },
  mounted() {
    if (store.searchedProperties.length === 0) {
      this.hasSearchedProperties = false;
    } else {
      this.hasSearchedProperties = true;
    }
  },
  destroyed() {
    store.searchedProperties = null;
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