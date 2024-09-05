import { ComponentProps, splitProps } from "solid-js";
import { cn } from "../../utils/cn";

interface Props extends ComponentProps<"input"> {
  variant?: keyof typeof Variants;
}

enum Variants {
  default = "bg-primary text-white focus:ring-white",
  page = "bg-page text-black focus:ring-primary",
}

export default function Input(props: Props) {
  const [, rest] = splitProps(props, ["class", "variant"]);
  const variant = props.variant ? props.variant : "default";

  return (
    <input
      {...rest}
      class={cn(
        "py-1 px-2 border-none outline-none rounded-md duration-100 focus:ring-4",
        Variants[variant],
        props.class
      )}
    />
  );
}
