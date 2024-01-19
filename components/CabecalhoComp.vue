<script setup>
import { ref } from "vue";
import "~/assets/css/cabecalho.css";

const currentPage = ref();

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const scrollToSection = (sectionId) => {
  const targetElement = document.getElementById(sectionId);

  if (targetElement) {
    targetElement.scrollIntoView({ behavior: "smooth" });
  }
};

const handleLinkClick = (e, sectionId, pageTitle) => {
  e.preventDefault();
  if (sectionId === "home") {
    scrollToTop();
  } else {
    scrollToSection(sectionId);
  }
  document.title = `${pageTitle} - João Gabriel`;
  currentPage.value = pageTitle;
  localStorage.setItem("lastVisitedSection", sectionId);
};
</script>
<template>
  <header>
    <ul>
      <li>
        <a href="#" @click="handleLinkClick($event, 'home', 'Home')">Home</a>
      </li>
      <li>
        <a href="#" @click="handleLinkClick($event, 'about', 'About')">About</a>
      </li>
      <li>
        <a href="#" @click="handleLinkClick($event, 'experience', 'Experience')"
          >Experience</a
        >
      </li>
      <li>
        <a href="#" @click="handleLinkClick($event, 'contact', 'Contact')"
          >Contact</a
        >
      </li>
    </ul>
  </header>
</template>
<style scoped>
/*  */
</style>
