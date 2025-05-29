<template>
  <div class="flex flex-col items-center justify-center flex-1">
    <Hero 
      name="Bram Gerrits"
      role="Full Stack Developer"
      emoji="👋"
    />
    <Checkerboard />
  </div>
</template>

<script lang="ts" setup>
  import Hero from '@/components/Hero.vue'
  import Checkerboard from '../components/Checkerboard.client.vue'
</script>