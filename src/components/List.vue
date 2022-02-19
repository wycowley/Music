<script setup>
import { ref, onMounted, computed } from "vue";
import musicData from "../Data.json";

const titles = ref(musicData);

//
</script>
<template>
    <div class="link-container">
        <div v-for="title in titles" :key="title.videoId" class="individual-link">
            <a :href="'#' + title.videoId">{{ title.name }}</a>
        </div>
    </div>
</template>
<style scoped>
a {
    text-align: right;
    font-size: 1.1rem;
    font-weight: normal;
}
.individual-link {
    /* width: fit-content; */
    text-align: right;
}
.link-container {
    position: fixed;
    right: 2rem;
    bottom: 2rem;
}
</style>
