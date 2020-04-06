<template>
  <div>
    <form @submit.prevent="submitHandler" class="form-inline my-2 my-lg-0">
      <input
        v-bind:class="{ isValid: !$v.search.$invalid && $v.search.$dirty, isInvalid: $v.search.$error}"
        class="form-control mr-sm-2"
        type="text"
        name="search"
        id="search"
        v-model="search"
        @blur="$v.search.$touch"
        placeholder="Search"
      />
      <button class="btn btn-secondary my-2 my-sm-0">Search</button>
    </form>
    <template v-if="$v.search.$error">
      <div v-if="!$v.search.required" class="invalid-feedback">You must enter input in search field</div>
    </template>
    <div v-if="!properties" class="listing-sections" id="properties-section">
      <h1>THERE ARE NO PROPERTIES YET</h1>
    </div>
    <div v-else class="listing-sections" id="properties-section">
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
import { validationMixin } from "vuelidate";
import { required } from "vuelidate/lib/validators";
import requester from "../../requester.js";
import AppSingle from "./Single.vue";
import store from "../../store";

export default {
  mixins: [validationMixin],
  data() {
    return {
      search: ""
    };
  },
  validations: {
    search: {
      required
    }
  },
  components: {
    AppSingle
  },
  beforeCreate() {
    store.allProperties = JSON.parse(localStorage.getItem("properties"));
    requester.GetAllProperties();
  },
  methods: {
    submitHandler() {
      this.$v.$touch();
      if (this.$v.$error) {
        return;
      }
      requester.GetAllProperties();
      store.searchedProperties = store.allProperties.filter(
        x =>
          x.title.toLowerCase().includes(this.search.toLowerCase()) ||
          x.city.toLowerCase().includes(this.search.toLowerCase())
      );
      this.$router.push({ name: "search", params: { search: this.search } });
    }
  },
  computed: {
    properties: function() {
      return store.allProperties;
    }
  }
};
</script>

<style scoped>
.listing-sections {
  margin: 1em;
  min-height: 73vh;
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