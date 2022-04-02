import { ref } from "vue";
import _debounce from "lodash/debounce";
export const scroll = ref(0);
document.addEventListener(
    "scroll",
    _debounce(function () {
        scroll.value = window.scrollY;
    }, 10)
);
