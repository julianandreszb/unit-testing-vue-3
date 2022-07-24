<script setup>
import RandomNumber from "./components/RandomNumber.vue";
import MessageDisplay from "./components/MessageDisplay.vue";
</script>

<template>
  <header>
    <div class="wrapper">
      <random-number></random-number>
      <message-display></message-display>
    </div>
  </header>
</template>

<style scoped>
header {
  line-height: 1.5;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
<script>
export default {
  components: {},
};
</script>
