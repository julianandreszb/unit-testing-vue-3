<script setup>
import { getMessage } from "../../services/axios.js";
import { onMounted, reactive, ref } from "vue";

const message = reactive({ result: null });
const error = ref("");

onMounted(async () => {
  try {
    message.result = await getMessage();
  } catch (e) {
    error.value = "Oops! Something went wrong";
  }
});
</script>

<template>
  <div>
    <p v-if="message.result" data-testid="message">{{ message.result.text }}</p>
    <p v-else data-testid="message-error">{{ error }}</p>
  </div>
</template>
