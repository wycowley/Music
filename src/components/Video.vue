<script setup>
import videojs from "video.js";
import { ref, onMounted } from "vue";

const video = ref(null);

onMounted(() => {
    video.value = videojs();
});
</script>
<template>
    <div>
        <video ref="videoPlayer" class="video-js"></video>
    </div>
</template>
<style scoped></style>
