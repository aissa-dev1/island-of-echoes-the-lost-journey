import { ComponentProps, splitProps } from "solid-js";
import { cn } from "../../../utils/cn";

interface Props extends ComponentProps<"p"> {}

export default function PartContent(props: Props) {
  const [, rest] = splitProps(props, ["class", "children"]);

  return (
    <p {...rest} class={cn("text-sm font-semibold", props.class)}>
      {props.children}
    </p>
  );
}
