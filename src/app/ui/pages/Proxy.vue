<template>
  <iframe id="iframe" title="iframe" class="iframe" :src="url" />
  <div class="button" />
</template>

<script>
  export default {
    data() {
      return {
        url: "",
      };
    },
    mounted() {
      let params = new URL(document.location).searchParams;
      this.url = params.get("load");
      console.log({ url: this.url });
    },
  };
</script>

<style>
  .button {
    background: red;
    position: fixed;
    width: 100vw;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    z-index: 1;
    bottom: 10px;
    right: 10px;
  }

  .iframe {
    height: 100vh;
    width: 100vw;
    border: none;
  }
</style>
