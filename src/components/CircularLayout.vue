<!-- 

This is a Vue component representing circular layout of any imems.
The 'centralElement' slot accepts an element to place in the center.
The 'surroundingElements' slot accepts elements to be spaced around the central one.

Usage example:

<CircularLayout radiusPx="160" midElementAngle="-45" order="clockwise" angularSpacing="20">
    <template v-slot:centralElement>
        <div class="w-10 h-10 rounded-full bg-slate-500"></div>
    </template>
    <template v-slot:surroundingElements>
        <div class="w-10 h-10 rounded-full bg-red-400"></div>
        <div class="w-10 h-10 rounded-full bg-orange-500"></div>
        <div class="w-10 h-10 rounded-full bg-amber-300"></div>
        <div class="w-10 h-10 rounded-full bg-lime-400"></div>
        <div class="w-10 h-10 rounded-full bg-emerald-300"></div>
        <div class="w-10 h-10 rounded-full bg-teal-400"></div>
        <div class="w-10 h-10 rounded-full bg-cyan-400"></div>
    </template>
</CircularLayout>

-->

<template>
    <div class="relative">
        <div id="central" class="absolute">
            <slot name="centralElement"></slot>
        </div>
        <div id="surrounding" class="absolute">
            <slot name="surroundingElements"></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineProps, onMounted } from "vue";

onMounted(() => {
    const surroundingElenemtsContainer = document.getElementById('surrounding');
    const surroundingElements = surroundingElenemtsContainer?.children;
    if (surroundingElenemtsContainer === undefined) throw new Error('No surrounding elements` container found!');
    if (surroundingElenemtsContainer?.childNodes === undefined) throw new Error('No child elements found.');
    if (surroundingElements === undefined) throw new Error('No child elements found.');

    if (props.order === 'counterclockwise') {
        for (let i = 1; i < surroundingElenemtsContainer?.childNodes.length; i++) {
            surroundingElenemtsContainer?.insertBefore(surroundingElenemtsContainer?.childNodes[i], surroundingElenemtsContainer?.firstChild);
        }
    }

    const radius = Number(props.radiusPx);
    const numberOfsurroundingElements = surroundingElements.length;
    const arcAngle = (numberOfsurroundingElements - 1) * Number(props.angularSpacing);
    const angularSpacing = Number(props.angularSpacing);

    let elementAngle = Number(props.midElementAngle) - 0.5 * arcAngle;

    for (let elt of surroundingElements) {
        elt.setAttribute(
            "style",
            `transform: rotate(${elementAngle}deg)
                        translateX(${radius}px)
                        rotate(${-elementAngle}deg);`
        );
        elt.classList.add("absolute");
        elementAngle += angularSpacing;
    }
})

const props = defineProps({
    radiusPx: String,          // distance from the center of #central to centers of all the elements in the #surrounding slot
    midElementAngle: String,   // angular distance from the horizontal right-directed axis to the center of the set of surrounding elements
    order: String,             // clockwise or counterclockwise type of arrangement
    angularSpacing: String,    // angular distance between surrounding elements
})
</script>