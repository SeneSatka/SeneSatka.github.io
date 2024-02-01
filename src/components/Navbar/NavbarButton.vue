<script setup>
defineProps({
  url: String,
  text: String,
});
</script>
<template>
  <div class="navbarButton">
    <RouterLink :to="url">{{ text }}</RouterLink>
  </div>
</template>
<style scoped>
.navbarButton a {
  text-decoration: none;
  color: var(--color);
  text-shadow: none;
}
.navbarButton {
  font-size: 15px;
  background-color: rgb(50, 50, 50);
  padding: 10px;
  border-radius: 7px;
  transition: all 0.25s linear;
  &:hover {
    border-radius: 5px;
    background-color: rgb(100, 100, 100);
  }
}
</style>
