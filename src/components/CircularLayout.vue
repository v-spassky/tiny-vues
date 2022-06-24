<template>
    <div id="central">
        <slot name="centralElement"></slot>
    </div>
    <div id="surrounding">
        <slot name="surroundingElements"></slot>
    </div>
</template>

<script setup lang="ts">
import { ref, defineProps, Ref, onMounted } from "vue";

onMounted(() => {
    const surroundingElements = document.getElementById('surrounding')?.children;
    if (surroundingElements === undefined) throw new Error('No child elements found.');

    for (let elt of surroundingElements) {
        console.log(elt);
        elt.setAttribute("style", "transform: rotate(45deg) translateX(180px) rotate(-45deg);")

    }
})

const props = defineProps({
    midElementAngle: String,      // path to resource logo
    order: String,         // link to the resource
    angularSpacing: String,  // description of the resource
})
</script>