<script lang="ts" setup>
defineProps<{ text: string }>()
</script>
<template>
    <div class="alert-box p-3 text-red-700 font-medium w-full bg-red-200 text-sm rounded-lg border border-red-700">
        {{ text }}
    </div>
</template>