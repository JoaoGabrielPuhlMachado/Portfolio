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
      <span class="typed-cursor typed-cursor--blink">|</span>
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
  <div id="about" class="container-about">
    <div class="about">
      <p>
        About me Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Aliquam eget sagittis odio, id ultricies justo. Donec interdum orci ac
        aliquet malesuada. Nullam pulvinar arcu ac egestas vestibulum.
        Pellentesque ornare blandit mauris eget suscipit. In hac habitasse
        platea dictumst. Phasellus feugiat velit eget orci maximus egestas.
        Vivamus nunc lectus, tincidunt quis interdum non, dignissim in mi. Nunc
        accumsan vehicula mi id dictum. Etiam non commodo velit, consectetur
        tristique metus. Quisque tristique, orci non ornare elementum, massa
        orci ultrices metus, at porta turpis leo ut dolor. Nullam vel metus
        vitae erat sollicitudin maximus sed sed ligula. Aliquam sagittis non
        justo vestibulum posuere. About me Lorem ipsum dolor sit amet,
      </p>
    </div>
  </div>
  <br /><br /><br />
  <div id="experience" class="container-experience">
    <div class="subcontainer-experience">
      <div class="experiences-title">
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
              (excluding the high school, talking only about the dev part) i've
              learned the basic of HTML, CSS and JavaScript, but I was way ahead
              that, because I've studied that on 2020. It was all thanks to
              Vitor.
            </p>
          </div>
        </div>
        <div class="timeline-block timeline-block-left">
          <div class="timeline-content">
            <h3>Second Year - The Wsorst One</h3>
            <span class="date">2022</span>
            <p>
              I started learning about database creation, business requirements,
              functional and non-functional requirements and coding with a
              framework for the first time called
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
              <a href="https://reactnative.dev/" target="_blank" class="mention"
                >React-Native</a
              >, got better at vue, created my own API, my own database using
              django, developed a final project using Vue to create a website
              (admin-only), React-Native to create an App (client-only), Django
              for the DB and deployed it at
              <a href="https://fl0.com/" target="_blank" class="mention"
                >Fl0.com</a
              >, axios for API and Pinia overall. Any curiosity, these projects
              are on my
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
              homeworks from school and etc. This monday (15/01/2024), I started
              learning about <a
                href="https://nuxt.com/"
                target="_blank"
                class="mention"
                >NuxtJs</a
              >, at first I didn't know anything about it,
              but this portfolio has being developed for almost 4 days (today is 17/01/) and it's
              already looking like this.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <br /><br /><br />
  <div id="contact" class="contact">
    <p>
      About me Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
      eget sagittis odio, id ultricies justo. Donec interdum orci ac aliquet
      malesuada. Nullam pulvinar arcu ac egestas vestibulum. Pellentesque ornare
      blandit mauris eget suscipit. In hac habitasse platea dictumst. Phasellus
      feugiat velit eget orci maximus egestas. Vivamus nunc lectus, tincidunt
      quis interdum non, dignissim in mi. Nunc accumsan vehicula mi id dictum.
      Etiam non commodo velit, consectetur tristique metus. Quisque tristique,
      orci non ornare elementum, massa orci ultrices metus, at porta turpis leo
      ut dolor. Nullam vel metus vitae erat sollicitudin maximus sed sed ligula.
      Aliquam sagittis non justo vestibulum posuere. About me Lorem ipsum dolor
    </p>
  </div>
</template>
<style scoped>
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  text-align: left;
  background-color: #fff;
}
</style>
