import { ref } from "vue";

export const playingFocused = ref(false);
export const idFocused = ref("");
export const changeVideo = (video) => {
    idFocused.value = video;
};
export const changePlaying = (playingArg) => {
    console.log(playingArg ? "playing" : "paused");
    playingFocused.value = playingArg;
};
