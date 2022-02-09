<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { ref } from "vue";
import ParallaxContainer from "./components/ParallaxContainer.vue";

const videoId = ref("AtwasYkNRlc");
</script>

<template>
    <div class="total-container">
        <div class="year-container"></div>
        <div class="music-container">
            <div class="individual-container">
                <parallax-container>
                    <youtube-iframe :video-id="videoId"></youtube-iframe>
                </parallax-container>
                <div class="test">h</div>
            </div>
            <div class="gap"><br /></div>
            <div class="individual-container">
                <parallax-container></parallax-container>
                <div class="test">h</div>
            </div>
            <div class="gap"><br /></div>

            <div class="individual-container">
                <parallax-container></parallax-container>
                <div class="test">h</div>
            </div>
            <div class="gap"><br /></div>

            <div class="individual-container">
                <parallax-container></parallax-container>
                <div class="test">h</div>
            </div>
        </div>
    </div>
</template>

<style>
/*  */
.total-container {
    display: flex;
    flex-direction: row;
    width: 100vw;
}
.music-container {
    width: calc(100% - 5rem);
}
.year-container {
    width: 5rem;
}
.gap {
    height: 15rem;
}
.individual-container {
    display: flex;
    flex-direction: row;
    width: calc(100% - 4rem);
    margin: 2rem;
}
.individual-container > * {
    margin: 3rem;
}
h1 {
    width: 25%;
    height: 50%;
    background-color: gray;
    position: relative;
}
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
iframe {
    width: 100%;
    height: 100%;
    background-color: white;
}
</style>
