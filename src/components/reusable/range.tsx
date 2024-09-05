import { ComponentProps, splitProps } from "solid-js";
import { cn } from "../../utils/cn";

interface Props extends ComponentProps<"input"> {}

export default function Range(props: Props) {
  const [, rest] = splitProps(props, ["class", "type"]);

  return (
    <input
      {...rest}
      class={cn(
        "w-full h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full appearance-none cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 accent-transparent relative",
        props.class
      )}
      type="range"
    />
  );
}
