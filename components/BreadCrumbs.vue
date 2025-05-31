<template>
    <div class="font-mono">
        <template v-for="(link, linkIndex) in links">
            <nuxt-link
                v-if="link.route"
                :to="localePath(link.route)"
            >
                {{ link.name }}
            </nuxt-link>
            <span v-else>
                {{ link.name }}
            </span>
            <span v-if="linkIndex < links.length -1">
                >
            </span>
        </template>
    </div>
</template>

<script lang="ts" setup>
    import type { RouteLocationRaw } from 'vue-router'

    defineProps<{
        links: Array<{
            route?: RouteLocationRaw
            name: string
        }>
    }>();

    const localePath = useLocalePath();
</script>