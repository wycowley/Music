<script setup>
import { computed, ref } from "vue";
import { currentVideo, changeVideo, changePlaying } from "../assets/PlayerController.js";
import data from "../Data.json";

const videoName = computed(() => {
    if (currentVideo.value.name == "") {
        return "No video playing";
    }
    return data.find((video) => video.videoId === currentVideo.value.name).name;
});
</script>
<template>
    <div class="container">
        <h1>{{ videoName }}</h1>
        <button @click="changePlaying(!currentVideo.playing)">{{ currentVideo.playing ? "pause" : "play" }}</button>
    </div>
</template>
<style scoped>
.container {
    position: fixed;
    bottom: 1rem;
    left: 1rem;
}
</style>
