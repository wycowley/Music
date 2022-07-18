<script setup>
import { ref, onMounted, computed, toRefs } from "vue";
import musicData from "../Data.json";

const titles = ref(musicData);
const collapse = ref(true);

const props = defineProps({
    focused: {
        type: String,
    },
});
const { focused } = toRefs(props);
function switchCollapse() {
    collapse.value = !collapse.value;
}
function clickTitle(videoId) {
    console.log(videoId);
    document.getElementById("container" + videoId).scrollIntoView({
        behavior: "smooth",
        block: "start",
    });
}
</script>
<template>
    <div class="link-container" :class="collapse ? '' : 'backdrop'">
        <div class="chevron-container">
            <button @click="switchCollapse" :class="collapse ? 'flip' : 'noflip'">
                <img src="../assets/hamburger.svg" class="chevron" />
            </button>
        </div>
        <Transition>
            <div v-if="!collapse">
                <div v-for="title in titles" :key="title.videoId" class="individual-link">
                    <button :class="title.name === focused ? 'focused' : ''" @click="clickTitle(title.videoId)"><span>—</span>{{ " " + title.name }}</button>
                </div>
            </div>
        </Transition>

        <!-- {{ focused }} -->
    </div>
</template>
<style scoped>
.v-leave-active * {
    transition: all 0.5s;
}
.v-enter active * {
    transition: all 0.5s;
}
.v-leave-to * {
    opacity: 0;
}
.v-enter-from * {
    opacity: 0;
}
button {
    text-align: right;
    font-size: 1.25rem;
    font-weight: 400;
    color: initial;
    text-decoration: none;
    transition: all 0.25s;
    border: none;
    background-color: transparent;
    font-family: "Poppins", sans-serif;
    cursor: pointer;
}
button > span {
    opacity: 0;
    transition: opacity 0.25s;
}
button:hover > span {
    opacity: 1;
}
.focused {
    color: rgb(67, 127, 195);
    margin-right: 10px;
}
.focused > span {
    opacity: 1;
}
.chevron {
    width: 2.25rem;
    transition: transform 0.25s;
    /* margin-top: 2rem; */
}
.flip .chevron:hover {
    transform: translateX(-5px);
}
.noflip .chevron:hover {
    transform: translateX(5px);
}
.chevron-container {
    display: flex;
    width: 100%;
    justify-content: flex-end;
    margin-bottom: 1rem;
}
.chevron-container > button {
    /* transform: rotate(270deg); */
    background: none;
    border: none;
    cursor: pointer;
    transition: transform 0.25s;
}
/* .flip {
    transform: rotate(90deg);
} */
.noflip {
    transform: translateX(-5px);
}

.individual-link {
    /* width: fit-content; */
    text-align: right;
}
.link-container {
    position: fixed;
    right: 0rem;
    top: 0rem;
    padding: 2rem 2rem;
    padding-left: 0rem;
    /* background-color: white; */
    /* height: 50vh;
    overflow: scroll; */
    overflow: auto;
    height: calc(100% - 4rem);
}
.backdrop {
    background-color: hsla(0, 0%, 100%, 0.5);
    backdrop-filter: blur(5px);
}
@media screen and (max-width: 768px) {
    .backdrop {
        background-color: hsla(0, 0%, 100%, 0.75);
    }
    .link-container {
        padding: 0.5rem 0.5rem;
        height: calc(100% - 1rem);
    }
}
</style>
