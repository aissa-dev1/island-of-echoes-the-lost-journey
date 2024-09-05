import { ComponentProps, splitProps } from "solid-js";
import { cn } from "../../utils/cn";

interface Props extends ComponentProps<"button"> {
  variant?: keyof typeof Variants;
}

enum Variants {
  default = "bg-primary text-white",
  page = "bg-page text-black",
}

export default function Button(props: Props) {
  const [, rest] = splitProps(props, ["class", "children", "variant"]);
  const variant = props.variant ? props.variant : "default";

  return (
    <button
      {...rest}
      class={cn(
        "text-sm font-medium py-1.5 px-2 rounded-md duration-100 hover:opacity-90 active:opacity-95 disabled:opacity-50",
        Variants[variant],
        props.class
      )}
    >
      {props.children}
    </button>
  );
}
