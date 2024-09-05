import { ComponentProps } from "solid-js";
import { cn } from "../../../utils/cn";

interface Props extends ComponentProps<"div"> {}

export default function PartContainer({ class: className, ...rest }: Props) {
  return <div {...rest} class={cn("space-y-4", className)} />;
}
