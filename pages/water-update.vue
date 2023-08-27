<script setup lang="ts">
const rate = ref(250);
const waterUnits = ref(0);
const amount = ref(0);
const referenceCode = ref();
const showAlert = ref(false);
const houseDetails = ref();

const units = computed(() => Number(amount.value / rate.value).toFixed(2));

const updateAccount = () => {
    if (!referenceCode.value || !amount.value || !houseDetails.value) {
        alert('Could not load the house details');
        return;
    }
    const { house } = houseDetails.value;
    const storedItem = localStorage.getItem(house);
    if (storedItem) {
        const details = JSON.parse(storedItem);
        const water = Number(details.water) + Number(units.value);
        details.water = water.toFixed(2);
        localStorage.removeItem(house);
        localStorage.setItem(house, JSON.stringify(details));
        houseDetails.value = null;
        referenceCode.value = '';
        amount.value = 0;
    } else {
        alert(`Could not update water balance for ${house}`)
        return;
    }
}

const houses = [
    { id: 1, label: 'Block A - AG1' },
    { id: 2, label: 'Block A - AG2' },
    { id: 3, label: 'Block G - GG1' },
    { id: 4, label: 'Block G - G11' },
    { id: 5, label: 'Block K - K41' },
    { id: 6, label: 'Block K - K42' },
]

const getHouseDetails = (e: any) => {
    const { label } = e;
    // attempt to find the house details from the store
    const house = localStorage.getItem(label);
    if (!house) {
        console.log('could not find house details for', label);
        houseDetails.value = null
        return;
    }
    const details = JSON.parse(house);
    const { water } = details;
    houseDetails.value = details;
    waterUnits.value = water;
}

</script>
<template>
    <div class="flex justify-center items-center">
        <div class="form-container w-full">
            <div class="container">
                <Alert v-if="showAlert" text="You need to fill in the correct details" />
                <div class="flex text-lg gap-4">
                    <p>Available Water Units</p>
                    <p>{{ waterUnits }}</p>
                </div>
            </div>
            <div class="gap-2 my-4">
                <div class="input-group my-4">
                    <label for="hse-no" class="text-xs">House Number</label>
                    <CustomSearchInput :items="houses" @change="getHouseDetails($event)" />
                    <div class="house-details text-sm text-slate-600 font-semibold py-2" v-if="houseDetails">{{
                        houseDetails.name + ' ' + houseDetails.telephone
                    }}
                    </div>
                </div>
                <div class="input-group my-4">
                    <label for="tel-no" class="text-xs">Reference Code</label>
                    <input v-model="referenceCode" maxlength="10" type="text" id="ref-no" class="input uppercase"
                        placeholder="Reference Code">
                </div>
                <div class="input-group my-4">
                    <label for="amount" class="text-xs">Topped up Amount <span v-if="Number(units) > 0">({{ units }}
                            units)</span></label>
                    <input v-model="amount" type="text" id="amount" class="input" placeholder="Amount">
                </div>
            </div>
            <button @click="updateAccount" :disabled="!amount || !referenceCode || !houseDetails"
                class="primary-btn disabled:bg-slate-300 disabled:text-gray-400 disabled:cursor-not-allowed">Update
                Account
                Details</button>
        </div>
    </div>
</template>