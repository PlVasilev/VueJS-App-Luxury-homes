<template>
  <div>
    <form class="form-inline my-2 my-lg-0">
      <input type="text" placeholder="Search"   class="form-control mr-sm-2"/>
      <button class="btn btn-secondary my-2 my-sm-0">Search</button>
    </form>
    <!-- <div  class="invalid-feedback">You must have search input !</div> -->

    <div v-if="!properties" class="listing-sections" id="properties-section">
      <h1>LOADING...</h1>
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

  <!-- <form  #searchFrom="ngForm" (ngSubmit)="searchFormHandler(searchFrom.value)" class="form-inline my-2 my-lg-0">
   
    <input #searchInput="ngModel" ngModel name="search" class="form-control mr-sm-2" type="text" placeholder="Search"  
    [class.is-valid]="!searchInput.errors && searchInput.touched"
    [class.is-invalid]="searchInput.errors && searchInput.touched" 
    required>
    <button class="btn btn-secondary my-2 my-sm-0" >Search</button>
</form>
<div *ngIf="searchInput.errors && searchInput.touched" class="invalid-feedback">You must have search input !</div>
     
<div  *ngIf="!allListings" class="listing-sections" id="properties-section">
    <h1>LOADING...</h1>
</div>
<div *ngIf="allListings" class="listing-sections" id="properties-section">

<div class="container">
    <div class="search-text-error" *ngIf="!allListings">There are no objects with your search input !</div>
    <div class="row large-gutters" *ngIf="allListings">
      
        <div class="col-md-6 col-lg-4 mb-5 mb-lg-5 " *ngFor="let listing of allListings"> 
            <app-single [listing]="listing"></app-single>
        </div>
    </div>
</div>
  </div>-->
</template>

<script>
import AppSingle from "./Single.vue";
import store from "../../store";

export default {
  components: {
    AppSingle
  },
  beforeCreate() {
    store.allProperties = JSON.parse(localStorage.getItem('properties'));
  },
  computed: {
    properties: function() {
      return store.allProperties;
    }
  },
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