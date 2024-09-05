import { ComponentProps, JSX, splitProps } from "solid-js";
import { cn } from "../../../utils/cn";
import { soundController } from "../../../utils/sound";

interface Props extends ComponentProps<"div"> {
  icon: JSX.Element;
  content: string;
}

export default function InventoryItemShape(props: Props) {
  const [, rest] = splitProps(props, ["class", "children", "icon", "content"]);

  function internalClick() {
    soundController.play(soundController.clickSound);
  }

  return (
    <div
      {...rest}
      class={cn(
        "relative flex flex-col items-center justify-center gap-2 w-full border border-primary p-2 rounded-md cursor-pointer",
        props.class
      )}
      onClick={(e) => {
        internalClick();

        if (typeof props.onClick === "function") {
          props.onClick(e);
        }
      }}
    >
      {props.icon}
      <p class="text-sm font-medium text-center">{props.content}</p>
      {props.children}
    </div>
  );
}
