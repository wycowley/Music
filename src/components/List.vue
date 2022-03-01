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
//
function switchCollapse() {
    collapse.value = !collapse.value;
}
</script>
<template>
    <div class="link-container">
        <div class="chevron-container">
            <button @click="switchCollapse" :class="collapse ? 'flip' : 'noflip'">
                <img src="hamburger.svg" class="chevron" />
            </button>
        </div>
        <Transition>
            <div v-if="!collapse">
                <div v-for="title in titles" :key="title.videoId" class="individual-link">
                    <a :href="'#' + title.name" :class="title.name === focused ? 'focused' : ''"><span>—</span>{{ " " + title.name }}</a>
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
    transform: translateX(3rem);
    opacity: 0;
}
.v-enter-from * {
    transform: translateX(3rem);
    opacity: 0;
}
a {
    text-align: right;
    font-size: 1.25rem;
    font-weight: normal;
    color: initial;
    text-decoration: none;
    transition: all 0.25s;
}
a > span {
    opacity: 0;
    transition: opacity 0.25s;
}
a:hover > span {
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
    right: 2rem;
    top: 2rem;
    /* background-color: white; */
    /* height: 50vh;
    overflow: scroll; */
}
</style>
