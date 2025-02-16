<template>
  <div class="max-w-2xl md:max-w-6xl mx-auto px-4 py-16">
    <h2 class="text-3xl font-bold text-center mb-16 initial-state fade-blur-up">{{ $t('about.title') }}</h2>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div class="flex flex-col w-full relative initial-state fade-blur-up animation-delay-100">
        <nuxt-img 
          src="/images/ik.jpeg" 
          :alt="$t('about.portrait.alt')"
          class="rounded-lg shadow-lg w-full h-full object-cover"
          style="filter: url(#blue-filter);"
          format="webp"
          loading="lazy"
        />
      </div>
      <div class="space-y-6 initial-state fade-blur-up animation-delay-200">
        <p class="text-lg text-gray-600">
          {{ $t('about.introduction') }}
        </p>
        <div class="flex gap-4">
          <a 
            href="https://www.linkedin.com/in/bram-gerrits-6268391a3/" 
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
          >
            <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
            {{ $t('social.linkedin') }}
          </a>
          <a 
            href="https://github.com/BramGerrits"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
          >
            <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
            </svg>
            {{ $t('social.github') }}
          </a>
          <a 
            href="mailto:bramgggeee@gmail.com"
            class="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
          >
            <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
            {{ $t('social.email') }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>