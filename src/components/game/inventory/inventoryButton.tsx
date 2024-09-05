import { ComponentProps, splitProps } from "solid-js";
import { soundController } from "../../../utils/sound";
import Button from "../../reusable/button";
import { cn } from "../../../utils/cn";

interface Props extends ComponentProps<"button"> {}

export default function InventoryButton(props: Props) {
  const [, rest] = splitProps(props, ["class", "children"]);

  function internalOnClick() {
    soundController.play(soundController.clickSound);
  }

  return (
    <Button
      {...rest}
      class={cn(props.class)}
      onClick={(e) => {
        internalOnClick();

        if (typeof props.onClick === "function") {
          props.onClick(e);
        }
      }}
    >
      {props.children}
    </Button>
  );
}
