<script setup lang="ts">
import "~/assets/css/base.css";
import "~/assets/css/home.css";
import "~/assets/css/about.css";
import "~/assets/css/experience.css";
import "~/assets/css/contact.css";

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

const enviarContato = async () => {
  const googleFormsURL = `https://docs.google.com/forms/d/e/1FAIpQLSfHxgQkJDTK07XLHPZwP-jKp-Ug6JaFyyr7VV7axYJoBhcsaQ/formResponse?submit=Submit`;

  const formDataSerialized = new URLSearchParams({
    "entry.123": formData.value.nome,
    "entry.456": formData.value.email,
    "entry.789": formData.value.celular,
    "entry.012": formData.value.tema,
    "entry.345": formData.value.mensagem,
  });

  try {
    const response = await fetch(googleFormsURL, {
      method: "POST",
      body: formDataSerialized,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });

    if (response.ok) {
      formData.value = {
        nome: "",
        email: "",
        celular: "",
        tema: "",
        mensagem: "",
      };
      console.log("Formulário enviado com sucesso!");
    } else {
      console.error("Erro no envio do formulário");
    }
  } catch (error) {
    console.error("Erro na requisição:", error);
  }
};

const enviarWhatsApp = () => {
  const linkWhatsApp = window.open(
    `https://api.whatsapp.com/send?phone=47997929990&text=${encodeURIComponent(
      formData.value.mensagem
    )}`
  );
};
</script>
<template>
  <div id="home" class="container-home">
    <div class="glitch">
      <h1 class="glitch-text">João Gabriel Puhl Machado</h1>
      <h1 class="glitch-text">João Gabriel Puhl Machado</h1>
      <h1 class="glitch-text">João Gabriel Puhl Machado</h1>
    </div>
    <div class="typed-text">
      <span ref="typedOutput" class="typed-output"></span>
    </div>
    <div class="contact-div">
      <a
        href="#"
        class="btn-contact"
        @click="handleLinkClick($event, 'contact', 'Contact')"
        >Contact</a
      >
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
          <h1>About Me</h1>
        </div>
        <p>
          Hello! I'm João, an 18 years old Brazilian native still based in the
          country.
        </p>
        <p>
          I usually play games, go to the gym and practice some calisthenics
          too.
        </p>
        <p>
          I just finished school recently (2023), I studied Full-Stack
          development at IFC Araquari in Santa Catarina. Technologies I've been
          working with recently:
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
          <h1>My Experiences</h1>
        </div>
        <div class="experience-wrapper">
          <div class="timeline-block timeline-block-left">
            <div class="timeline-content">
              <h3>Programming Concepts Introduction</h3>
              <span class="date">2020</span>
              <p>
                A friend, called
                <a
                  href="https://www.instagram.com/vitorjessevs/"
                  target="_blank"
                  class="mention"
                >
                  Vitor Jesse</a
                >, was studying about programming, he told me about the basics
                concepts of HTML and CSS. Fascinated by coding, I went to the
                internet to study everything about it, found the website named
                <a
                  href="https://www.w3schools.com/"
                  target="_blank"
                  class="mention"
                  >W3Schools</a
                >. After some months, I signed up at IFC high school (federal
                institution of Santa Catarina) to be a developer. That's how it
                all began for me.
              </p>
            </div>
          </div>
          <div class="timeline-block timeline-block-right">
            <div class="timeline-content">
              <h3>IFC First Year</h3>
              <span class="date">2021</span>
              <p>
                In the first year studying at
                <a
                  href="https://araquari.ifc.edu.br/"
                  target="_blank"
                  class="mention"
                  >IFC</a
                >
                (excluding the high school, talking only about the dev part)
                i've learned the basic of HTML, CSS and JavaScript, but I was
                way ahead that, because I've studied that on 2020. It was all
                thanks to Vitor.
              </p>
            </div>
          </div>
          <div class="timeline-block timeline-block-left">
            <div class="timeline-content">
              <h3>Second Year - The Wsorst One</h3>
              <span class="date">2022</span>
              <p>
                I started learning about database creation, business
                requirements, functional and non-functional requirements and
                coding with a framework for the first time called
                <a href="https://vuejs.org/" target="_blank" class="mention"
                  >Vue</a
                >. It was love at first sight, my professor and PhD
                <a
                  href="https://github.com/eduardo-da-silva/"
                  target="_blank"
                  class="mention"
                  >Eduardo da Silva</a
                >
                taught me and all my class about it, I developed a movie website
                called
                <a
                  href="https://filmeflixjoaoligia.surge.sh/"
                  target="_blank"
                  class="mention"
                  >FilmeFlix</a
                >
                with an already existing api for my final project on that year.
              </p>
            </div>
          </div>
          <div class="timeline-block timeline-block-right">
            <div class="timeline-content">
              <h3>Third and Last Year</h3>
              <span class="date">2023</span>
              <p>
                2023, my last year at school, I learned some amazing things, I
                started coding with
                <a
                  href="https://reactnative.dev/"
                  target="_blank"
                  class="mention"
                  >React-Native</a
                >, got better at vue, created my own API, my own database using
                django, developed a final project using Vue to create a website
                (admin-only), React-Native to create an App (client-only),
                Django for the DB and deployed it at
                <a href="https://fl0.com/" target="_blank" class="mention"
                  >Fl0.com</a
                >, axios for API and Pinia overall. Any curiosity, these
                projects are on my
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
              <h3>Future Plans</h3>
              <span class="date">2024 - Present</span>
              <p>
                Now, that I've finished school, I can work in my own projects,
                find a job, continue studying programming without worrying about
                homeworks from school and etc. This monday (15/01/2024), I
                started learning about
                <a href="https://nuxt.com/" target="_blank" class="mention"
                  >NuxtJs</a
                >, at first I didn't know anything about it, but this portfolio
                was developed in 5 days (finished in 19/01) and it's already
                looking like this (imagine when I become 100% senior CSS).
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div id="contact" class="container-contact">
    <div class="title">
      <h1>Contact Me</h1>
    </div>
    <div class="subtitle">
      <p>
        To get in touch, please fill out the form below. I look forward to
        meeting you.
      </p>
    </div>
    <div class="container">
      <form>
        <div class="contact-input-message">
          <div class="input-area">
            <div class="center-text">
              <input
                v-model="formData.nome"
                type="text"
                class="input-area-contact"
                placeholder="NAME"
                name="name"
              />
            </div>
            <div class="center-text">
              <input
                v-model="formData.email"
                class="input-area-contact"
                placeholder="EMAIL"
                name="email"
                type="email"
              />
            </div>
            <div class="center-text">
              <input
                v-model="formData.celular"
                class="input-area-contact"
                placeholder="WHATSAPP"
                name="phone"
                type="text"
              />
            </div>
            <div class="center-text">
              <input
                v-model="formData.tema"
                class="input-area-contact"
                placeholder="SUBJECT"
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
                placeholder="MESSAGE"
                name="message"
                type="text"
              ></textarea>
            </div>
          </div>
        </div>
        <div class="container-button">
          <button @click.prevent="enviarContato" class="contact-btn">
            Contact Me - Google Form
          </button>
          <button @click.prevent="enviarWhatsApp" class="contact-btn">
            Contact Me - Whatsapp
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<style scoped>
/*  */
</style>
