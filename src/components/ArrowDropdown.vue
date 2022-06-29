<!-- 

A dropdown menu with transition.
On load only the arrow icon is visible.
On click rotates the icon and shows the menu container.

Usage example:

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

-->

<template>
    <div class="w-fit h-fit">
        <i class="fa-solid fa-angle-down cursor-pointer" v-on:click="toggleVisibility"
            v-bind:style="{ transition: 'all 0.5s ease-out', transform: 'rotate('+ (isVisible ? -180 : 0) +'deg)' }"></i>
        <menu class="bg-slate-100 w-fit h-fit p-3 space-y-2 rounded-xl"
            v-bind:style="{ transition: 'all 0.5s ease-out', visibility: (isVisible ? 'visible' : 'hidden'), opacity: (isVisible ? 1 : 0) }">
            <slot></slot>
        </menu>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const isVisible = ref(false);

function toggleVisibility () {
    isVisible.value = !isVisible.value;
}
</script>
