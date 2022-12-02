<script setup>
import { computed, ref } from "vue";
import { idFocused, playingFocused, changeVideo, changePlaying } from "../assets/PlayerController.js";
import data from "../Data.json";

const videoName = computed(() => {
    if (idFocused.value == "") {
        return "No video playing";
    }
    return data.find((video) => video.videoId === idFocused.value).name;
});
</script>
<template>
    <div class="container" v-show="idFocused != ''">
        <h1>{{ videoName }}</h1>
        <button @click="changePlaying(!playingFocused)">
            <img v-if="playingFocused" src="../assets/pause.png" alt="play" /><img v-else src="../assets/play.png" alt="pause" style="transform: scale(80%)" /><!--<img :src="playingFocused ? '../assets/hamburger.svg' : '../assets/play.png'" alt="play/pause" />-->
        </button>
    </div>
</template>
<style scoped>
.container {
    position: fixed;
    bottom: 1rem;
    right: 1rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    z-index: 5;

    padding: 1rem;
    border-radius: 2rem;
    border: 1px solid rgb(220, 220, 220);
    background-color: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(10px);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);

    width: fit-content;
    transition: width 0.25s;
}
.container > h1 {
    font-size: 1.5rem;
    font-weight: 400;
    margin: 0;
    width: fit-content;
}
.container > button {
    margin-left: 1rem;
    background-color: transparent;
    border: none;
    cursor: pointer;
}
.container > button > img {
    width: 2rem;
    height: 2rem;
}
</style>
