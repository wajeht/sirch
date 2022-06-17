<template>
  <nav
    class="navbar navbar-dark bg-dark shadow-sm"
    style="border-bottom: 1px solid #383d3f"
  >
    <div class="container-fluid">
      <!-- right -->
      <ul class="navbar-nav mt-2">
        <li class="nav-item">
          <router-link to="/" class="text-white text-decoration-none">
            <h5><i class="bi bi-search me-2"></i>Sirch</h5>
          </router-link>
        </li>
      </ul>

      <!-- left -->
      <ul class="navbar-nav d-flex flex-row gap-3">
        <li class="nav-item">
          <router-link
            to="/dashboard"
            class="nav-link"
            :class="{ active: $route.name === 'Dashboard' }"
            >Dashboard</router-link
          >
        </li>
        <li class="nav-item">
          <router-link
            to="/proxy"
            class="nav-link"
            :class="{ active: $route.name === 'Proxy' }"
          >
            Proxy
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
            to="/logout"
            class="nav-link"
            :class="{ active: $route.name === 'Logout' }"
          >
            Logout
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>
