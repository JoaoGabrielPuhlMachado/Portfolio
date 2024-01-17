<script setup lang="ts">
import "~/assets/css/base.css";
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
</script>
<template>
  <div class="container-home">
    <div id="home" class="glitch">
      <h1 class="glitch-text">João Gabriel Puhl Machado</h1>
      <h1 class="glitch-text">João Gabriel Puhl Machado</h1>
      <h1 class="glitch-text">João Gabriel Puhl Machado</h1>
    </div>
    <div class="typed-text">
      <span ref="typedOutput" class="typed-output"></span>
      <span class="typed-cursor typed-cursor--blink">|</span>
    </div>
    <div class="contact-div">
      <a class="btn-contact">Contact Me</a>
    </div>
  </div>
  <div class="container-about">
    <div id="about" class="about">
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
        justo vestibulum posuere.
      </p>
    </div>
  </div>
  <div id="experience" class="experience">
    <p>
      My experiences Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Aliquam eget sagittis odio, id ultricies justo. Donec interdum orci ac
      aliquet malesuada. Nullam pulvinar arcu ac egestas vestibulum.
      Pellentesque ornare blandit mauris eget suscipit. In hac habitasse platea
      dictumst. Phasellus feugiat velit eget orci maximus egestas. Vivamus nunc
      lectus, tincidunt quis interdum non, dignissim in mi. Nunc accumsan
      vehicula mi id dictum. Etiam non commodo velit, consectetur tristique
      metus. Quisque tristique, orci non ornare elementum, massa orci ultrices
      metus, at porta turpis leo ut dolor. Nullam vel metus vitae erat
      sollicitudin maximus sed sed ligula. Aliquam sagittis non justo vestibulum
      posuere.
    </p>
  </div>
  <div id="contact" class="contact">
    <p>
      Contact-me Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Aliquam eget sagittis odio, id ultricies justo. Donec interdum orci ac
      aliquet malesuada. Nullam pulvinar arcu ac egestas vestibulum.
      Pellentesque ornare blandit mauris eget suscipit. In hac habitasse platea
      dictumst. Phasellus feugiat velit eget orci maximus egestas. Vivamus nunc
      lectus, tincidunt quis interdum non, dignissim in mi. Nunc accumsan
      vehicula mi id dictum. Etiam non commodo velit, consectetur tristique
      metus. Quisque tristique, orci non ornare elementum, massa orci ultrices
      metus, at porta turpis leo ut dolor. Nullam vel metus vitae erat
      sollicitudin maximus sed sed ligula. Aliquam sagittis non justo vestibulum
      posuere. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
      eget sagittis odio, id ultricies justo. Donec interdum orci ac aliquet
      malesuada. Nullam pulvinar arcu ac egestas vestibulum. Pellentesque ornare
      blandit mauris eget suscipit. In hac habitasse platea dictumst. Phasellus
      feugiat velit eget orci maximus egestas. Vivamus nunc lectus, tincidunt
      quis interdum non, dignissim in mi. Nunc accumsan vehicula mi id dictum.
      Etiam non commodo velit, consectetur tristique metus. Quisque tristique,
      orci non ornare elementum, massa orci ultrices metus, at porta turpis leo
      ut dolor. Nullam vel metus vitae erat sollicitudin maximus sed sed ligula.
      Aliquam sagittis non justo vestibulum posuere. Lorem ipsum dolor sit amet,
      consectetur adipiscing elit. Aliquam eget sagittis odio, id ultricies
      justo. Donec interdum orci ac aliquet malesuada. Nullam pulvinar arcu ac
      egestas vestibulum. Pellentesque ornare blandit mauris eget suscipit. In
      hac habitasse platea dictumst. Phasellus feugiat velit eget orci maximus
      egestas. Vivamus nunc lectus, tincidunt quis interdum non, dignissim in
      mi. Nunc accumsan vehicula mi id dictum. Etiam non commodo velit,
      consectetur tristique metus. Quisque tristique, orci non ornare elementum,
      massa orci ultrices metus, at porta turpis leo ut dolor. Nullam vel metus
      vitae erat sollicitudin maximus sed sed ligula. Aliquam sagittis non justo
      vestibulum posuere. Lorem ipsum dolor sit amet, consectetur adipiscing
      elit. Aliquam eget sagittis odio, id ultricies justo. Donec interdum orci
      ac aliquet malesuada. Nullam pulvinar arcu ac egestas vestibulum.
      Pellentesque ornare blandit mauris eget suscipit. In hac habitasse platea
      dictumst. Phasellus feugiat velit eget orci maximus egestas. Vivamus nunc
      lectus, tincidunt quis interdum non, dignissim in mi. Nunc accumsan
      vehicula mi id dictum. Etiam non commodo velit, consectetur tristique
      metus. Quisque tristique, orci non ornare elementum, massa orci ultrices
      metus, at porta turpis leo ut dolor. Nullam vel metus vitae erat
      sollicitudin maximus sed sed ligula. Aliquam sagittis non justo vestibulum
      posuere. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
      eget sagittis odio, id ultricies justo. Donec interdum orci ac aliquet
      malesuada. Nullam pulvinar arcu ac egestas vestibulum. Pellentesque ornare
      blandit mauris eget suscipit. In hac habitasse platea dictumst. Phasellus
      feugiat velit eget orci maximus egestas. Vivamus nunc lectus, tincidunt
      quis interdum non, dignissim in mi. Nunc accumsan vehicula mi id dictum.
      Etiam non commodo velit, consectetur tristique metus. Quisque tristique,
      orci non ornare elementum, massa orci ultrices metus, at porta turpis leo
      ut dolor. Nullam vel metus vitae erat sollicitudin maximus sed sed ligula.
      Aliquam sagittis non justo vestibulum posuere.
    </p>
  </div>
</template>
<style scoped>
.container-home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 90vh;
  overflow: hidden;
}
.container-home::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("/img/spaceship.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  filter: blur(1.3px);
  z-index: -1;
}
.glitch {
  margin: 0 auto;
}
.glitch h1 {
  font-family: "Source Code Pro", monospace !important;
  color: rgb(119, 0, 255);
  font-size: 30px;
  letter-spacing: 0.0375rem;
  font-weight: 400;
  margin: 0;
  line-height: 0;
  -webkit-animation: glitch1 2.5s infinite;
  animation: glitch1 2.5s infinite;
}
.glitch h1:nth-child(2) {
  color: #1900ff;
  -webkit-animation: glitch2 2.5s infinite;
  animation: glitch2 2.5s infinite;
}
.glitch h1:nth-child(3) {
  color: #ff35f5;
  -webkit-animation: glitch3 2.5s infinite;
  animation: glitch3 2.5s infinite;
}
.typed-text {
  margin: 30px;
}
.typed-output,
.typed-cursor {
  color: rgb(119, 0, 255);
  font-size: 20px;
  font-weight: bolder;
  letter-spacing: 0.0375rem;
  /* -webkit-text-stroke: 1px black; */
}
.btn-contact {
  border: 1px solid;
  border-radius: 4px !important;
  font-family: "Source Code Pro", monospace !important;
  text-transform: uppercase;
  padding: 0.5rem;
  color: rgb(119, 0, 255);
}
p {
  color: rgb(119, 0, 255);
}
</style>
