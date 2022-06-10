<script>
  import { onMount } from "svelte";

  let url;

  onMount(() => {
    let params = new URL(document.location).searchParams;
    url = params.get("url");

    Commands(url).then((res) => {
      console.log(res);
    });
  });

  async function Commands(url) {
    try {
      const res = await fetch(`http://localhost:4000/api/commands/?q=${url}`);
      const json = await res.json();
      return json;
    } catch (e) {
      return e;
    }
  }
</script>

<div id="commands">
  <p>{url}</p>
</div>

<style>
</style>
