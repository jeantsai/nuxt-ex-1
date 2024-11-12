<template>
  <header class="bg-secondary text-white p-6">
    <div class="container mx-auto flex justify-between items-center">
      <div class="text-xl font-light uppercase">Nuxt Exercise 1</div>
      <nav class="hidden md:block">
        <ul class="flex gap-x-4">
          <li v-for="item in headerLinks" :key="item.name">
            <a :href="item.link" class="transition hover:text-primary">
              {{ item.name }}
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </header>

  <section class="bg-secondary text-white py-20">
    <div class="container grid md:grid-cols-2">
      <div class="col-span-1 flex flex-col items-start">
        <h1 class="text-5xl mb-2">NUXT EX-1</h1>
        <p class="text-2xl mb-8">
          An exercise for Nuxt and its various modules
        </p>
        <button
          @click="useScrollTo('about')"
          class="bg-primary text-white py-2 px-4 rounded-full transition hover:bg-opacity-70 dureation-300"
        >
          Vuew More
        </button>
      </div>
      <div class="col-span-1 flex justify-end">
        <img src="~/assets/images/hero-1.png" alt="Nuxt" class="h-[350px]" />
      </div>
    </div>
  </section>

  <section id="about" class="py-16 bg-secondary">
    <div class="container mx-auto text-center">
      <img
        src="~/assets/images/avatar-1.png"
        alt="Avatar"
        class="w-48 h-48 rounded-full mx-auto mb-6 bg-slate-300 shadow-xl shadow-slate-700 border-4 border-primary border-dashed"
      />
      <p
        class="text-gray-700 max-w-4xl mx-auto text-lg leading-relaxed mb-6 px-4"
      >
        Nuxt is a free and open-source framework with an intuitive and
        extendable way to create type-safe, performant and production-grade
        full-stack web applications and websites with Vue.js. We made everything
        so you can start writing .vue files from the beginning while enjoying
        hot module replacement in development and a performant application in
        production with server-side rendering by default. Nuxt has no vendor
        lock-in, allowing you to deploy your application everywhere, even on the
        edge. We provide a lot of features to cover all your needs, and when you
        need more customizations, you can easily extend Nuxt.
      </p>
      <div
        class="text-primary font-bold max-w-4xl mx-auto flex flex-col items-center sm:flex-row sm:justify-evenly"
      >
        <FeatureHighlight>Routing</FeatureHighlight>
        <FeatureHighlight>Layout</FeatureHighlight>
        <FeatureHighlight>SEO</FeatureHighlight>
        <FeatureHighlight>Middleware</FeatureHighlight>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const headerLinks = [
  { name: "About", link: "#about" },
  { name: "Portfolio", link: "#portfolio" },
  { name: "Contact", link: "#contact" },
];
</script>
