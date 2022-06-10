<script>
  import { Route } from "tinro";
  import Proxy from "./pages/Proxy.svelte";
  import Home from "./pages/Home.svelte";
  import NotFound from "./pages/NotFound.svelte";
  import Commands from "./pages/Commands.svelte";
  import Login from "./pages/Login.svelte";
</script>

<div class="container">
  <nav>
    <a href="/">Home</a>
    <a href="/proxy">proxy</a>
    <a href="/login">Login</a>
    <a href="/commands">Commands</a>
  </nav>

  <Route path="/"><Home /></Route>
  <Route path="/proxy"><Proxy /></Route>
  <Route path="/login"><Login /></Route>
  <Route path="/commands"><Commands /></Route>
  <Route fallback><NotFound /></Route>
</div>
