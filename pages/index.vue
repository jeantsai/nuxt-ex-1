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

  <section class="bg-secondary">
    <div>
      <div></div>
      <div class="">
        <img src="~/assets/images/hero-1.png" alt="Nuxt" />
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
