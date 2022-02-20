<script setup>
import ParallaxContainer from "./ParallaxContainer.vue";
import YoutubeVideo from "./YoutubeVideo.vue";
import { onMounted, ref } from "vue";
const emit = defineEmits(["viewed"]);

// set up intersection observer to see which one is viewed right now

const viewbox = ref(null);

const props = defineProps({
    videoId: {
        type: String,
    },
    date: {
        type: String,
    },
    name: {
        type: String,
    },
    description: {
        type: String,
    },
});

onMounted(() => {
    const options = {
        rootMargin: "0px",
        threshold: 0.5,
    };
    const observer = new IntersectionObserver(observed, options);
    observer.observe(viewbox.value);
});
function observed(entries) {
    if (entries[0].intersectionRatio > 0.4) {
        emit("viewed", props.name);
    }
}
// zltBrEg72Ng
</script>
<template>
    <div :id="props.name"></div>
    <div class="container" ref="viewbox">
        <parallax-container>
            <youtube-video :videoId="props.videoId"></youtube-video>
        </parallax-container>
        <!-- All Text Elements -->
        <div class="all-text">
            <div class="title">
                <p>— {{ props.date }} —</p>
                <h1>{{ props.name }}</h1>
            </div>
            <div class="description">
                <p>{{ props.description }}</p>
            </div>
        </div>
    </div>
</template>
<style scoped>
.container {
    display: flex;
    flex-direction: row;
    width: calc(100% - 4rem);
    margin: 0 2rem;
    height: 100vh;
    align-items: center;
    margin-bottom: 25vh;
}
.all-text {
    margin-left: 5rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: calc(50% - 5rem);
}
.title {
    text-align: center;
}
.title > p {
    font-size: 1.5rem;
    /* font-weight: bold; */
    /* color: #2c3e50; */
    margin: 0;
}
.title > h1 {
    margin: 0;
    font-size: 3rem;
}
.description {
    /* margin-top: ; */
    font-size: 1.5rem;
    /* color: #2c3e50; */
    text-align: left;
}
.description > p {
    font-size: 1.25rem;
}
</style>
