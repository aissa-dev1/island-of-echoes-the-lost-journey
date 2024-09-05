import { ComponentProps } from "solid-js";
import { cn } from "../../utils/cn";

interface PopUpOverlayProps extends ComponentProps<"div"> {}

export function PopUpOverlay({ class: className, ...rest }: PopUpOverlayProps) {
  return (
    <div
      {...rest}
      class={cn("fixed top-0 left-0 w-full h-full bg-black/25 z-20", className)}
    />
  );
}

interface PopUpContainerProps extends ComponentProps<"div"> {}

export function PopUpContainer({
  class: className,
  ...rest
}: PopUpContainerProps) {
  return (
    <div
      {...rest}
      class={cn(
        "fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100%-32px)] h-[500px] bg-page text-black p-8 md:w-[750px]",
        className
      )}
    />
  );
}
