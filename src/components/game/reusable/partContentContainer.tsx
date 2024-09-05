import { ComponentProps } from "solid-js";
import { cn } from "../../../utils/cn";

interface Props extends ComponentProps<"div"> {}

export default function PartContentContainer({
  class: className,
  ...rest
}: Props) {
  return <div {...rest} class={cn("space-y-2", className)} />;
}
