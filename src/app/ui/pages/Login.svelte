<script>
  let apiKey = "";

  async function handleSubmit() {
    try {
      console.log(apiKey);
    } catch (e) {
      console.log(e);
    }
  }
</script>

<form on:submit|preventDefault={handleSubmit} class="input-group">
  <input
    bind:value={apiKey}
    type="text"
    class="form-control"
    placeholder="X-API-KEY"
  />
  <button class="btn btn-primary" type="submit" disabled={!apiKey.length}
    >Login</button
  >
</form>

<style>
</style>
