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
  localStorage.setItem("lastVisitedSection", sectionId);
};

onMounted(() => {
  const lastVisitedSection = localStorage.getItem("lastVisitedSection");
  if (lastVisitedSection) {
    scrollToSection(lastVisitedSection);
    currentPage.value = lastVisitedSection;
    document.title = `${
      lastVisitedSection.charAt(0).toUpperCase() + lastVisitedSection.slice(1)
    } - João Gabriel`;
  } else {
    document.title = `Home - João Gabriel`;
    currentPage.value = "home";
  }
});

const enviarWhatsApp = () => {
  const linkWhatsApp = window.open(
    `https://api.whatsapp.com/send?phone=47997929990`
  );

  formData.value = {
    nome: "",
    email: "",
    celular: "",
    tema: "",
    mensagem: "",
  };
};

const enviarEmail = () => {
  const mailtoLink = `mailto:sttirlley@gmail.com`;

  window.open(mailtoLink);
};
</script>
<template>
  <footer>
    <div class="footer-contact">
      <p @click.prevent="enviarWhatsApp">+55 (47) 99792-9990</p>
      <p @click.prevent="enviarEmail">sttirlley@gmail.com</p>
    </div>
    <div class="footer-copyright">
      <p>COPYRIGHT © 2024 JOÃO GABRIEL PUHL MACHADO | ALL RIGHTS RESERVED</p>
    </div>
    <div>
      <a
        class="icon"
        href="https://www.linkedin.com/in/jo%C3%A3o-gabriel-p-machado-bab091266"
        target="_blank"
        rel="noreferrer"
        ><img src="/img/linkedin.png" alt="linkedin-logo" /></a
      ><a
        class="icon"
        href="https://github.com/JoaoGabrielPuhlMachado"
        target="_blank"
        rel="noreferrer"
        ><img src="/img/github.png" alt="github-logo" /></a
      ><a
        class="icon"
        href="https://www.instagram.com/joaosttirlley"
        target="_blank"
        rel="noreferrer"
        ><img src="/img/instagram.png" alt="instagram-logo"
      /></a>
    </div>
  </footer>
</template>
<style scoped>
footer {
  background-color: rgb(25, 25, 25);
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.footer-contact p {
  margin: 10px 0;
}
.footer-contact p:hover {
  font-weight: bold;
  cursor: pointer;
  text-decoration: underline;
  transition: 5s;
}
a {
  text-decoration: none;
  color: rgb(119, 0, 255);
}
p {
  color: white;
  font-size: 12px;
}
</style>
