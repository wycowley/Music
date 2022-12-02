<script setup>
import YoutubeVideo from "./YoutubeVideo.vue";
import { onMounted, ref } from "vue";
const emit = defineEmits(["viewed"]);

// set up intersection observer to see which one is viewed right now

const viewbox = ref(null);
const seen = ref(false);
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
    if (entries[0].intersectionRatio > 0.2) {
        seen.value = true;
    }
    if (entries[0].intersectionRatio > 0.4) {
        emit("viewed", props.name);
    }
}
// zltBrEg72Ng
</script>
<template>
    <div :class="'container ' + (seen ? 'fade-in' : '')" ref="viewbox" :id="'container' + props.videoId">
        <youtube-video :videoId="props.videoId" :seen="seen"></youtube-video>
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
@media screen and (max-width: 768px) {
    .container {
        flex-direction: column !important;

        height: auto !important;
        margin-bottom: 10rem !important;
    }
    .all-text {
        margin-left: 0 !important;
        width: calc(100% - 4rem) !important;
        height: auto !important;
        margin-top: 3rem;
    }
    .title > h1 {
        font-size: 1.75rem !important;
    }
    .title > p {
        font-size: 1.25rem !important;
    }
}

.container {
    display: flex;
    flex-direction: row;

    width: calc(100% - 4rem);
    margin: 0 2rem;
    height: 100vh;
    align-items: center;
    justify-content: center;
    margin-bottom: 25vh;

    opacity: 0;
}
.fade-in {
    opacity: 1;
    animation: fadeIn 0.25s;
    animation-delay: 0.5s;
}
@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
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
/* @media screen and (max-width: 1080px) {
    .container {
        flex-direction: column;
    }
    .all-text {
        width: 100%;
    }
} */
</style>
