<template>
  <div id="regular">
    <div></div>
    <div class="mx-auto">
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script>
  import Footer from "../components/Footer.vue";
  export default {
    components: {
      Footer,
    },
  };
</script>

<style scoped>
  #regular {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #f5f5f5;
    height: 100vh;
  }
</style>
