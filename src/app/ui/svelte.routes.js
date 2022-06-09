import Home from "./pages/Home.svelte";
import Proxy from "./pages/Proxy.svelte";
import NotFound from "./pages/NotFound.svelte";

const routes = {
  "/": Home,
  "/proxy": Proxy,
  "*": NotFound,
};

export default routes;
