import { ComponentProps, splitProps } from "solid-js";
import { cn } from "../../utils/cn";

interface Props extends ComponentProps<"label"> {}

export default function Label(props: Props) {
  const [, rest] = splitProps(props, ["class", "children"]);

  return (
    <label {...rest} class={cn("font-bold capitalize", props.class)}>
      {props.children}
    </label>
  );
}
