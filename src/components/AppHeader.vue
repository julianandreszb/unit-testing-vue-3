<script setup>
import { ref } from "vue";
const loggedIn = ref(false);
</script>

<template>
  <div>
    <button v-show="loggedIn">Logout</button>
  </div>
</template>
