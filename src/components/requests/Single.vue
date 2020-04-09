<template>
  <tr>
    <td>{{ dateOfCreation }}</td>
    <td>{{ request.createdByUsername }}</td>
    <td>{{ request.title }}</td>
    <td>{{ request.createdByEmail }}</td>
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
    request: {
      type: Object,
      requered: true
    }
  },
  methods: {
    deleteHandler() {
      requester.editRequest(
        this.request._id,
        this.request.title,
        this.request.createdByUsername,
        this.request.createdByEmail,
        this.request.dateOfCreation,
        this.request.listingOwener,
        (this.request.isDeleted = true)
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
    dateOfCreation: function() {
      return moment(this.request.dateOfCreation).format("hh:mm DD/MM/YYYY");
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