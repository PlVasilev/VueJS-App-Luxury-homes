<template>
  <div class="jumbotron">
    <h1 v-if="!requests">THERE ARE NO REQUEST FOR YOUR PROPERTIES</h1>
    <table v-else class="table table-striped">
      <thead>
        <tr>
          <th style="width: 22.00%">Send On</th>
          <th style="width: 10.00%">Send By</th>
          <th style="width: 45.00%">Propery Tittle</th>
          <th style="width: 15.00%">Sender E-mail</th>
          <th style="width: 8.00%">Remove</th>
        </tr>
      </thead>
      <tbody>
          <app-request v-for="(request, _id) in requests" :key="_id" :request="request"></app-request>
       
      </tbody>
    </table>
  </div>
</template>

<script>
import requester from "../../requester.js";
import store from "../../store";
import AppRequest from "./Single.vue";

export default {
  components: {
    AppRequest
  },
  beforeCreate() {
    store.GetAllRequests = JSON.parse(localStorage.getItem("requests"));
    requester.GetAllProperties();
    requester.GetAllRequests();
  },
  computed: {
    requests: function() {
      return store.allRequests;
    }
  }
};
</script>

<style scoped>
.table td {
  padding: 0 1em;
  vertical-align: middle;
}

.btn-secondary {
  padding: 0.2em 0.4em;
}

.jumbotron h1 {
  margin-top: 2em;
  text-align: center;
}
</style>