import {
  ComponentProps,
  createEffect,
  createSignal,
  on,
  onCleanup,
  onMount,
} from "solid-js";
import { cn } from "../../utils/cn";

interface Props extends ComponentProps<"p"> {
  start?: FloatingTextDirection;
}

type FloatingTextDirection = "up" | "down";

enum Bottom {
  Min = 16,
  Max = 116,
}

export default function FloatingText({
  class: className,
  start = "down",
  ...rest
}: Props) {
  let animationId!: number;
  const bottomDefault = start === "down" ? Bottom.Max : Bottom.Min;
  const [bottom, setBottom] = createSignal(bottomDefault);
  const [direction, setDirection] = createSignal<FloatingTextDirection>(start);

  createEffect(
    on(bottom, () => {
      if (bottom() >= Bottom.Max) {
        setDirection("down");
      }
      if (bottom() <= Bottom.Min) {
        setDirection("up");
      }
    })
  );

  onMount(() => {
    function handleDirection() {
      if (direction() === "down") {
        setBottom((prev) => prev - 1);
        return;
      }

      setBottom((prev) => prev + 1);
    }

    function animate() {
      handleDirection();
      animationId = requestAnimationFrame(animate);
    }

    animate();
  });

  onCleanup(() => {
    cancelAnimationFrame(animationId);
  });

  return (
    <p
      class={cn("absolute text-black", className)}
      style={{ bottom: `${bottom()}px` }}
      {...rest}
    />
  );
}
