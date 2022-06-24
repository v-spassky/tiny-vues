<!-- 

This is a Vue component representing 'versatile' (social) media link.
Versatility lies in the ability to use (social) media icon/logo and a description to it.

Usage example:

<RoundedImgWithPopup mediaLogoSrc="https://play-lh.googleusercontent.com/hB9t3Z-mi284_49HA3nAuhO-W5Cyhje7r2P9McdgORoVCd-0SV54c12NMQWLHnqALw"
                     mediaLink="https://medium.com/@networksecurity"
                     mediaDescription="This is my Medium.com blog. Here I occasionally write stuff regarding my infosec experience."/>

-->

<template>
    <div class="relative w-16 h-16 flex justify-center items-center">
        <a v-bind:href="mediaLink" target="_blank">
            <img class="rounded-full border border-gray-100 shadow-xl" alt="Media image" v-bind:src="mediaLogoSrc"
                v-on:mouseover="toggleDescriptionVisibility" v-on:mouseleave="toggleDescriptionVisibility" />
        </a>
        <Transition>
            <div class="absolute top-3/4 left-3/4 w-80 h-fit
                        z-10 p-2 rounded-md 
                        bg-slate-100 shadow-lg" v-if="descriptionIsVisible">
                {{ mediaDescription }}
            </div>
        </Transition>
    </div>
</template>

<script setup lang="ts">
import { ref, defineProps, Ref } from "vue";

let descriptionIsVisible: Ref<boolean> = ref(false);
function toggleDescriptionVisibility() {
    descriptionIsVisible.value = !descriptionIsVisible.value;
}

const props = defineProps({
    mediaLogoSrc: String,      // path to resource logo
    mediaLink: String,         // link to the resource
    mediaDescription: String,  // description of the resource
})
</script>

<style>
.v-enter-active, .v-leave-active {
    transition: opacity 0.5s ease;
}

.v-enter-from, .v-leave-to {
    opacity: 0;
}
</style>