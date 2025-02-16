<template>
  <nav class="bg-white shadow-lg sticky top-0 z-50">
    <div class="max-w-6xl mx-auto px-4">
      <div class="flex justify-between items-center h-16">
        <NuxtLink :to="localePath('/')" class="font-bold text-xl font-[faustina]">
          Bram Gerrits
        </NuxtLink>
        
        <HamburgerIcon v-model:isOpen="isMenuOpen" />

        <!-- Desktop menu -->
        <div class="flex items-center hidden md:flex space-x-4">
          <NuxtLink 
            v-for="link in links"
            :key="link.path"
            :to="localePath(link.path)" 
            class="text-md hover:text-blue-600"
          >
            {{ $t(link.name) }}
          </NuxtLink>
          <LanguageSwitcher />
        </div>
      </div>
    </div>
  </nav>

  <MobileMenu 
    :links="links"
    v-model:isOpen="isMenuOpen"
  />
</template>

<script setup>
const isMenuOpen = ref(false)

const links = [
  { path: '/projects', name: 'navigation.projects' },
  { path: '/about', name: 'navigation.about' },
]
</script>