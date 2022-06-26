<template>
    <div class="h-screen flex justify-center items-center">
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
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CircularLayout from '@/components/CircularLayout.vue';

export default defineComponent({
    name: 'CircularLayoutView',
    components: {
        CircularLayout,
    },
});
</script>