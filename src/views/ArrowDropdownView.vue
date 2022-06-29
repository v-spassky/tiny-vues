<template>
    <ArrowDropdown class="absolute top-15 left-15">
        <li>
            <a href="#" class="p-1 hover:bg-slate-200 font-bold rounded-md cursor-pointer">Create</a>
        </li>
        <li>
            <a href="#" class="p-1 hover:bg-slate-200 font-bold rounded-md cursor-pointer">About</a>
        </li>
        <li>
            <a href="#" class="p-1 hover:bg-slate-200 font-bold rounded-md cursor-pointer">Author</a>
        </li>
    </ArrowDropdown>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ArrowDropdown from '@/components/ArrowDropdown.vue';

export default defineComponent({
    name: 'ArrowDropdownView',
    components: {
        ArrowDropdown,
    },
});
</script>