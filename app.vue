<script setup>
import { onMounted, onUnmounted } from "vue";
const addBorderOnScroll = () => {
  const handleScroll = () => {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;

    if (scrollPosition > 0) {
      document.body.classList.add("with-border");
    } else {
      document.body.classList.remove("with-border");
    }
  };

  onMounted(() => {
    window.addEventListener("scroll", handleScroll);
  });

  onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
  });
};

addBorderOnScroll();
</script>

<template>
  <CabecalhoComp />
  <NuxtPage />
  <RodapeComp />
</template>

<style>
body {
  background-color: black;
}
.with-border header {
  background-color: rgba(119, 0, 255, 0.06);
  border-bottom: 1px solid rgba(119, 0, 255, 0.5);
}
</style>
