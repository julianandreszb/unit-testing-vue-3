<script setup>
import { defineProps, ref } from "vue";
const randomNumber = ref(0);
const props = defineProps({
  min: {
    type: Number,
    default: 1,
  },
  max: {
    type: Number,
    default: 10,
  },
});
const getRandomNumber = () => {
  randomNumber.value =
    Math.floor(Math.random() * (props.max - props.min + 1)) + props.min;
};
</script>

<template>
  <div>
    <span>{{ randomNumber }}</span>
    <button @click="getRandomNumber">Generate Number</button>
  </div>
</template>
