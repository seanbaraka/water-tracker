<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { Payment } from '~/components/payments/columns';
import { columns } from '~/components/payments/columns';
import DataTable from '~/components/payments/DataTable.vue'

const data = ref<Payment[]>([
    {
        id: "RJLMN3RT82",
        amount: 200,
        houseNumber: "GG1",
        date: new Date().toLocaleDateString(),
        phoneNumber: "+254724****59"
    },
    {
        id: "RJQWE234C1",
        amount: 250,
        houseNumber: "I22",
        date: new Date().toLocaleDateString(),
        phoneNumber: "+254716****20"
    },
    {
        id: "RJK98NJK2Z",
        amount: 1050,
        houseNumber: "AG1",
        date: new Date().toLocaleDateString(),
        phoneNumber: "+254723****10"
    },
])

</script>

<template>
    <div class="py-10 mx-auto">
        <h2 class="font-semibold my-2">Payments List</h2>
        <DataTable :columns="columns" :data="data" />
    </div>
</template>