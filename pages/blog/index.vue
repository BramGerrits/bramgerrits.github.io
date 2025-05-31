<template>
    <div class="flex flex-col flex-1 max-w-6xl mx-auto w-full px-4 pt-16">      
        <h1 class="text-5xl font-bold mb-8">
            {{ $t('blog.title') }}
        </h1>  
        <p class="mb-12">
            {{ $t('blog.introduction') }}
        </p>
        <div class="grid grid-cols-[1fr_1fr_1fr] auto-rows-[320px] gap-6">
            <nuxt-link 
                class="flex items-center justify-center border text-center"
                v-for="(blog, blogIndex) in blogs" 
                :key="blog.id"
                :to="blog.path"
            >
                <h2 class="text-xl font-semibold">
                    {{ blog.title }}
                </h2>
            </nuxt-link>
        </div>
    </div>
</template>

<script lang="ts" setup>
    const { locale } = useI18n()
    const { data: blogs } = await useAsyncData(async () => 
        queryCollection('blogs')
            .where('locale', '=', locale.value)
            .order('date', 'DESC')
            .all()
    )
</script>