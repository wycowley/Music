<script setup>
import { ref, onMounted } from "vue";
const parallaxOffset = ref(0);
const divcontainer = ref(null);
const positionOffset = ref(0);

const scrollLogic = (evt) => {
    parallaxOffset.value = Math.max(window.scrollY / 5 - positionOffset.value / 5, 0 - window.innerHeight / 5);
};
onMounted(() => {
    positionOffset.value = window.scrollY + divcontainer.value.getBoundingClientRect().y;
    console.log(positionOffset.value);
    scrollLogic();
    console.log(divcontainer.value.getBoundingClientRect());
});
document.addEventListener("scroll", scrollLogic);
</script>
<template>
    <div
        :style="{
            top: parallaxOffset + 'px',
        }"
        ref="divcontainer"
    >
        <slot></slot>
    </div>
</template>
<style scoped>
div {
    width: 25%;
    height: 50vh;
    background-color: rgb(240, 240, 240);
    position: relative;
}
</style>
