<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { ref } from "vue";
import Container from "./components/Container.vue";

const videoId = ref("AtwasYkNRlc");
</script>

<template>
    <div class="total-container intro">
        <h1>— Welcome —</h1>
        <p>I've been playing piano for over 12 years now, and have been teaching for around 4 years at PPA. Here's a timeline of some of the music I have played over my piano journey.</p>
    </div>
    <div class="total-container">
        <container videoId="zltBrEg72Ng"> </container>
        <container videoId="AtwasYkNRlc"> </container>
    </div>
</template>

<style>
/*  */
.total-container {
    /* display: flex;
    flex-direction: row; */
    width: 100vw;
}
.intro {
    width: 80vw;
    margin-left: 10vw;
}
.intro > h1 {
    font-size: 4rem;
}
.intro > p {
    font-size: 1.5rem;
}

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    /* color: #2c3e50;
    margin-top: 60px; */
}
iframe {
    width: 100%;
    height: 100%;
    background-color: white;
    border-radius: 5px;
}
</style>
