<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { Payment } from '~/components/payments/columns';
import { columns } from '~/components/payments/columns';
import DataTable from '~/components/payments/DataTable.vue';


const { data, pending, error } = await useFetch<Payment[]>('/api/payments/list');

</script>

<template>
    <div class="py-10 mx-auto">
        <h2 class="font-semibold my-2">Payments List</h2>
        <div class="data" v-if="data?.length">
            <DataTable :columns="columns" :data="data" />
        </div>
        <div class="no-data" v-else>
            <DataTable :columns="columns" :data="[]" />
        </div>
    </div>
</template>