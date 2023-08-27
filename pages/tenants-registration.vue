<script setup lang="ts">
const tenantCount = ref(220);
const houseNumber = ref();
const telephone = ref();
const tenantName = ref();
const waterUnits = ref(0)

const updateTenantAccount = () => {
    // save/update the tenants info
    const account = {
        name: tenantName.value,
        house: houseNumber.value,
        telephone: telephone.value,
        water: waterUnits.value
    }
    const toSave = JSON.stringify(account);
    localStorage.setItem(houseNumber.value, toSave);
    tenantName.value = null;
    telephone.value = null;
}

const houses = [
    { id: 1, label: 'Block A - AG1' },
    { id: 2, label: 'Block A - AG2' },
    { id: 3, label: 'Block G - GG1' },
    { id: 4, label: 'Block G - G11' },
    { id: 5, label: 'Block K - K41' },
    { id: 6, label: 'Block K - K42' },
]

</script>
<template>
    <div class="registration-container">
        <div class="tenant-update">
            <div class="input-group my-4">
                <label for="hse-no" class="text-xs">Search House Number</label>
                <CustomSearchInput :items="houses" @change="houseNumber = $event.label" />
            </div>
            <div class="input-group my-4">
                <label for="hse-no" class="text-xs">Name of Tenant</label>
                <input v-model="tenantName" type="text" id="hse-no" class="input" placeholder="Name of Tenant">
            </div>
            <div class="input-group my-4">
                <label for="hse-no" class="text-xs">Telephone Number</label>
                <input v-model="telephone" type="text" id="hse-no" class="input" placeholder="Tenant Telephone">
            </div>
            <div class="input-group my-4">
                <label for="hse-no" class="text-xs">Water Balance Units</label>
                <input v-model="waterUnits" type="text" id="initial-units" class="input" placeholder="Water Units Balance">
            </div>
            <button @click="updateTenantAccount" :disabled="!telephone || !tenantName || !houseNumber"
                class="primary-btn disabled:bg-slate-300 disabled:text-gray-400 disabled:cursor-not-allowed">Update
                Tenant Details
                Details</button>
        </div>
    </div>
</template>