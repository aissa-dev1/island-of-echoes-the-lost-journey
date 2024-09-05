import { Accessor, createSignal, onCleanup, onMount } from "solid-js";

export function useAnimatedText(text: string): Accessor<string> {
  let animatedTextInterval: number;
  let animatedTextIndex = 1;
  const [animatedText, setanimatedText] = createSignal(text[0]);

  onMount(() => {
    animatedTextInterval = setInterval(() => {
      if (animatedTextIndex >= text.length) {
        clearInterval(animatedTextInterval);
        return;
      }

      setanimatedText((prev) => prev + text[animatedTextIndex]);
      animatedTextIndex++;
    }, 50);
  });

  onCleanup(() => {
    clearInterval(animatedTextInterval);
  });

  return animatedText;
}
