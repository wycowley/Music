<script setup>
import ParallaxContainer from "./ParallaxContainer.vue";
import YoutubeVideo from "./YoutubeVideo.vue";

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
// zltBrEg72Ng
</script>
<template>
    <div class="container">
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
                <h2>{{ props.description }}</h2>
            </div>
        </div>
    </div>
</template>
<style scoped>
.container {
    display: flex;
    flex-direction: row;
    width: calc(100% - 4rem);
    margin: 2rem;
    height: 100vh;
    margin-bottom: 25vh;
    align-items: center;
}
.all-text {
    margin-left: 5rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: calc(50% - 5rem);
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
.description > h2 {
    font-size: 1.25rem;
}
</style>
