<template>
    <nav class="flex gap-4 items-center justify-between my-2">
        <h1 class="text-xl md:text-2xl my-1 md:my-2 font-semibold">Indesign Makumbi</h1>
        <div class="menu-items flex gap-4">
            <NuxtLink to="/" active-class="active-route" class="cursor-not-allowed">Water update</NuxtLink>
            <NuxtLink to="/" active-class="active-route" class="cursor-not-allowed">Tenants</NuxtLink>
            <NuxtLink>Account</NuxtLink>
        </div>
    </nav>
</template>

<style scoped>
.active-route {
    @apply text-slate-400
}
</style>