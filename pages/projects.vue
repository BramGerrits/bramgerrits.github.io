<template>
  <div class="prose max-w-2xl w-full mx-auto px-4 py-16">
    <h2 class="text-3xl font-bold text-center mb-16 initial-state fade-blur-up">{{ $t('projects.title') }}</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
      <ProjectCard
        v-for="(project, index) in projects"
        :key="project.title"
        :title="project.title"
        :image-url="project.imageUrl"
        :project-url="project.projectUrl"
        :overlay-color="project.overlayColor"
        :class="`initial-state fade-blur-up animation-delay-${(index + 1) * 100}`"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
interface Project {
  title: string
  imageUrl: string
  projectUrl: string
  overlayColor?: string
}

const projects: Project[] = [
  {
    title: 'De Goede Herder',
    imageUrl: '/images/degoedeherder.jpg',
    projectUrl: 'https://www.degoedeherderparochie.nl/',
    overlayColor: 'linear-gradient(to top, rgba(59,130,246,0.3), rgba(245,245,220,0.3))'
  },
  {
    title: 'Napoli Groningen',
    imageUrl: '/images/napoli.jpeg',
    projectUrl: 'https://napoligroningen.nl/',
    overlayColor: 'linear-gradient(to top, rgba(34,197,94,0.3), rgba(234,179,8,0.3))'
  }
]
</script>
