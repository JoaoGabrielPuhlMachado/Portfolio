<script setup>
import { onMounted, ref } from "vue";

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
};
onMounted(() => {
  document.title = `Home - João Gabriel`;
  currentPage.value = "Home";
});
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
<style>
header {
  backdrop-filter: blur(5px);
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
}
ul {
  display: flex;
  transition: 10s;
}
li {
  list-style-type: none;
  font-size: 20px;
  margin: 0 25px;
}
a {
  text-decoration: none;
  color: rgb(119, 0, 255);
}
a:hover {
  font-weight: bolder;
}
</style>
