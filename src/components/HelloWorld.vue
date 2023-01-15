<template>
  <h1>Hello App!</h1>
  <div class="w-24">111</div>
  <div class="flex ...">
  <div class="w-1/2 ... ">w-1/2</div>
  <div class="w-1/2 ... ">w-1/2</div>
</div>
  <p>
    <router-link to="/">Go to Home</router-link>
    <router-link to="/login">Go to About</router-link>
  </p>
  <router-view></router-view>
</template>

<script>
export default {};
</script>