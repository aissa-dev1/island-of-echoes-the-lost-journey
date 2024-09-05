import { ComponentProps, splitProps } from "solid-js";
import { cn } from "../../../utils/cn";

interface Props extends ComponentProps<"h3"> {}

export default function PartTitle(props: Props) {
  const [, rest] = splitProps(props, ["class", "children"]);

  return (
    <h3 {...rest} class={cn("text-2xl font-medium font-mono", props.class)}>
      {props.children}
    </h3>
  );
}
