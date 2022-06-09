<script>
  import { onMount } from "svelte";

  let url;

  onMount(() => {
    let params = new URL(document.location).searchParams;
    url = params.get("load");
    console.log({ url });
  });
</script>

<iframe id="iframe" title="iframe" class="iframe" src={url} />

<div class="button" />

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
