<script setup>
import { ref } from "vue";
const parallaxOffset = ref(0);

const scrollLogic = (evt) => {
    parallaxOffset.value = window.scrollY / 5;
};

document.addEventListener("scroll", scrollLogic);
</script>
<template>
    <div
        :style="{
            top: parallaxOffset + 'px',
        }"
    >
        Test
    </div>
</template>
<style scoped>
div {
    width: 25%;
    height: 50vh;
    background-color: gray;
    position: relative;
}
</style>
