<template>
    <div class="h-screen flex justify-center items-center">
        <CircularLayout midElementAngle="30" order="clockwise" angularSpacing="">
            <template v-slot:centralElement>
                <p class="bg-cyan-600 w-fit">djasbs</p>
            </template>
            <template v-slot:surroundingElements>
                <p class="absolute bg-slate-400 w-fit">LOLOLO</p>
                <p class="absolute bg-red-500 w-fit">KOKOKO</p>
                <p class="absolute bg-green-300 w-fit">MEMEMEME</p>
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