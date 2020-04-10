<template>
  <tr>
    <td>{{ dateOfCreationComp }}</td>
    <td>{{ createdByUsername }}</td>
    <td>{{ title }}</td>
    <td>{{ createdByEmail }}</td>
    <td>
      <button @click="deleteHandler" class="btn btn-secondary">Remove</button>
    </td>
  </tr>
</template>

<script>
import store from "@/store/store";
import requester from "@/plugins/requester.js";
var moment = require("moment");

export default {
  props: {
       _id: {
         type: String,
         requred: true
       },
        title: {
         type: String,
         requred: true
       },
        createdByUsername: {
         type: String,
         requred: true
       },
        createdByEmail: {
         type: String,
         requred: true
       },
        dateOfCreation: {
         type: Number,
       },
        listingOwener: {
         type: String,
         requred: true
       },
       isDeleted: {
         type: Boolean,
       }
  
  },
  methods: {
    deleteHandler() {
      requester.editRequest(
        this._id,
        this.title,
        this.createdByUsername,
        this.createdByEmail,
        this.dateOfCreation,
        this.listingOwener,
        true
      );
      localStorage.removeItem("requests");
      requester.GetAllProperties();
      requester.GetAllRequests();
      if (store.user) {
        this.$router.push({ path: "/properties/all" });
        this.success = true;
      } else {
        this.authFailMsg = true;
      }
    }
  },
  computed: {
    dateOfCreationComp: function() {
      return moment(this.dateOfCreation).format("hh:mm DD/MM/YYYY");
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
</style>