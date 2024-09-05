import { onMount } from "solid-js";

export function useScreenScroll() {
  onMount(() => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  });
}
