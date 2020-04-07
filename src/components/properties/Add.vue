<template>
  <div class="jumbotron">
    <div class="container">
      <div class="row">
        <div class="col-lg-4"></div>
        <div class="col-lg-4">
          <h1>Add Propertie</h1>
          <p v-if="authFailMsg" class="invalid-feedback">Server error please try again</p>
          <div v-if="success">Added Propertie</div>
          <form v-else @submit.prevent="submitHandler">
            <div class="form-group input-group">
              <div class="input-group-prepend">
                <span class="input-group-text">
                  <i class="fa fa-user"></i>
                </span>
              </div>
              <input
                v-bind:class="{ isValid: !$v.title.$invalid && $v.title.$dirty, isInvalid: $v.title.$error}"
                class="form-control"
                type="text"
                name="title"
                id="title"
                v-model="title"
                @blur="$v.title.$touch"
                placeholder="Title"
              />
              <template v-if="$v.title.$error">
                <div v-if="!$v.title.required || !$v.title.descriptionRegex" class="invalid-feedback">
                  Input must be least 3
                  characters log.
                </div>
              </template>
            </div>
            <div class="form-group input-group">
              <div class="input-group-prepend">
                <span class="input-group-text">
                  <i class="fa fa-user"></i>
                </span>
              </div>
              <input
                v-bind:class="{ isValid: !$v.city.$invalid && $v.city.$dirty, isInvalid: $v.city.$error}"
                class="form-control"
                type="text"
                name="city"
                id="city"
                v-model="city"
                @blur="$v.city.$touch"
                placeholder="City"
              />
              <template v-if="$v.city.$error">
                <div v-if="!$v.city.required || !$v.city.descriptionRegex" class="invalid-feedback">
                  Input must be least 3
                  characters log.
                </div>
              </template>
            </div>
            <div class="form-group input-group">
              <div class="input-group-prepend">
                <span class="input-group-text">
                  <i class="fa fa-user"></i>
                </span>
              </div>
              <input
                v-bind:class="{ isValid: !$v.imageUrl.$invalid && $v.imageUrl.$dirty, isInvalid: $v.imageUrl.$error}"
                class="form-control"
                type="text"
                name="imageUrl"
                id="imageUrl"
                v-model="imageUrl"
                @blur="$v.imageUrl.$touch"
                placeholder="Picture"
              />
              <template v-if="$v.imageUrl.$error">
                <div
                  v-if="!$v.imageUrl.required || !$v.imageUrl.descriptionRegex"
                  class="invalid-feedback"
                >
                  Input must be least 3
                  characters log.
                </div>
              </template>
            </div>
            <div class="form-group input-group">
              <div class="input-group-prepend">
                <span class="input-group-text">
                  <i class="fa fa-user"></i>
                </span>
              </div>
              <input
                v-bind:class="{ isValid: !$v.price.$invalid && $v.price.$dirty, isInvalid: $v.price.$error}"
                class="form-control"
                type="number"
                name="price"
                id="price"
                v-model="price"
                @blur="$v.price.$touch"
                placeholder="Price"
              />
              <template v-if="$v.price.$error">
                <div
                  v-if="!$v.price.required || !$v.price.priceRegex"
                  class="invalid-feedback"
                >Price MUST be positive integer number.</div>
              </template>
            </div>
            <div class="form-group input-group">
              <div class="input-group-prepend">
                <span class="input-group-text">
                  <i class="fa fa-user"></i>
                </span>
              </div>
              <input
                v-bind:class="{ isValid: !$v.yearOfConstruction.$invalid && $v.yearOfConstruction.$dirty, isInvalid: $v.yearOfConstruction.$error}"
                class="form-control"
                type="number"
                name="yearOfConstruction"
                id="yearOfConstruction"
                v-model="yearOfConstruction"
                @blur="$v.yearOfConstruction.$touch"
                placeholder="Year of Construction"
              />
              <template v-if="$v.yearOfConstruction.$error">
                <div
                  v-if="!$v.yearOfConstruction.required || !$v.yearOfConstruction.yearOfConstructionRegex"
                  class="invalid-feedback"
                >Year of creation MUST be between 1000 and 2999</div>
              </template>
            </div>
            <div class="form-group input-group">
              <div class="input-group-prepend">
                <span class="input-group-text">
                  <i class="fa fa-user"></i>
                </span>
              </div>
              <input
                v-bind:class="{ isValid: !$v.addressInput.$invalid && $v.addressInput.$dirty, isInvalid: $v.addressInput.$error}"
                class="form-control"
                type="text"
                name="addressInput"
                id="addressInput"
                v-model="addressInput"
                @blur="$v.addressInput.$touch"
                placeholder="Address"
              />
              <template v-if="$v.addressInput.$error">
                <div
                  v-if="!$v.addressInput.required || !$v.addressInput.descriptionRegex"
                  class="invalid-feedback"
                >
                  Input must be least 3
                  characters log.
                </div>
              </template>
            </div>
            <div class="form-group input-group">
              <div class="input-group-prepend">
                <span class="input-group-text">
                  <i class="fa fa-user"></i>
                </span>
              </div>
              <textarea
                v-bind:class="{ isValid: !$v.descriptionInput.$invalid && $v.descriptionInput.$dirty, isInvalid: $v.descriptionInput.$error}"
                class="form-control"
                type="number"
                name="descriptionInput"
                id="descriptionInput"
                v-model="descriptionInput"
                @blur="$v.descriptionInput.$touch"
                placeholder="Description"
              ></textarea>
              <template v-if="$v.descriptionInput.$error">
                <div
                  v-if="!$v.descriptionInput.required || !$v.descriptionInput.descriptionRegex"
                  class="invalid-feedback"
                >
                  Input must be least 3
                  characters log.
                </div>
              </template>
            </div>
            <div class="form-group input-group">
              <div class="input-group-prepend">
                <span class="input-group-text">
                  <i class="fa fa-user"></i>
                </span>
              </div>
              <input
                v-bind:class="{ isValid: !$v.sizeInput.$invalid && $v.sizeInput.$dirty, isInvalid: $v.sizeInput.$error}"
                class="form-control"
                type="number"
                name="sizeInput"
                id="sizeInput"
                v-model="sizeInput"
                @blur="$v.sizeInput.$touch"
                placeholder="Size"
              />
              <template v-if="$v.sizeInput.$error">
                <div
                  v-if="!$v.sizeInput.required || !$v.sizeInput.price"
                  class="invalid-feedback"
                >Price MUST be positive integer number.</div>
              </template>
            </div>
            <div class="form-group input-group">
              <div class="input-group-prepend">
                <span class="input-group-text">
                  <i class="fa fa-user"></i>
                </span>
              </div>
              <input
                v-bind:class="{ isValid: !$v.roomsInput.$invalid && $v.roomsInput.$dirty, isInvalid: $v.roomsInput.$error}"
                class="form-control"
                type="number"
                name="roomsInput"
                id="roomsInput"
                v-model="roomsInput"
                @blur="$v.roomsInput.$touch"
                placeholder="Rooms"
              />
              <template v-if="$v.roomsInput.$error">
                <div
                  v-if="!$v.roomsInput.required || !$v.roomsInput.price"
                  class="invalid-feedback"
                >Price MUST be positive integer number.</div>
              </template>
            </div>
            <div class="form-group input-group">
              <div class="input-group-prepend">
                <span class="input-group-text">
                  <i class="fa fa-user"></i>
                </span>
              </div>
              <input
                v-bind:class="{ isValid: !$v.floorInput.$invalid && $v.floorInput.$dirty, isInvalid: $v.floorInput.$error}"
                class="form-control"
                type="number"
                name="floorInput"
                id="floorInput"
                v-model="floorInput"
                @blur="$v.floorInput.$touch"
                placeholder="Floor"
              />
              <template v-if="$v.floorInput.$error">
                <div
                  v-if="!$v.floorInput.required || !$v.floorInput.priceRegex"
                  class="invalid-feedback"
                >Price MUST be positive integer number.</div>
              </template>
            </div>
            <div class="form-group">
              <button :disabled="$v.$invalid" class="btn btn-primary btn-block">Add Propertie</button>
            </div>
          </form>
        </div>
        <div class="col-lg-4"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required } from "vuelidate/lib/validators";
import { helpers } from "vuelidate/lib/validators";
import requester from "../../requester.js";
import store from "../../store";

//var moment = require('moment');

//const alphanumeric = helpers.regex("alphanumeric", /^[a-zA-Z0-9]{3,}$/);
const priceRegex = helpers.regex("priceRegex", /^[1-9]\d*$/);
const descriptionRegex = helpers.regex("priceRegex", /^[\w\s,.`':;()&]{3,}$/);
const yearOfConstructionRegex = helpers.regex(
  "yearOfConstructionRegex",
  /^[1|2][0-9]{3}/
);

export default {
  mixins: [validationMixin],
  data() {
    return {
      title: "",
      city: "",
      imageUrl: "",
      price: "",
      yearOfConstruction: "",
      addressInput: "",
      descriptionInput: "",
      sizeInput: "",
      roomsInput: "",
      floorInput: "",
      creator: "",
      dateOfCreation: "",
      isDeleted: false,
      success: false,
      authFailMsg: false
    };
  },
  validations: {
    title: {
      required,
      descriptionRegex
    },
    city: {
      required,
      descriptionRegex
    },
    imageUrl: {
      required
    },
    price: {
      required,
      priceRegex
    },
    yearOfConstruction: {
      required,
      yearOfConstructionRegex
    },
    addressInput: {
      required,
      descriptionRegex
    },
    descriptionInput: {
      required,
      descriptionRegex
    },
    sizeInput: {
      required,
      priceRegex
    },
    roomsInput: {
      required,
      priceRegex
    },
    floorInput: {
      required,
      priceRegex
    }
  },
  methods: {
    submitHandler() {
      this.$v.$touch();
      if (this.$v.$error) {
        return;
      }
      this.dateOfCreation = Date.now(); // moment().format(Date.now());
      //console.log(moment(new Date()).format("DD/MM/YYYY"))
      requester.addPropertie(
        this.title,
        this.city,
        this.imageUrl,
        this.price,
        this.yearOfConstruction,
        this.addressInput,
        this.descriptionInput,
        this.sizeInput,
        this.roomsInput,
        this.floorInput,
        (this.creator = store.user.username),
        this.dateOfCreation,
        this.isDeleted
      );
      setTimeout(       
        () => {
          requester.GetAllProperties();
           requester.GetAllRequests();
          if (store.user) {
            this.$router.push({ path: "/properties/all" });
            this.success = true;
          } else {
            this.authFailMsg = true;
          }
        },
        3000
       );
    }
  }
};
</script>

<style>
</style>