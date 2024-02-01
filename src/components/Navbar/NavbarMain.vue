<script setup>
import NavbarButton from "./NavbarButton.vue";
import NavbarSettings from "./NavbarSettings.vue";
</script>
<template>
  <nav>
    <div id="links"><NavbarButton text="Projelerim" url="/as" /></div>
    <NavbarSettings />
  </nav>
</template>
<style scoped>
nav {
  background-color: #0e0e0e;
  padding: 10px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
}
#links {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
