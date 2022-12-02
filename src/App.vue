<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { ref } from "vue";
import musicData from "./Data.json";
import Container from "./components/Container.vue";
import List from "./components/List.vue";
import PlayerPill from "./components/PlayerPill.vue";

const videoId = ref("AtwasYkNRlc");
const data = ref(musicData);
const focused = ref(null);
const showIntro = ref(false);

// keep track of what element is currently being viewed

function updateSeen(name) {
    if (name === focused.value) {
        focused.value = null;
    } else {
        focused.value = name;
    }
}
function travelToFirst() {
    document.getElementById("container" + data.value[0].videoId).scrollIntoView({
        behavior: "smooth",
        block: "start",
    });
}
setTimeout(() => {
    showIntro.value = true;
    console.log("Hello");
}, 1000);
</script>

<template>
    <player-pill></player-pill>
    <div class="total-container intro">
        <transition name="fade">
            <div v-show="showIntro">
                <h1>— Welcome —</h1>
                <p>I've been playing piano since I was 5, and have been teaching for around 4 years at <a href="https://www.peeryacademy.com/" style="color: black">PPA</a>. Here's a collection of some of the music I have played over my piano journey.</p>
                <button :href="'#' + data[0].name" @click="travelToFirst">
                    <img src="./assets/chevron.png" />
                </button>
            </div>
        </transition>
    </div>
    <list :focused="focused"></list>
    <div class="total-container">
        <container v-for="object in data" :key="object.videoId" :videoId="object.videoId" :name="object.name" :description="object.description" :date="object.date" @viewed="updateSeen"> </container>
    </div>
    <!-- <button class="pause-container">||</button> -->
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500&display=swap");

/*  */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

body {
    margin: 0;
}
html {
    scroll-behavior: smooth;
}
/* .pause-container {
    position: fixed;
    bottom: 1rem;
    left: 1rem;
    background-color: rgb(240, 240, 240);
    border: 0;
    outline: 0;
    border-radius: 5rem;
    cursor: pointer;
    padding: 1rem;
    width: 3rem;
    height: 3rem;
} */
.total-container {
    /* display: flex;
    flex-direction: row; */
    width: 100%;
}
.intro {
    width: 50vw;
    margin-left: 25vw;
    height: 100vh;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 20vh;
}
.intro > * > h1 {
    font-size: 4rem;
    margin: 0;
}
.intro > * > p {
    font-size: 1.5rem;
}
.intro > * > button {
    background-color: transparent;
    border: none;
}
.intro img {
    width: 50px;
    /* height: 50px; */
    margin-top: 2rem;
    transition: transform 0.25s;
    cursor: pointer;
}
.intro img:hover {
    transform: translateY(5px);
}

#app {
    /* font-family: Avenir, Helvetica, Arial, sans-serif; */
    font-family: "Poppins", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /* text-align: center; */
    /* color: #2c3e50;
    margin-top: 60px; */
}
iframe {
    width: 100%;
    height: 100%;
    background-color: white;
    border-radius: 5px;
    cursor: pointer;
}
@media screen and (max-width: 768px) {
    .intro > * > h1 {
        font-size: 2.5rem !important;
    }
    .intro {
        width: calc(100% - 3rem) !important;
        margin-left: 1.5rem !important;
    }
}
</style>
