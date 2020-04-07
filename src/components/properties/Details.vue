<template>
  <div>
    <div v-if="!selectedListing" class="site-section" id="property-details">
      <h1>LOADING...</h1>
    </div>
    <div v-if="selectedListing" class="site-section" id="property-details">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 pl-lg-5 ml-auto">
            <h3 class="text-black mb-4">{{selectedListing.title}}</h3>
          </div>

          <div class="col-lg-12">
            <div class="owl-carousel slide-one-item with-dots">
              <div>
                <img :src="selectedListing.imageUrl" alt="Image" class="img-fluid" />
              </div>
            </div>
          </div>
          <div class="col-lg-12 pl-lg-5 ml-auto">
            <div class="mb-5 property-details">
              <p>Price: $ {{selectedListing.price}}</p>
              <p>City: {{selectedListing.city}}</p>
              <p>Address: {{selectedListing.addressInput}}</p>
              <p>{{selectedListing.sizeInput}} square meters, {{selectedListing.roomsInput}} rooms, {{selectedListing.floorInput}} floor</p>
              <p>Year of Consruction: {{selectedListing.yearOfConstruction}}</p>
              <p>Posted on: {{postedOn}}</p>
              <p>Posted by: {{selectedListing.creator}}</p>
              <p>Description: {{selectedListing.descriptionInput}}</p>
              <a
                v-if="user && user.username != selectedListing.creator"
                class="btn btn-primary"
                @click="sendRequestHandler"
              >Send Reqest to view the property</a>
              <a
                v-if="user && user.username == selectedListing.creator"
                @click="editHandler"
                class="btn btn-primary"
              >Edit</a>
              <a
                v-if="user && user.username == selectedListing.creator"
                @click="deleteHandler"
                class="btn btn-primary"
              >Delete</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import requester from "../../requester.js";
import store from "../../store";
var moment = require("moment");

export default {
  data: function() {
    return {
      id: this.$route.params.id,
      dateOfCreation: Number,
      isDeleted: false
    };
  },
  computed: {
    selectedListing: function() {
      return store.selectedListing[0];
    },
    postedOn: function() {
      return moment(this.selectedListing.dateOfCreation).format(
        "hh:mm DD/MM/YYYY"
      );
    },
    user: function() {
      return store.user;
    }
  },
  methods: {
    sendRequestHandler() {
      this.dateOfCreation = Date.now();
      requester.addRequest(
        this.selectedListing.title,
        store.user.username,
        store.user.email,
        this.dateOfCreation,
        this.selectedListing.creator,
        this.isDeleted
      );
  
        requester.GetAllProperties();
        requester.GetAllRequests();
        if (store.user) {
          this.$router.push({ path: "/properties/all" });
          this.success = true;
        } else {
          this.authFailMsg = true;
        }
    
    },
    editHandler() {
      this.$router.push({
        name: "edit",
        params: { selectedListing: this.selectedListing }
      });
    },
    deleteHandler() {
      requester.editPropertie(
        this.selectedListing._id,
        this.selectedListing.title,
        this.selectedListing.city,
        this.selectedListing.imageUrl,
        this.selectedListing.price,
        this.selectedListing.yearOfConstruction,
        this.selectedListing.addressInput,
        this.selectedListing.descriptionInput,
        this.selectedListing.sizeInput,
        this.selectedListing.roomsInput,
        this.selectedListing.floorInput,
        this.selectedListing.creator,
        this.selectedListing.dateOfCreation,
        (this.isDeleted = true)
      );
      setTimeout(() => {
        requester.GetAllProperties();
        requester.GetAllRequests();
        if (store.user) {
          this.$router.push({ path: "/" });
          this.success = true;
        } else {
          this.authFailMsg = true;
        }
      }, 3000);
    }
  },
  beforeCreate() {
    store.selectedListing = JSON.parse(
      localStorage.getItem("properties")
    ).filter(x => x._id === this.$route.params.id);
    localStorage.setItem(
      "selectedPropertie",
      JSON.stringify(store.selectedListing)
    );
    requester.GetAllProperties();
  },
  destroyed() {
    store.selectedListing = null;
    localStorage.removeItem("selectedPropertie");
  }
};
</script>

<style scoped>
.property-details {
  padding-top: 2rem;
}

p {
  font-size: 1.2rem;
}

h3 {
  padding-top: 1rem;
  color: white;
}
img {
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.site-section {
  min-height: 81vh;
}

.site-section h1 {
  padding-top: 1em;
  text-align: center;
}
</style>