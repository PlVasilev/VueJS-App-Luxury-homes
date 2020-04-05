<template>
  <div class="jumbotron">
    <div class="container">
      <div class="row">
        <div class="col-lg-4"></div>
        <div class="col-lg-4">
          <h1>Registration Form</h1>
           <p v-if="authFailMsg" class="invalid-feedback">
            Username already exists
          </p>
          <div v-if="success">Registration Successful</div>
          <form v-else @submit.prevent="submitHandler">
            <div class="form-group input-group">
              <div class="input-group-prepend">
                <span class="input-group-text">
                  <i class="fa fa-user"></i>
                </span>
              </div>
              <input v-bind:class="{ isValid: !$v.username.$invalid && $v.username.$dirty, isInvalid: $v.username.$error}"
                class="form-control"
                type="text"
                name="username"
                id="username"
                v-model="username"
                @blur="$v.username.$touch"
                placeholder="Username"
              />
              <template v-if="$v.username.$error">
                <div
                  v-if="!$v.username.required || !$v.username.alphanumeric"
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
              <input v-bind:class="{ isValid: !$v.firstname.$invalid && $v.firstname.$dirty, isInvalid: $v.firstname.$error}"
                class="form-control"
                type="text"
                name="firstname"
                id="firstname"
                v-model="firstname"
                @blur="$v.firstname.$touch"
                placeholder="First Name"
              />
              <template v-if="$v.firstname.$error">
                <div
                  v-if="!$v.firstname.required || !$v.firstname.alphanumeric"
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
              <input v-bind:class="{ isValid: !$v.lastname.$invalid && $v.lastname.$dirty, isInvalid: $v.lastname.$error}"
                class="form-control"
                type="text"
                name="lastname"
                id="lastname"
                v-model="lastname"
                @blur="$v.lastname.$touch"
                placeholder="Last Name"
              />
              <template v-if="$v.lastname.$error">
                <div
                  v-if="!$v.lastname.required || !$v.lastname.alphanumeric"
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
                  <i class="fa fa-envelope"></i>
                </span>
              </div>
              <input v-bind:class="{ isValid: !$v.email.$invalid && $v.email.$dirty, isInvalid: $v.email.$error}"
                class="form-control"
                type="email"
                name="email"
                id="email"
                placeholder="marg@gmial.com"
                v-model="email"
                @blur="$v.email.$touch"
              />
              <template v-if="$v.email.$error">
                <div
                  v-if="!$v.email.required || !$v.email.email"
                  class="invalid-feedback"
                >You must enter valid Email</div>
              </template>
            </div>

            <div class="form-group input-group">
              <div class="input-group-prepend">
                <span class="input-group-text">
                  <i class="fa fa-phone"></i>
                </span>
              </div>
              <input
                class="form-control"
                type="text"
                name="phonenumber"
                id="phonenumber"
                v-model="phonenumber"
                placeholder="Phone Number"
              />
            </div>

            <div class="form-group input-group">
              <div class="input-group-prepend">
                <span class="input-group-text">
                  <i class="fa fa-lock"></i>
                </span>
              </div>
              <input v-bind:class="{ isValid: !$v.password.$invalid && $v.password.$dirty, isInvalid: $v.password.$error}"
                class="form-control"
                type="password"
                name="password"
                id="password"
                placeholder="******"
                v-model="password"
                @blur="$v.password.$touch"
              />
              <template v-if="$v.password.$error">
                <div
                  v-if="!$v.password.required || !$v.password.alphanumeric"
                  class="invalid-feedback"
                >
                  Input must be least 3
                  characters log.
                </div>
              </template>
            </div>
            <p v-if="!$v.rePassword.sameAs" class="invalid-feedback">Password dont match</p>
            <div class="form-group input-group">
              <div class="input-group-prepend">
                <span class="input-group-text">
                  <i class="fa fa-lock"></i>
                </span>
              </div>
              <input v-bind:class="{ isValid: !$v.rePassword.$invalid && $v.rePassword.$dirty, isInvalid: $v.rePassword.$error}"
                class="form-control"
                type="password"
                name="re-password"
                id="re-password"
                placeholder="******"
                v-model="rePassword"
                @blur="$v.rePassword.$touch"
              />
              <template v-if="$v.rePassword.$error">
                <div
                  v-if="!$v.rePassword.required || !$v.rePassword.alphanumeric"
                  class="invalid-feedback"
                >
                  Input must be
                  least 3 characters log.
                </div>
              </template>
            </div>
            <div class="form-group">
              <button :disabled="$v.$invalid" class="btn btn-primary btn-block">Create Account</button>
            </div>
            <p class="text-center">
              Have an account?
              <router-link to="/login">Log In</router-link>
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
import { required, email, sameAs } from "vuelidate/lib/validators";
import { helpers } from "vuelidate/lib/validators";
import requester from "../../requester.js";
import store from "../../store";

const alphanumeric = helpers.regex("alphanumeric", /^[a-zA-Z0-9]{3,}$/);

export default {
  mixins: [validationMixin],
  data() {
    return {
      username: "",
      firstname: "",
      lastname: "",
      email: "",
      phonenumber: "",
      password: "",
      rePassword: "",
      success: false,
      authFailMsg: false
    };
  },
  validations: {
    username: {
      required,
      alphanumeric
    },
    firstname: {
      required,
      alphanumeric
    },
    lastname: {
      required,
      alphanumeric
    },
    email: {
      required,
      email
    },
    password: {
      required,
      alphanumeric
    },
    rePassword: {
      required,
      alphanumeric,
      sameAs: sameAs("password")
    }
  },
  methods: {
    submitHandler() {
      this.$v.$touch();
      if (this.$v.$error) {
        console.log("ERROR");
        return;
      }
     
      requester.register(
        this.username,
        this.password,
        this.firstname,
        this.lastname,
        this.email,
        this.phonenumber
      );
      
      //setTimeout( () => this.$router.push({ path: '/'}), 2500);
      setTimeout(
        () => {
          console.log(store.loggedUserName)
          requester.GetAllProperties();
          if (store.loggedUserName) {
            this.$router.push({ path: "/" });
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