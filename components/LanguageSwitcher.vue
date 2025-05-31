<template>
    <NuxtLink v-for="locale in otherLocales" :key="locale.code" :to="$switchLocalePath(locale.code) || $localePath('/', locale.code)"
        class="text-md hover:text-primary flex items-center">
        <span class="mr-1">{{ locale.flag }}</span>
        {{ locale.name }}
    </NuxtLink>
</template>

<script setup>
    const { locale, locales } = useI18n()

    const otherLocales = computed(() =>
        locales.value.filter(item => item.code !== locale.value)
    )
</script>