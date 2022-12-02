import { ref } from "vue";

export const currentVideo = ref({ name: "", playing: false });
export const changeVideo = (video) => {
    currentVideo.value.name = video;
};
export const changePlaying = (playing) => {
    console.log("paused");
    currentVideo.value.playing = playing;
    console.log(currentVideo.value);
};
