<script setup>
import { ref, onMounted, computed, toRefs, watch } from "vue";
import { idFocused, playingFocused, changePlaying, changeVideo } from "../assets/PlayerController.js";
const props = defineProps({
    videoId: {
        type: String,
    },
    horizontal: {
        type: Boolean,
    },
    seen: {
        type: Boolean,
    },
});

const { videoId, horizontal, seen } = toRefs(props);
const video = ref(null);

const player = ref();
const progress = ref(0);
const intervalReference = ref(null);

watch(seen, () => {
    if (seen.value) {
        startLoadingVideo();
    }
});
watch(playingFocused, (newPlaying) => {
    if (videoId.value == idFocused.value) {
        if (newPlaying) {
            console.log("Playing video");
            player.value.playVideo();
        } else {
            player.value.pauseVideo();
        }
    }
});
function startLoadingVideo() {
    try {
        var test;
        test = new YT.Player(videoId.value, {
            videoId: videoId.value,
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
    } catch (error) {
        console.log("Youtube Iframe not ready yet...");
        console.log(error);
        setTimeout(startLoadingVideo, 1000);
    }
}
function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING) {
        changeVideo(videoId.value);
        changePlaying(true);
        intervalReference.value = setInterval(() => {
            checkProgress();
        }, 1000);
    } else {
        clearInterval(intervalReference.value);
        changePlaying(false);
    }
}
const gradient = computed(() => {
    return `linear-gradient(to right, #000000 0%, #000000 ${progress.value}%, #f0f0f0 ${progress.value}%, #f0f0f0 100%)`;
});
function checkProgress() {
    progress.value = (player.value.getCurrentTime() / player.value.getDuration()) * 100;
}
function onPlayerReady() {}
function seek(e) {
    let target = e.target;
    let percent = (e.clientX - target.getBoundingClientRect().x) / target.getBoundingClientRect().width;
    player.value.seekTo(player.value.getDuration() * percent);
    progress.value = percent * 100;
}
</script>
<template>
    <div class="video-container" :style="{ aspectRatio: horizontal ? 16 / 9 : 9 / 16 }">
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
    width: clamp(250px, 25vw, 600px);
    aspect-ratio: 9/16;
    /* height: auto; */
}
</style>
