<script>
  import { afterUpdate, onMount } from "svelte";

  let url;
  let host;

  onMount(() => {
    let params = new URL(document.location).searchParams;
    url = params.get("load");
    console.log({ url });
  });

  afterUpdate(() => {
    host = url;
  });
</script>

<iframe id="iframe" title="iframe" class="iframe" src={url} />

<div class="button">
  <p>{url}</p>
  <p>{host}</p>
</div>

<style>
  .button {
    background: red;
    position: fixed;
    width: 100vw;
    /* width: 35px; */
    /* height: 35px; */
    /* border-radius: 50%; */
    z-index: 999999999999999999999999999999999999999999999;
    left: 10px;
    top: 10px;
  }

  .iframe {
    height: 100vh;
    width: 100vw;
    border: none;
  }
</style>
