import { ComponentProps, splitProps } from "solid-js";
import { cn } from "../../utils/cn";

interface Props extends ComponentProps<"img"> {}

export default function Icon(props: Props) {
  const [, rest] = splitProps(props, ["class", "children", "src"]);

  return (
    <img
      {...rest}
      src={`/icons/${props.src}`}
      class={cn("size-8", props.class)}
    />
  );
}
