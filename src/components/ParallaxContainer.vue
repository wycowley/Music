<script setup>
import { ref, onMounted, computed } from "vue";
import { scroll } from "./Scroll";

const divcontainer = ref(null);
const positionOffset = ref(0);

const parallaxOffset = computed(() => {
    // console.loge(offsetTop.value);
    // return Math.max(scroll.value / 5 - positionOffset.value / 5, 0 - window.innerHeight / 5);
    return scroll.value / 5 - positionOffset.value / 5;
});
// const scrollLogic = (evt) => {
//     parallaxOffset.value = Math.max(window.scrollY / 5 - positionOffset.value / 5, 0 - window.innerHeight / 5);
// };

onMounted(() => {
    positionOffset.value = window.scrollY + divcontainer.value.getBoundingClientRect().y;
    // console.log(positionOffset.value);
    // console.log(divcontainer.value.getBoundingClientRect());
});
</script>
<template>
    <div
        :style="{
            transform: `translateY(${parallaxOffset}px)`,
        }"
        ref="divcontainer"
    >
        <slot></slot>
    </div>
</template>
<style scoped>
div {
    width: auto;
    height: auto;
    /* background-color: rgb(240, 240, 240); */
    position: relative;
    /* transition: top 0.01s ease-in-out; */
}
</style>
