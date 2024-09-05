import { ComponentProps } from "solid-js";
import { cn } from "../../utils/cn";

interface Props extends Omit<ComponentProps<"div">, "children"> {}

export default function Separator({ class: className, ...rest }: Props) {
  return <div {...rest} class={cn("w-full h-0.5 bg-page", className)} />;
}
