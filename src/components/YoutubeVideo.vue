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
        },
        events: {
            onReady: onPlayerReady,
            onStateChange: onPlayerStateChange,
        },
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
function changePlay() {
    if (playing.value == true) {
        player.value.pauseVideo();
        playing.value = false;
    } else {
        player.value.playVideo();
        playing.value = true;
    }
}
function checkProgress() {
    console.log(player.value.getCurrentTime());
    progress.value = (player.value.getCurrentTime() / player.value.getDuration()) * 100;
}

onMounted(() => {
    onYouTubeIframeAPIReady();
});
</script>
<template>
    <div class="video-container" :style="{ aspectRatio: props.horizontal ? 16 / 9 : 9 / 16 }">
        <div ref="video" :id="videoId">Test</div>
        <div :style="{ backgroundImage: gradient }" class="progressBar"></div>
        <!-- <button @click="changePlay">{{ playing ? "Pause" : "Play" }}</button> -->
    </div>
</template>
<style scoped>
.progressBar {
    height: 5px;
    border-radius: 5px;
}

.video-container {
    width: 25vw;
    aspect-ratio: 9/16;
    height: auto;
}
</style>
