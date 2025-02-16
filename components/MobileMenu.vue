<template>
  <transition
    enter-active-class="transition-all duration-300 ease-out"
    enter-from-class="max-h-0 opacity-0"
    enter-to-class="max-h-[144px] opacity-100"
    leave-active-class="transition-all duration-200 ease-in"
    leave-from-class="max-h-[144px] opacity-100"
    leave-to-class="max-h-0 opacity-0"
  >
    <div 
      v-if="isOpen" 
      class="left-0 right-0 bg-white shadow-lg md:hidden px-4 overflow-hidden"
    >
      <NuxtLink 
        v-for="link in links"
        :key="link.path"
        :to="localePath(link.path)" 
        class="flex items-center hover:text-blue-600 h-12"
        @click="isOpen = false"
      >
        {{ $t(link.name) }}
      </NuxtLink>
      <div class="flex items-center h-12">
        <LanguageSwitcher />
      </div>
    </div>
  </transition>
</template>

<script lang="ts" setup>
  defineProps<{
    links: Array<{
      path: string
      name: string
    }>
  }>()
  const localePath = useLocalePath()

  const isOpen = defineModel('isOpen')
</script> 