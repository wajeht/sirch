<template>
  <div id="admin">
    <AdminNavbar />
    <div class="container-fluid" style="background-color: red">
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
