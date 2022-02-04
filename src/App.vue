<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { ref } from "vue";
import ParallaxContainer from "./ParallaxContainer.vue";

const parallaxOffset = ref(0);
const scrollLogic = (evt) => {
    parallaxOffset.value = window.scrollY / 5;
};

document.addEventListener("scroll", scrollLogic);
</script>

<template>
    <parallax-container></parallax-container>
    <div class="test">h</div>
    <parallax-container></parallax-container>

    <div class="test">h</div>

    <div class="test">h</div>
    <div class="test">h</div>
    <div class="test">h</div>
</template>

<style>
.test {
    height: 150vh;
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
</style>
