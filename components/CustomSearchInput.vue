<script setup lang="ts">
import {
    Combobox,
    ComboboxInput,
    ComboboxOptions,
    ComboboxOption,
    TransitionRoot,
} from '@headlessui/vue'

const props = defineProps<{ items: any[] }>();
const emit = defineEmits(['change'])



let selected = ref()
let query = ref('')

let filteredItems = computed(() =>
    query.value === ''
        ? props.items
        : props.items.filter((item) =>
            item.label
                .toLowerCase()
                .replace(/\s+/g, '')
                .includes(query.value.toLowerCase().replace(/\s+/g, ''))
        )
)

const handleChange = (e: any) => {
    emit('change', e);
}
</script>

<template>
    <div class="">
        <Combobox v-model="selected" @update:model-value="handleChange">
            <div class="relative mt-1">
                <div class="">
                    <ComboboxInput class="input" :displayValue="(item: any) => item.label"
                        @change="query = $event.target.value" placeholder="Enter House Number" />
                </div>
                <TransitionRoot leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0"
                    @after-leave="query = ''">
                    <ComboboxOptions
                        class="absolute mt-1 max-h-60 w-full overflow-auto bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                        <div v-if="filteredItems.length === 0 && query !== ''"
                            class="relative cursor-default select-none py-2 px-4 text-gray-700">
                            Nothing found.
                        </div>

                        <ComboboxOption v-for="item in filteredItems" as="template" :key="item.id" :value="item"
                            v-slot="{ selected, active }">
                            <li class="relative cursor-default select-none py-2 px-4" :class="{
                                'bg-slate-500 text-white': active,
                                'text-gray-900': !active,
                            }">
                                <span class="block truncate" :class="{ 'font-medium': selected, 'font-normal': !selected }">
                                    {{ item.label }}
                                </span>
                                <span v-if="selected" class="absolute inset-y-0 left-0 flex items-center pl-3"
                                    :class="{ 'text-white': active, 'text-slate-500': !active }">
                                </span>
                            </li>
                        </ComboboxOption>
                    </ComboboxOptions>
                </TransitionRoot>
            </div>
        </Combobox>
    </div>
</template>
  