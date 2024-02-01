<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
document.addEventListener("click", ({ target }) => {
  const setting = document.querySelector("#setting");
  const menu = document.querySelector("#menu");
  if (setting == target || setting.contains(target)) {
    menu.classList.toggle("open");
    console.log("aa");
  }
});
</script>
<template>
  <div id="setting"><FontAwesomeIcon :icon="faGear" size="xl" /></div>
  <div id="menu">sadsad</div>
</template>
<style scoped>
#setting {
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.25s linear;
  width: 30px;
  height: 30px;
}
.icon:hover {
  color: rgb(168, 168, 168);
}
#menu {
  padding: 10px;
  transition: all 0.5s linear;
  visibility: hidden;
  opacity: 0;
  position: absolute;
  right: 10px;
  top: 80px;
  width: 200px;
  height: 300px;
  border-radius: 10px;
  background-color: #0e0e0e;
}
.open {
  opacity: 1 !important;
  visibility: visible !important;
}
</style>
