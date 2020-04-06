<template>
  <tr>
    <td>{{ request.dateOfCreation }}</td>
    <td>{{ request.createdByUsername }}</td>
    <td>{{ request.title }}</td>
    <td>{{ request.createdByEmail }}</td>
    <td>
      <button class="btn btn-secondary" >Remove</button>
    </td>
  </tr>
</template>

<script>
export default {
  props: {
    request: Object
  }
};
</script>

<style>
</style>