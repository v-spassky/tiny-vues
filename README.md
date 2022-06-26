This is a repository for sharing my Vue components.
Built with Vue 3, Tailwindcss, Google fonts.

## • Rounded image with a popup

### Demonstration

<img src="files_for_readme/RoundedImgWithPopup_demo1.gif">

### Usage


```html
<!-- In index.html -->
<head>
    ...
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@300&display=swap" rel="stylesheet">
    ...
</head>
```

```html
<!-- In a view/component -->
<template>
    <RoundedImgWithPopup
        mediaLogoSrc="https://play-lh.googleusercontent.com/hB9t3Z-mi284_49HA3nAuhO-W5Cyhje7r2P9McdgORoVCd-0SV54c12NMQWLHnqALw"
        mediaLink="https://medium.com/@networksecurity"
        mediaDescription="This is my Medium.com blog. Here I occasionally write stuff regarding my infosec experience." />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import RoundedImgWithPopup from '@/components/RoundedImgWithPopup.vue';

export default defineComponent({
    name: 'RoundedImgWithPopupView',
    components: {
        RoundedImgWithPopup,
    },
});
</script>
```

#### [Source code](src/components/RoundedImgWithPopup.vue)

## • Circular layout

### Demonstration

<img src="files_for_readme/CircularLayout_demo1.jpg">

### Usage

```html
<!-- In a view/component -->
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
```

#### [Source code](src/components/CircularLayout.vue)