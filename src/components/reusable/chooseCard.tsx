import { Accessor, ComponentProps, splitProps } from "solid-js";
import { cn } from "../../utils/cn";

interface Props<T> extends ComponentProps<"div"> {
  active: Accessor<T>;
  activeIfEqual: T;
  variant?: keyof typeof Variants;
}

enum Variants {
  default = "bg-primary text-white",
  page = "bg-page text-black",
}

export default function ChooseCard<T>(props: Props<T>) {
  const [, rest] = splitProps(props, [
    "class",
    "children",
    "active",
    "variant",
  ]);
  const variant = props.variant ? Variants[props.variant] : Variants["default"];

  return (
    <div
      {...rest}
      class={cn(
        "flex items-center justify-center h-[250px] p-4 rounded-md cursor-pointer",
        variant,
        props.class
      )}
      classList={{
        "ring-4 ring-purple-700": props.active() === props.activeIfEqual,
      }}
    >
      {props.children}
    </div>
  );
}
