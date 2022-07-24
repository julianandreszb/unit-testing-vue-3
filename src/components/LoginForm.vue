<script setup>
import { ref, defineEmits } from "vue";

const name = ref("");
const emits = defineEmits(["formSubmitted"]);
const onSubmit = () => {
  emits("formSubmitted", { name: name.value });
};
</script>

<template>
  <form @submit.prevent="onSubmit">
    <input data-testid="name-input" type="text" v-model="name" />
    <button type="submit"></button>
  </form>
</template>
