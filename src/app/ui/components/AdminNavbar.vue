<template>
  <nav class="navbar py-1 bg-dark" style="border-bottom: 1px solid #565656">
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
      <div class="d-flex align-items-center gap-3">
        <!-- links -->
        <ul class="navbar-nav d-flex flex-row gap-3">
          <li class="nav-item">
            <router-link
              to="/dashboard"
              class="nav-link text-white"
              :class="{ active: $route.name === 'Dashboard' }"
              >Dashboard</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              to="/proxy"
              class="nav-link text-white"
              :class="{ active: $route.name === 'Proxy' }"
            >
              Proxy
            </router-link>
          </li>
        </ul>

        <!-- profile links -->
        <div class="dropdown">
          <a
            href="#"
            class="link-dark text-decoration-none dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src="https://github.com/mdo.png"
              class="rounded-circle"
              style="border: 1px solid #cccccc"
              width="32"
              height="32"
            />
          </a>
          <ul class="dropdown-menu text-small dropdown-menu-end shadow-sm">
            <li><a class="dropdown-item" href="#">Settings</a></li>
            <li><a class="dropdown-item" href="#">Profile</a></li>
            <li><hr class="dropdown-divider" /></li>
            <li>
              <router-link class="dropdown-item" to="/logout"
                >Log out</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
  .router-link-active {
    font-weight: 500;
    text-decoration: underline;
  }
</style>
>
