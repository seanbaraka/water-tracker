<template>
    <nav class="flex gap-4 items-center my-8">
        <h1 class="text-xl md:text-2xl my-1 md:my-2 font-semibold">Indesign Makumbi</h1>
        <div class="menu-items flex gap-4">
            <NuxtLink to="/water-update" active-class="active-route">Water update</NuxtLink>
            <NuxtLink to="/tenants-registration" active-class="active-route">Tenants</NuxtLink>
        </div>
    </nav>
</template>

<style scoped>
.active-route {
    @apply text-slate-400 underline
}
</style>