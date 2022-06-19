<template>
  <div id="admin">
    <AdminNavbar />
    <div id="admin-router-wrapper" class="container-fluid bg-dark">
      <router-view />
    </div>
  </div>
</template>

<script>
  import AdminNavbar from "../components/AdminNavbar.vue";

  export default {
    components: {
      AdminNavbar,
    },
  };
</script>

<style scoped>
  #admin-router-wrapper {
    /* background-color: #f8f9fa; */
    height: calc(100vh - 57px);
  }
</style>
