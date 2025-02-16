<template>
  <NuxtLink
    v-for="locale in otherLocales" 
    :key="locale.code"
    :to="switchLocalePath(locale.code)"
    class="text-md hover:text-blue-600 flex items-center"
  >
    <span class="mr-1">{{ locale.flag }}</span>
    {{ locale.name }}
  </NuxtLink>
</template>

<script setup>
  const { locale, locales } = useI18n()
  const switchLocalePath = useSwitchLocalePath()

  const otherLocales = computed(() => 
    locales.value.filter(item => item.code !== locale.value)
  )
</script>