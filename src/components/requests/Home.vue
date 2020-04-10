<template>
  <div class="jumbotron">
    <h1 v-if="hasRequests === false">THERE ARE NO REQUEST FOR YOUR PROPERTIES</h1>
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
        <app-request v-for="(request, _id) in requests" 
        :key="_id" 
        :_id="request._id"
        :title="request.title"
        :createdByUsername="request.createdByUsername"
        :createdByEmail="request.createdByEmail"
        :dateOfCreation="request.dateOfCreation"
        :listingOwener="request.listingOwener"
        :isDeleted="request.isDeleted"
        ></app-request>
      </tbody>
    </table>
  </div>
</template>

<script>
import requester from "@/plugins/requester.js";
import store from "@/store/store";
import AppRequest from "./Single.vue";

export default {
  data:  function(){
    return { hasRequests: Boolean}
  },
  components: {
    AppRequest
  },
  mounted() {
    if (store.allRequests.length === 0) {
      this.hasRequests = false;
    } else {
      this.hasRequests = true;
    }
  },
  beforeCreate() {
    if (!localStorage.getItem("requests")) {
      localStorage.setItem("requests", JSON.stringify(store.allRequests));
    } else {
      store.allRequests = JSON.parse(localStorage.getItem("requests"));
    }
    requester.GetAllProperties();
    requester.GetAllRequests();
  },
  computed: {
    requests: function() {
      if (store.allRequests.lenght === 0) {
        store.allRequests = null;
      }
      return store.allRequests;
    }
  }
};
</script>

<style scoped>
.jumbotron h1 {
  margin-top: 2em;
  text-align: center;
}
</style>