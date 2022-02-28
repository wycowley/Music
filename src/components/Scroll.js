import { ref } from "vue";
export const scroll = ref(0);
document.addEventListener("scroll", (value) => (scroll.value = window.scrollY));
