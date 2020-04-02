<template>
  <div class="jumbotron">
    <div class="container">
      <div class="row">
        <div class="col-lg-4"></div>
        <div class="col-lg-4">
          <h1>Login Form</h1>
          <div v-if="success">Registration Successful</div>
          <form v-else @submit.prevent="submitHandler">
            <div class="form-group input-group">
              <div class="input-group-prepend">
                <span class="input-group-text">
                  <i class="fa fa-user"></i>
                </span>
              </div>
              <input
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
              <input
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
import userStore from "../../user-store.js";

const alphanumeric = helpers.regex("alphanumeric", /^[a-zA-Z0-9]{3,}$/);
export default {
  mixins: [validationMixin],
  data() {
    return {
      username: "",
      password: "",
      success: false
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
    async submitHandler() {
      this.$v.$touch();
      if (this.$v.$error) {

        return;
      }
       userStore.login(
        this.username,
        this.password,
      );
     setTimeout( () => this.$router.push({ path: '/'}), 3000);
      this.success = true;
    }
  }
};
</script>

<style>

</style>