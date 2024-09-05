import { ComponentProps } from "solid-js";
import { cn } from "../../../utils/cn";

interface Props extends ComponentProps<"div"> {}

export default function PartActions({ class: className, ...rest }: Props) {
  return (
    <div {...rest} class={cn("grid grid-cols-2 gap-4 lg:flex", className)} />
  );
}
