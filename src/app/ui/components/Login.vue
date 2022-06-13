<template>
  <div class="input-group position-absolute top-50 start-50 translate-middle">
    <form @submit.prevent="login()" class="col-6 mx-auto">
      <div class="input-group">
        <span class="input-group-text">
          <i class="bi bi-lock" />
        </span>
        <input
          v-model="xApiKey"
          type="password"
          class="form-control"
          placeholder="x-api-key"
        />
        <button
          class="btn btn-primary"
          type="submit"
          id="button"
          :disabled="!xApiKey.length"
        >
          Login
        </button>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        xApiKey: "",
      };
    },
    methods: {
      login() {
        console.log(this.xApiKey);
      },
    },
  };
</script>
