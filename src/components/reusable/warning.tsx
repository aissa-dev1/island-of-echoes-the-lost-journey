import { ParentProps } from "solid-js";
import { cn } from "../../utils/cn";

export default function Warning(props: ParentProps) {
  return (
    <div
      class={cn("bg-white text-orange-400 font-medium py-1 px-2 rounded-md")}
    >
      {props.children}
    </div>
  );
}
