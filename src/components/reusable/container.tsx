import { ComponentProps } from "solid-js";
import { cn } from "../../utils/cn";

interface Props extends ComponentProps<"div"> {}

export default function Container({ class: className, ...rest }: Props) {
  return <div class={cn("container mx-auto", className)} {...rest} />;
}
