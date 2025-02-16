<template>
  <a :href="projectUrl" target="_blank" rel="noopener noreferrer" class="group relative overflow-hidden rounded-lg min-h-[320px] md:min-h-[480px]">
    <nuxt-img 
      :src="imageUrl" 
      :alt="title"
      class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 absolute inset-0 m-0"
      format="webp"
      loading="lazy"
    />
    <div class="absolute inset-0" :style="overlayStyle">
      <div class="flex items-center justify-center h-full flex-col">
        <h3 class="text-white text-3xl font-semibold text-center px-4 absolute m-0">
            {{ title }}
        </h3>
        <div class="absolute bottom-8 flex justify-center">
          <button class="bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition-colors">
            {{ $t('projects.visitWebsite') }}
          </button>
        </div>
      </div>
    </div>
  </a>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  title: string
  imageUrl: string
  projectUrl: string
  overlayColor?: string
}>(), {
  overlayColor: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)'
})

const overlayStyle = computed(() => ({
  background: `${props.overlayColor}, linear-gradient(180deg, rgba(0,0,0,0.4) 25%, rgba(0,0,0,0.7) 50%, rgba(0,0,0,0.4) 75%)`
}))
</script>