<template>
  <button 
    class="md:hidden"
    @click="isOpen = !isOpen"
    aria-label="Toggle menu"
  >
    <span class="block w-6 h-0.5 bg-black mb-1.5"></span>
    <span class="block w-6 h-0.5 bg-black mb-1.5"></span>
    <span class="block w-6 h-0.5 bg-black"></span>
  </button>
</template>

<script setup>
  defineEmits(['toggle'])

  const isOpen = defineModel('isOpen')
</script> 