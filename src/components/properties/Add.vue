<template>
  <div class="jumbotron">
    <div class="container">
      <div class="row">
        <div class="col-lg-4"></div>
        <div class="col-lg-4">
          <h1>Login Form</h1>
          <p v-if="authFailMsg" class="invalid-feedback">Invalid Userename or Password</p>
          <div v-if="success">Registration Successful</div>
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
                <div v-if="!$v.title.required || !$v.title.alphanumeric" class="invalid-feedback">
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
                <div v-if="!$v.city.required || !$v.city.alphanumeric" class="invalid-feedback">
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
                  v-if="!$v.imageUrl.required || !$v.imageUrl.alphanumeric"
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
                <div v-if="!$v.price.required || !$v.price.alphanumeric" class="invalid-feedback">
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
                  v-if="!$v.yearOfConstruction.required || !$v.yearOfConstruction.alphanumeric"
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
                v-bind:class="{ isValid: !$v.addressInput.$invalid && $v.addressInput.$dirty, isInvalid: $v.addressInput.$error}"
                class="form-control"
                type="number"
                name="addressInput"
                id="addressInput"
                v-model="addressInput"
                @blur="$v.addressInput.$touch"
                placeholder="Address"
              />
              <template v-if="$v.addressInput.$error">
                <div
                  v-if="!$v.addressInput.required || !$v.addressInput.alphanumeric"
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
                  v-if="!$v.descriptionInput.required || !$v.descriptionInput.alphanumeric"
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
                  v-if="!$v.sizeInput.required || !$v.sizeInput.alphanumeric"
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
                  v-if="!$v.roomsInput.required || !$v.roomsInput.alphanumeric"
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
                  v-if="!$v.floorInput.required || !$v.floorInput.alphanumeric"
                  class="invalid-feedback"
                >
                  Input must be least 3
                  characters log.
                </div>
              </template>
            </div>
            <div class="form-group">
              <button :disabled="$v.$invalid" class="btn btn-primary btn-block">Log In</button>
            </div>
            <p class="text-center">
              Do not have account?
              <router-link to="/register">Register</router-link>
            </p>
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

const alphanumeric = helpers.regex("alphanumeric", /^[a-zA-Z0-9]{3,}$/);
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
      price: 0,
      yearOfConstruction: "",
      addressInput: "",
      descriptionInput: "",
      sizeInput: 0,
      roomsInput: 0,
      floorInput: 0,
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
      alphanumeric
    },
    city: {
      required,
      alphanumeric
    },
    imageUrl: {
      required,
      alphanumeric
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
      requester.login(this.username, this.password);
      setTimeout(
        () => {
          if (store.loggedUserName) {
            this.$router.push({ path: "/" });
            this.success = true;
          } else {
            this.authFailMsg = true;
          }
        },

        2500
      );
    }
  }
};
</script>

<style>
</style>