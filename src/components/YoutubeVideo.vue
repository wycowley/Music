<script setup>
import { ref, onMounted, computed } from "vue";

const props = defineProps({
    videoId: {
        type: String,
    },
    horizontal: {
        type: Boolean,
    },
});
const video = ref(null);

const player = ref();
const playing = ref(false);
const progress = ref(0);
const intervalReference = ref(null);
function onYouTubeIframeAPIReady() {
    var test;
    test = new YT.Player(props.videoId, {
        videoId: props.videoId,
        playerVars: {
            playsinline: 1,
            controls: 0,
            modestbranding: 1,
            disablekb: 1,
            rel: 0,
            origin: "http://localhost:3000",
        },
        events: {
            onReady: onPlayerReady,
            onStateChange: onPlayerStateChange,
        },
        // host: "http://www.youtube.com",
    });
    player.value = test;
}
function onPlayerReady() {}
function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING) {
        intervalReference.value = setInterval(() => {
            checkProgress();
        }, 1000);
    } else {
        clearInterval(intervalReference.value);
    }
}
const gradient = computed(() => {
    return `linear-gradient(to right, #000000 0%, #000000 ${progress.value}%, #f0f0f0 ${progress.value}%, #f0f0f0 100%)`;
});
// function changePlay() {
//     if (playing.value == true) {
//         player.value.pauseVideo();
//         playing.value = false;
//     } else {
//         player.value.playVideo();
//         playing.value = true;
//     }
// }
function checkProgress() {
    // console.log(player.value.getCurrentTime());
    progress.value = (player.value.getCurrentTime() / player.value.getDuration()) * 100;
}
function seek(e) {
    let target = e.target;
    // console.log(target.getBoundingClientRect());
    let percent = (e.clientX - target.getBoundingClientRect().x) / target.getBoundingClientRect().width;
    player.value.seekTo(player.value.getDuration() * percent);
    progress.value = percent * 100;
    // console.log(percent);
}

onMounted(() => {
    onYouTubeIframeAPIReady();
});
</script>
<template>
    <div class="video-container" :style="{ aspectRatio: props.horizontal ? 16 / 9 : 9 / 16 }">
        <div ref="video" :id="videoId" :style="{ backgroundColor: 'rgb(240,240,240)' }">LOADING...</div>
        <div :style="{ backgroundImage: gradient }" class="progressBar" @click="seek"></div>
        <!-- <button @click="changePlay">{{ playing ? "Pause" : "Play" }}</button> -->
    </div>
</template>
<style scoped>
.progressBar {
    height: 10px;
    border-radius: 10px;
    cursor: pointer;
    transition: filter 0.25s;
}
.progressBar:hover {
    filter: brightness(90%);
}

.video-container {
    width: 25vw;
    aspect-ratio: 9/16;
    height: auto;
}
</style>
