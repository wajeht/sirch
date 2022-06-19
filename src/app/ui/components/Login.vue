<template>
  <form @submit.prevent="login()">
    <div class="text-center mb-5">
      <!-- title -->
      <h1 class="fw-normal"><i class="bi bi-search me-2"></i>Sirch</h1>

      <!-- description -->
      <small>centralized searching & synchronized bookmarking system</small>
    </div>
    <div class="input-group shadow-sm">
      <!-- icons -->
      <span
        class="input-group-text"
        :class="{ 'bg-danger': error, 'border-danger': error }"
      >
        <i v-if="!error && !loggingin" class="bi bi-lock" />
        <i v-if="loggingin" class="bi bi-unlock" />
        <i v-if="error" class="bi bi-x-lg" :class="{ 'text-light': error }" />
      </span>

      <!-- input -->
      <input
        v-model="xApiKey"
        type="password"
        class="form-control shadow-none"
        :class="{ 'border-danger': error }"
        :placeholder="placeholder"
        :disabled="loggingin"
      />

      <!-- button -->
      <button
        class="btn btn-dark"
        :class="{ 'border-danger': error, 'bg-danger': error }"
        type="submit"
        id="button"
        :disabled="!xApiKey.length || loggingin"
      >
        <div
          v-if="loggingin"
          class="spinner-border spinner-border-sm"
          role="status"
        >
          <span class="visually-hidden">Loading...</span>
        </div>
        <span v-else>Login</span>
      </button>
    </div>
  </form>
</template>

<script>
  export default {
    data() {
      return {
        xApiKey: "",
        error: false,
        placeholder: "x-api-key",
        loggingin: false,
      };
    },
    methods: {
      login() {
        this.loggingin = true;

        setTimeout(() => {
          if (this.xApiKey != "123") {
            this.error = true;
            this.xApiKey = "";
            this.placeholder = "nice try, bud!";
            this.loggingin = false;
          }
        }, 1000);

        if (this.xApiKey === "123") {
          setTimeout(() => {
            this.$router.push("/dashboard");
          }, 2000);
        }
      },
    },

    watch: {
      // clear after 2.5 sec
      error() {
        if (this.error) {
          setTimeout(() => {
            this.error = false;
            this.placeholder = "x-api-key";
          }, 2500);
        }
      },

      // clear when user start entering key
      xApiKey() {
        if (this.xApiKey.length) {
          this.error = false;
          this.placeholder = "x-api-key";
        }
      },
    },
  };
</script>

<style scoped>
  textarea:hover,
  input:hover,
  textarea:active,
  input:active,
  textarea:focus,
  input:focus,
  button:focus,
  button:active,
  button:hover,
  label:focus,
  .btn:active,
  .btn.active {
    outline: 0px !important;
    -webkit-appearance: none;
    box-shadow: none !important;
    outline: none;
    border-color: none;
    box-shadow: none;
  }
</style>
