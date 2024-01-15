<script setup>
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk
      ? `${titleChunk} - João Gabriel Portfolio`
      : "João Gabriel Portfolio";
  },
});
</script>
<template>
  <div>
    <h1>Welcome to the homepage</h1>
    <AppAlert> This is an auto-imported component. </AppAlert>
    <NuxtPage />
    <img src="/img/favicon.ico" alt="Discover Nuxt 3" />
    <img src="/assets/img/favicon.ico" alt="Discover Nuxt 3" />
    <header>
      <nav>
        <ul>
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/about">About</NuxtLink></li>
        </ul>
      </nav>
    </header>
  </div>
</template>
