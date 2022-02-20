<script setup>
import { ref, onMounted, computed, toRefs } from "vue";
import musicData from "../Data.json";

const titles = ref(musicData);

const props = defineProps({
    focused: {
        type: String,
    },
});
const { focused } = toRefs(props);
//
</script>
<template>
    <div class="link-container">
        <div v-for="title in titles" :key="title.videoId" class="individual-link">
            <a :href="'#' + title.name" :class="title.name === focused ? 'focused' : ''"><span>—</span>{{ " " + title.name }}</a>
        </div>
        <!-- {{ focused }} -->
    </div>
</template>
<style scoped>
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
.individual-link {
    /* width: fit-content; */
    text-align: right;
}
.link-container {
    position: fixed;
    right: 2rem;
    bottom: 2rem;
    /* height: 50vh;
    overflow: scroll; */
}
</style>
