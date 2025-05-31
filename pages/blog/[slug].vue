<template>
    <div class="max-w-6xl mx-auto px-4 mt-16 w-full flex items-center flex-col flex-1">
        <bread-crumbs 
            class="mr-auto"
            :links="crumbs"
        />
        <div class="w-full mt-4">
            <ContentRenderer 
                class="rich-content"
                v-if="data?.blog" 
                :value="data?.blog" 
            />
        </div>
    </div>
</template>

<script lang="ts" setup>
    import BreadCrumbs from '@/components/BreadCrumbs.vue'
    import type { RouteLocationRaw } from 'vue-router'

    const route = useRoute()
    const { locale, locales, t } = useI18n()
    const setI18nParams = useSetI18nParams();

    const { data } = useAsyncData(async (ctx) => {
        const blog = await queryCollection('blogs')
            .path(route.path)
            .where('locale', '=', locale.value)
            .first();

        if (!blog) {
            throw createError({
                statusCode: 404,
                statusMessage: 'Blog not found',
            })
        }

        const translatedBlogs = await queryCollection('blogs')
            .where('blogKey', '=', blog?.blogKey)
            .all()

        const i18nParams = locales.value.reduce((acc, locale) => {
            const article = translatedBlogs.find(blog => blog.locale === locale.code);

            return {
                ...acc,
                [locale.code]: {
                    slug: article?.path?.split('/')?.at(-1)
                }
            }
        }, {})

        setI18nParams(i18nParams)

        return {
            blog,
            i18nParams
        }
    }, {
        server: true
    })

    setI18nParams(data.value?.i18nParams ?? {})

    const crumbs = computed(() => {
        return [
            {
                route: ({
                    name: 'blog'
                } as RouteLocationRaw),
                name: t('blog.name')
            },
            {
                name: data.value?.blog.title ?? ""
            }
        ]
    })
</script>