<template>
  <div class="jumbotron">
    <div class="container">
      <div class="row">
        <div class="col-lg-4"></div>
        <div class="col-lg-4">
          <h1>Login Form</h1>
          <p v-if="authFailMsg" class="invalid-feedback">
            Invalid Userename or Password
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
export default {
  mixins: [validationMixin],
  data() {
    return {
      username: "",
      password: "",
      success: false,
      authFailMsg: false
    };
  },
  validations: {
    username: {
      required,
      alphanumeric
    },
    password: {
      required,
      alphanumeric
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
