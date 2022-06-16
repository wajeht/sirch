<template>
  <div id="admin">
    <AdminNavbar />
    <router-view />
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
