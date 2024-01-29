<script setup lang="ts">
import "~/assets/css/base.css";
import "~/assets/css/home.css";
import "~/assets/css/about.css";
import "~/assets/css/experience.css";
import "~/assets/css/contact.css";

import { languageData } from "~/languages/index.js";

const currentLanguage = ref<"en" | "pt">("pt");

const toggleLanguage = () => {
  currentLanguage.value = currentLanguage.value === "en" ? "pt" : "en";
};

import { onMounted, ref } from "vue";

import Typed from "typed.js";
const typedOutput = ref(null);

const strings = [
  "Full-Stack Developer",
  "HTML",
  "CSS",
  "JavaScript",
  "Vue",
  "Nuxt.js",
  "React-Native",
  "Python",
  "Django",
];
const options = {
  strings: strings,
  typeSpeed: 50,
  backSpeed: 30,
  backDelay: 1200,
  startDelay: 400,
  loop: true,
};

onMounted(() => {
  if (process.client) {
    const typedInstance = new Typed(typedOutput.value, options);
  }
});

const scrollToSection = (sectionId: string) => {
  const targetElement = document.getElementById(sectionId);
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: "smooth" });
  }
};

const handleLinkClick = (e: Event, sectionId: string, pageTitle: string) => {
  e.preventDefault();
  scrollToSection(sectionId);
  document.title = `${pageTitle} - João Gabriel`;
};

const formData = ref({
  nome: "",
  email: "",
  celular: "",
  tema: "",
  mensagem: "",
});

const enviarContato = () => {
  const googleFormsURL = `https://docs.google.com/forms/u/0/d/e/1FAIpQLSfHxgQkJDTK07XLHPZwP-jKp-Ug6JaFyyr7VV7axYJoBhcsaQ/viewform`;

  const formDataSerialized = new URLSearchParams({
    "entry.2005620554": formData.value.nome,
    "entry.1045781291": formData.value.email,
    "entry.1166974658": formData.value.celular,
    "entry.1003157911": formData.value.tema,
    "entry.839337160": formData.value.mensagem,
  });

  const googleFormsFullURL = `${googleFormsURL}?${formDataSerialized.toString()}`;
  window.open(googleFormsFullURL, "_blank");

  formData.value = {
    nome: "",
    email: "",
    celular: "",
    tema: "",
    mensagem: "",
  };
};

const enviarWhatsApp = () => {
  const linkWhatsApp = window.open(
    `https://api.whatsapp.com/send?phone=47997929990&text=${encodeURIComponent(
      formData.value.mensagem
    )}`
  );

  formData.value = {
    nome: "",
    email: "",
    celular: "",
    tema: "",
    mensagem: "",
  };
};
</script>
<template>
  <div id="home" class="container-home">
    <div class="glitch">
      <h1>João Gabriel Puhl Machado</h1>
      <h1>João Gabriel Puhl Machado</h1>
      <h1>João Gabriel Puhl Machado</h1>
    </div>
    <div class="typed-text">
      <span ref="typedOutput" class="typed-output"></span>
    </div>
    <div class="contact-div">
      <a
        href="#"
        class="btn-contact"
        @click="handleLinkClick($event, 'contact', 'Contact')"
      >
        {{ languageData[currentLanguage].home.homebutton }}
      </a>
      <a href="#" class="btn-contact" @click="toggleLanguage">{{
        languageData[currentLanguage].home.togglelanguage
      }}</a>
    </div>
  </div>
  <div class="container-about-experience">
    <div id="about" class="container-about">
      <div class="container-photo">
        <img class="photo" src="/img/fotoperfil.jpg" alt="photo" />
        <div class="icon-box">
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
      </div>
      <div class="about">
        <div class="title">
          <h1>
            {{ languageData[currentLanguage].about.abouttitle }}
          </h1>
          <h1>
            {{ languageData[currentLanguage].about.abouttitle }}
          </h1>
          <h1>
            {{ languageData[currentLanguage].about.abouttitle }}
          </h1>
        </div>
        <p>
          {{ languageData[currentLanguage].about.intro[0] }}
        </p>
        <p>
          {{ languageData[currentLanguage].about.intro[1] }}
        </p>
        <p>
          {{ languageData[currentLanguage].about.intro[2] }}
        </p>
        <table>
          <tbody>
            <tr>
              <td>
                <a
                  href="https://www.javascript.com/"
                  target="_blank"
                  rel="noreferrer"
                  ><span class="skill-arrow">ᐅ</span> JavaScript</a
                >
              </td>
              <td>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/html"
                  target="_blank"
                  rel="noreferrer"
                  ><span class="skill-arrow">ᐅ</span> HTML</a
                >
              </td>
            </tr>
            <tr>
              <td>
                <a
                  href="https://www.vuejs.org/"
                  target="_blank"
                  rel="noreferrer"
                  ><span class="skill-arrow">ᐅ</span> Vue</a
                >
              </td>
              <td>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/css"
                  target="_blank"
                  rel="noreferrer"
                  ><span class="skill-arrow">ᐅ</span> CSS</a
                >
              </td>
            </tr>
            <tr>
              <td>
                <a href="https://www.nuxt.com" target="_blank" rel="noreferrer"
                  ><span class="skill-arrow">ᐅ</span> Nuxt</a
                >
              </td>
              <td>
                <a
                  href="https://www.python.org/"
                  target="_blank"
                  rel="noreferrer"
                  ><span class="skill-arrow">ᐅ</span> Python</a
                >
              </td>
            </tr>
            <tr>
              <td>
                <a
                  href="https://reactnative.dev/"
                  target="_blank"
                  rel="noreferrer"
                  ><span class="skill-arrow">ᐅ</span> React-Native</a
                >
              </td>
              <td>
                <a
                  href="https://www.djangoproject.com/"
                  target="_blank"
                  rel="noreferrer"
                  ><span class="skill-arrow">ᐅ</span> Django</a
                >
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div id="experience" class="container-experience">
      <div class="subcontainer-experience">
        <div class="title">
          <h1>
            {{ languageData[currentLanguage].experience["experiencetitle"] }}
          </h1>
          <h1>
            {{ languageData[currentLanguage].experience["experiencetitle"] }}
          </h1>
          <h1>
            {{ languageData[currentLanguage].experience["experiencetitle"] }}
          </h1>
        </div>
        <div class="experience-wrapper">
          <div class="timeline-block timeline-block-left">
            <div class="timeline-content">
              <h3>
                {{ languageData[currentLanguage].experience.timeline[0].title }}
              </h3>
              <span class="date">2020</span>
              <p>
                {{
                  languageData[currentLanguage].experience.timeline[0]
                    .description[0]
                }}
                <a
                  href="https://www.instagram.com/vitorjessevs/"
                  target="_blank"
                  class="mention"
                >
                  Vitor Jesse</a
                >{{
                  languageData[currentLanguage].experience.timeline[0]
                    .description[1]
                }}
                <a
                  href="https://www.w3schools.com/"
                  target="_blank"
                  class="mention"
                  >W3Schools</a
                >{{
                  languageData[currentLanguage].experience.timeline[0]
                    .description[2]
                }}
              </p>
            </div>
          </div>
          <div class="timeline-block timeline-block-right">
            <div class="timeline-content">
              <h3>
                {{ languageData[currentLanguage].experience.timeline[1].title }}
              </h3>
              <span class="date">2021</span>
              <p>
                {{
                  languageData[currentLanguage].experience.timeline[1]
                    .description[0]
                }}
                <a
                  href="https://araquari.ifc.edu.br/"
                  target="_blank"
                  class="mention"
                  >IFC</a
                >
                {{
                  languageData[currentLanguage].experience.timeline[1]
                    .description[1]
                }}
              </p>
            </div>
          </div>
          <div class="timeline-block timeline-block-left">
            <div class="timeline-content">
              <h3>
                {{ languageData[currentLanguage].experience.timeline[2].title }}
              </h3>
              <span class="date">2022</span>
              <p>
                {{
                  languageData[currentLanguage].experience.timeline[2]
                    .description[0]
                }}
                <a href="https://vuejs.org/" target="_blank" class="mention"
                  >Vue</a
                >{{
                  languageData[currentLanguage].experience.timeline[2]
                    .description[1]
                }}
                <a
                  href="https://github.com/eduardo-da-silva/"
                  target="_blank"
                  class="mention"
                  >Eduardo da Silva</a
                >
                {{
                  languageData[currentLanguage].experience.timeline[2]
                    .description[2]
                }}
                <a
                  href="https://filmeflixjoaoligia.surge.sh/"
                  target="_blank"
                  class="mention"
                  >FilmeFlix</a
                >
                {{
                  languageData[currentLanguage].experience.timeline[2]
                    .description[3]
                }}
              </p>
            </div>
          </div>
          <div class="timeline-block timeline-block-right">
            <div class="timeline-content">
              <h3>
                {{ languageData[currentLanguage].experience.timeline[3].title }}
              </h3>
              <span class="date">2023</span>
              <p>
                {{
                  languageData[currentLanguage].experience.timeline[3]
                    .description[0]
                }}
                <a
                  href="https://reactnative.dev/"
                  target="_blank"
                  class="mention"
                  >React-Native</a
                >{{
                  languageData[currentLanguage].experience.timeline[3]
                    .description[1]
                }}
                <a
                  href="https://www.djangoproject.com/"
                  target="_blank"
                  class="mention"
                  >Django</a
                >{{
                  languageData[currentLanguage].experience.timeline[3]
                    .description[2]
                }}
                <a href="https://fl0.com/" target="_blank" class="mention"
                  >Fl0.com</a
                >{{
                  languageData[currentLanguage].experience.timeline[3]
                    .description[3]
                }}
                <a
                  href="https://github.com/JoaoGabrielPuhlMachado/"
                  target="_blank"
                  class="mention"
                  >Github</a
                >.
              </p>
            </div>
          </div>
          <div class="timeline-block timeline-block-left">
            <div class="timeline-content">
              <h3>
                {{ languageData[currentLanguage].experience.timeline[4].title }}
              </h3>
              <span class="date">{{
                languageData[currentLanguage].experience.timeline[4].date
              }}</span>
              <p>
                {{
                  languageData[currentLanguage].experience.timeline[4]
                    .description[0]
                }}
                <a href="https://nuxt.com/" target="_blank" class="mention"
                  >NuxtJs</a
                >{{
                  languageData[currentLanguage].experience.timeline[4]
                    .description[1]
                }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div id="contact" class="container-contact">
    <div class="title">
      <h1>
        {{ languageData[currentLanguage].contact.contacttitle }}
      </h1>
      <h1>
        {{ languageData[currentLanguage].contact.contacttitle }}
      </h1>
      <h1>
        {{ languageData[currentLanguage].contact.contacttitle }}
      </h1>
    </div>
    <div class="subtitle">
      <p>
        {{ languageData[currentLanguage].contact.subtitle }}
      </p>
    </div>
    <form>
      <div class="contact-input-message">
        <div class="input-area">
          <div class="center-text">
            <input
              v-model="formData.nome"
              type="text"
              class="input-area-contact"
              :placeholder="
                languageData[currentLanguage].contact.formlabels.name
              "
              name="name"
            />
          </div>
          <div class="center-text">
            <input
              v-model="formData.email"
              class="input-area-contact"
              :placeholder="
                languageData[currentLanguage].contact.formlabels.email
              "
              name="email"
              type="email"
            />
          </div>
          <div class="center-text">
            <input
              v-model="formData.celular"
              class="input-area-contact"
              :placeholder="
                languageData[currentLanguage].contact.formlabels.whatsapp
              "
              name="phone"
              type="text"
            />
          </div>
          <div class="center-text">
            <input
              v-model="formData.tema"
              class="input-area-contact"
              :placeholder="
                languageData[currentLanguage].contact.formlabels.subject
              "
              name="subject"
              type="text"
            />
          </div>
        </div>
        <div class="message-area">
          <div class="center-text">
            <textarea
              v-model="formData.mensagem"
              class="input-area-contact"
              :placeholder="
                languageData[currentLanguage].contact.formlabels.message
              "
              name="message"
              type="text"
            ></textarea>
          </div>
        </div>
      </div>
      <div class="container-button">
        <button @click.prevent="enviarContato" class="contact-btn">
          {{ languageData[currentLanguage].contact.contactbutton[0] }}
        </button>
        <button @click.prevent="enviarWhatsApp" class="contact-btn">
          {{ languageData[currentLanguage].contact.contactbutton[1] }}
        </button>
      </div>
    </form>
  </div>
</template>
<style scoped>
/*  */
</style>
