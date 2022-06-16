<template>
  <component :is="layout" />
</template>

<script>
  import AdminLayout from "./layouts/AdminLayout.vue";
  import RegularLayout from "./layouts/RegularLayout.vue";

  export default {
    components: {
      AdminLayout,
      RegularLayout,
    },
    data() {
      return {
        layout: null,
      };
    },
    watch: {
      $route(to) {
        if (to.meta.layout !== undefined) {
          this.layout = to.meta.layout;
        } else {
          this.layout = "AdminLayout";
        }
      },
    },
  };
</script>
